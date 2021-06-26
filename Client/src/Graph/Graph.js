import React, { useState, useEffect } from 'react';
//import { Line } from '@ant-design/charts';
import axios from 'axios';
import { Layout, Menu, Button } from 'antd';

import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
export default function App() {
	const { Header, Content } = Layout;
	const [format, setForm] = useState('');
	const history = useHistory();
	const [data, setData] = useState([]);
	const asyncFetch = async () => {
		await axios
			.get('http://localhost:5000/prix')
			.then((res) => {
				setData(res.data.data);
			})
			.catch((error) => {
				console.log('fetch data failed', error);
			});
	};

	useEffect(() => {
		asyncFetch();
		console.log(data);
	}, []);

	return (
		<ComposedChart
			width={500}
			height={400}
			data={data}
			margin={{
				top: 20,
				right: 20,
				bottom: 20,
				left: 20,
			}}
		>
			<CartesianGrid stroke="#f5f5f5" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Area type="monotone" dataKey="production" fill="#8884d8" stroke="#8884d8" />
			<Bar dataKey="P_Debarquement_moy" barSize={20} fill="#413ea0" />
			<Line type="monotone" dataKey="P_Consommation_moy" stroke="#ff7300" />
			<Scatter dataKey="Destinastion" fill="red" />
		</ComposedChart>
	);
}

///*import React, { useState } from 'react';
//import { Line } from '@ant-design/charts';
//const Page = ({ datas, format }) => {
//	const totalJediScore = () => {
//		let word = datas
//			.filter((el) => el.nom === 'Sardine')
//			.filter((elem) => elem.port === format.port)
//			.map((person) => ({
//				production: person.production,
//				/*date: person.date,
//				wilaya: person.wilaya,*/
//			}));
//		console.log(word);
//	};
//
//	return (
//		<div>
//			{format &&
//				datas &&
//				datas
//					.filter((el) => el.nom === 'Sardine')
//					.filter((elem) => elem.port === format.port)
//					.map((person) => {
//						const data = [
//							{ year: 2012, value: person.production },
//							{ year: 2013, value: datas[0].production },
//							{ year: 2014, value: datas[1].production },
//							{ year: 2015, value: 400 },
//							{ year: 2017, value: 200 },
//							{ year: 2018, value: 500 },
//							{ year: 2019, value: 300 },
//							{ year: 2020, value: 200 },
//						];
//						//const data = console.log({ production: person.production });
//						const config = {
//							data,
//							xField: 'year',
//							yField: 'value',
//							point: {
//								size: 9,
//								shape: 'diamond',
//							},
//						};
//						return <Line {...config} />;  <h1>{data}</h1>
//					})}
//		</div>
//	);
//};
//export default Page;
//*/
