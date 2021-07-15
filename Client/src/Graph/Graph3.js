import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Layout, Menu, Button } from 'antd';
import './Graph.css';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

const Dankmemes = () => {
	const { Header, Content } = Layout;
	const [format, setForm] = useState();
	const { Mois, setMois } = useState([]);
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
	const poission = [
		{ value: 'Sardine', name: 'nom', label: 'Sardine' },
		{ value: 'Poulpe', name: 'nom', label: 'Poulpe' },
		{
			value: 'cumcumbre de mer',
			name: 'nom ',
			label: 'cumcumbre de mer',
		},
	];

	const [datas, setData] = useState([]);

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderBottom: '1px dotted pink',
			color: state.isSelected ? 'red' : 'blue',
			padding: 30,
		}),
		control: () => ({
			width: 200,
		}),
	};
	const chart = async () => {
		let production = [];
		let date = [];
		const datas = await axios
			.get('http://localhost:5000/prix')
			.then((res) => {
				console.log(res);
				const newData = format
					? res.data.data.filter((el) => el.nom === format.nom).filter((elem) => elem.port === format.port)
					: //.filter((em) => em.date === format.mois)
					  res.data.data;
				for (const dataObj of newData) {
					production.push(parseInt(dataObj.production));
					date.push(dataObj.date);
				}
				date.sort(function (a, b) {
					let c = new Date(a);
					let d = new Date(b);
					return c - d;
				});

				setChartData({
					labels: date,
					datasets: [
						{
							label: 'production de sardine ',
							data: production,
							backgroundColor: '#bf8775',
							borderColor: '#bf8775',
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
	};

	useEffect(() => {
		chart();
	}, [format]);

	const handelchoice = (e) => {
		const intermediateState = { ...format };
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
		console.log({ ...intermediateState });
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
			<Content style={{ width: '50%', display: 'flex', justifyContent: 'space-between', paddingLeft: '20%' }}>
				<div className="option">
					<p>Choisi un port :</p>

					<Select
						styles={customStyles}
						options={port}
						placeholder="port"
						name="port"
						onChange={(choice) => handelchoice(choice)}
					></Select>
				</div>
				<div className="option">
					<p>Choisi une poission :</p>
					<Select
						styles={customStyles}
						options={poission}
						placeholder="poission"
						name="poission"
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
							title: { text: 'production ', display: true },
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
			<footer
				role="contentinfo"
				style={{
					//backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
					backgroundColor: '#CBCCD1',
					height: '73px',
					position: 'absolute',
					top: '900px',
				}}
			>
				<div className="footer2" style={{ display: 'block' }}>
					<div class="generic2Container footer2Container" style={{ width: '1384px' }}>
						<div class="footer2BlocLinks">
							<ul class="footer2BlocLinks__bloc">
								<li class="footer2BlocLinks__item">
									<a
										style={{ color: 'black' }}
										class="footer2BlocLinks__link"
										href="http://www.dgpa.gov.dz/algerie/FLOT/fl00_genbranch.php?sesid=sealumblh6ueauds6q6vokfhf6&callphp=flpb11_docs.php"
									>
										Actualités
									</a>
								</li>
								<li class="footer2BlocLinks__item">
									<a style={{ color: 'black' }} class="footer2BlocLinks__link" href="/credits">
										Crédits
									</a>
								</li>

								<li class="footer2BlocLinks__item">
									<a style={{ color: 'black' }} class="footer2BlocLinks__link" href="/plan-du-site">
										Plan du site
									</a>
								</li>
							</ul>
						</div>
						<div style={{ marginRight: '1%', width: '20%' }}>
							<a href="www.facebook.com/" style={{ color: 'black', fontSize: '20px' }}>
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href="www.twitter.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}>
								<i class="fab fa-twitter"></i>
							</a>
							<a
								href="www.instagram.com"
								style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}
							>
								<i class="fab fa-instagram"></i>
							</a>
							<a href="www.snapchat.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}>
								<i class="fab fa-snapchat-ghost"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
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
