import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import axios from 'axios';
import { Layout, Menu, Button } from 'antd';

import Select from 'react-select';
import { useHistory } from 'react-router-dom';

const DemoLine = () => {
	const { Header, Content } = Layout;
	const [format, setForm] = useState('');
	const history = useHistory();

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
	const handelchoice = (e) => {
		const intermediateState = { ...format };
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
	};
	var config = {
		data: data,
		padding: 'auto',
		xField: 'date',
		yField: 'production',
		annotations: [
			{
				type: 'regionFilter',
				start: ['min', 'median'],
				end: ['max', '0'],
				color: '#F4664A',
			},
			{
				type: 'text',
				position: ['min', 'median'],
				content: '中位数',
				offsetY: -4,
				style: { textBaseline: 'bottom' },
			},
			{
				type: 'line',
				start: ['min', 'median'],
				end: ['max', 'median'],
				style: {
					stroke: '#F4664A',
					lineDash: [2, 2],
				},
			},
		],
	};
	return (
		<div className="App">
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ display: 'flex', justifyContent: 'space-between' }}
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
			<div>
				{format &&
					data &&
					data
						.filter((el) => el.nom === 'Sardine')
						.filter((elem) => elem.port === format.port)
						.map((person) => {
							return <Line {...config} />;
						})}
			</div>
		</div>
	);
};
export default DemoLine;
//
//
//
