import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { Select } from 'antd';
import { Layout, Menu, Button } from 'antd';
import Graph from './Graph';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

const Page = () => {
	const { Header, Content, Footer } = Layout;

	const history = useHistory();
	const [format, setForm] = useState('');
	const [datas, setData] = useState([]);
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

	const getdata = async () => {
		const { data } = await axios.get('http://localhost:5000/prix').catch((err) => console.log('Error', err));
		setData(data.data);
	};
	useEffect(() => {
		getdata();
	}, []);
	const handelchoice = (e) => {
		const intermediateState = { ...format };
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
	};
	return (
		<div>
			<Layout>
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
							Graph
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
				<Layout>
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

					{format && datas && (
						<Content>
							<Graph datas={datas} format={format} />
						</Content>
					)}
				</Layout>
				<Footer>footer</Footer>
			</Layout>
		</div>
	);
};
export default Page;
