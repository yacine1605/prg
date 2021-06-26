import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Layout, Menu, Button } from 'antd';

import Select from 'react-select';
import { useHistory } from 'react-router-dom';

const Dankmemes = () => {
	const { Header, Content } = Layout;
	const [format, setForm] = useState([]);
	const history = useHistory();
	const [chartData, setChartData] = useState([]);
	const [production, setProduction] = useState([]);
	const [date, setDate] = useState([]);
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
	const [datas, setData] = useState([]);

	const chart = async () => {
		let production = [];
		let date = [];
		const datas = await axios
			.get('http://localhost:5000/prix')
			.then((res) => {
				console.log(res);
				for (const dataObj of res.data.data) {
					if (dataObj.name === format.port) {
						production.push(parseInt(dataObj.production));
						date.push(dataObj.date);
					}
				}
				setChartData({
					labels: date,
					datasets: [
						{
							label: 'level of thiccness',
							data: production,
							backgroundColor: ['rgba(575, 192, 192, 0.6)'],
							borderWidth: 4,
						},
					],
				});
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(production, date);
		setData(datas);
		console.log(datas);
	};

	useEffect(() => {
		chart();
	}, []);

	const handelchoice = (e) => {
		const intermediateState = { ...format };
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
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
				{format && (
					<Line
						data={chartData}
						options={{
							responsive: true,
							title: { text: 'THICCNESS SCALE', display: true },
							scales: {
								yAxes: [
									{
										ticks: {
											autoSkip: true,
											maxTicksLimit: 10,
											beginAtZero: true,
										},
										gridLines: {
											display: true,
										},
									},
								],
								xAxes: [
									{
										gridLines: {
											display: true,
										},
									},
								],
							},
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Dankmemes;
/*{format &&
					hartData

						.filter((elem) => elem.port === format?.port)
						.filter((el) => el.data.data === 'Sardine')
						.map((person) => {
							return <h1>{console.log(format.port)}</h1>;
						})}	*/
