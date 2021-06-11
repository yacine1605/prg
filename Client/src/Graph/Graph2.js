import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import axios from 'axios';

const Page = () => {
	const [datas, setData] = useState();
	const getdata = async () => {
		const { data } = await axios.get('http://localhost:5000/prix').catch((err) => console.log('Error', err));
		console.log(data?.data);
		setData(data);
	};
	useEffect(() => {
		getdata();
	}, []);
	const data = [
		{ year: `${datas?.data[0].updatedAt}`, value: `${datas?.data[0].Allache.Production}` },
		{ year: `${datas?.data[1].updatedAt}`, value: `${datas?.data[0].Allache.prix_debarquement.debarquemeent_min}` },
		{ year: `${datas?.data[0].updatedAt}`, value: `${datas?.data[0].Allache.prix_debarquement.debarquemeent_moy}` },
	];

	const config = {
		data,
		height: 500,
		xField: 'year',
		yField: 'value',
		point: {
			size: 5,
			shape: 'diamond',
		},
	};
	return <Line {...config} />;
};
export default Page;
