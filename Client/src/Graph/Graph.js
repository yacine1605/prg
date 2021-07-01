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
		setData(() => {
			const newData = data.filter((el) => el.nom === 'Sardine').filter((elem) => elem.port === format.port);
			console.log('newData', newData);
			return newData;
		});
	}, [format]);

	const port = [
		{ value: 'Beni-saf', name: 'port', label: 'Beni-saf' },
		{ value: 'Bouzedjar', name: 'port', label: 'Bouzedjar' },
		{ value: 'Alger', name: 'port', label: 'Alger' },
		{ value: 'El Djamila', name: 'port', label: 'El Djamila' },
		{ value: 'Tamentefoust', name: 'port', label: 'Tamentefoust' },
		{ value: 'Annaba', name: 'port', label: 'Annaba' },
		{ value: 'Chetaibi', name: 'port', label: 'Chetaibi' },
		{ value: 'Béjaia', name: 'port', label: 'Béjaia' },
		{ value: "Béni K'sila", name: 'port', label: "Béni K'sila" },
		{ value: 'Dellys', name: 'port', label: 'Dellys' },
		{ value: 'Djinet', name: 'port', label: 'Djinet' },
		{ value: 'Zemmouri', name: 'port', label: 'Zemmouri' },
	];
	const handelchoice = (e) => {
		const intermediateState = { ...format };
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
	};

	return (
		<div className="App">
			<Header
				style={{
					width: '100%',
					marginBottom: '5%',
					backgroundColor: '#C4E8E4',
					boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
				}}
			>
				<Menu
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#C4E8E4' }}
				>
					<Menu.Item
						key="1"
						onClick={() => {
							history.push('/');
						}}
					>
						Accueil
					</Menu.Item>

					<Menu.Item
						key="3"
						onClick={() => {
							history.push('/data');
						}}
					>
						Graphs
					</Menu.Item>
					<Menu.Item
						key="4"
						onClick={() => {
							history.push('/map');
						}}
					>
						Map
					</Menu.Item>
					<Menu.Item key="5" style={{ marginLeft: '20%' }}>
						<Button>Log out </Button>
					</Menu.Item>
				</Menu>
			</Header>
			<Content>
				<div className="option">
					<p>Choisi un port :</p>
					<Select
						styles={{ fontSize: '20' }}
						options={port}
						placeholder="port"
						name="port"
						onChange={(choice) => handelchoice(choice)}
					></Select>
				</div>
			</Content>
			<ComposedChart
				data={data}
				width={500}
				height={400}
				margin={{
					top: 20,
					right: 20,
					bottom: 20,
					left: 20,
				}}
			>
				<CartesianGrid stroke="#f5f5f5" />
				<XAxis dataKey="date" />
				<Tooltip />
				<Legend />
				<YAxis dataKey="production" />
				<Area type="monotone" dataKey="production" fill="#8884d8" stroke="#8884d8" />
			</ComposedChart>
		</div>
	);
}
