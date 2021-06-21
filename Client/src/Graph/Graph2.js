import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import { Layout, Menu, Button } from 'antd';
import Graph from './Graph';

import { useHistory } from 'react-router-dom';

const Page = () => {
	const { Header, Content, Footer } = Layout;
	const { Option } = Select;
	const history = useHistory();
	const [region, setregion] = useState('All');
	const [wilaya, setWilya] = [''];

	const [date, setrDate] = useState();

	const [datas, setData] = useState([]);
	const getdata = async () => {
		const { data } = await axios.get('http://localhost:5000/prix').catch((err) => console.log('Error', err));

		setData(data.data);
	};
	const totalJediScore = () => {
		let word = datas
			?.filter((el) => el.nom === 'Sardine')
			.map((person) => ({
				port: person.port,
				date: person.date,
				wilaya: person.wilaya,
				production: person.production,
			}));
		console.log(word);
	};

	useEffect(() => {
		getdata();
	}, []);

	//	<div className="option">
	//		<p>Select by region:</p>
	//		<select onChange={(e) => setregion(e.target.value)}>
	//			<option value="ALL">ALL</option>
	//			<option value="Sardine">Africa</option>
	//			<option value="Allache">Americas</option>
	//			<option value="Pouple">Asia</option>
	//			<option value="Europe">Europe</option>
	//			<option value="Oceania">Oceania</option>
	//		</select>
	//</div>

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
						<Content>{totalJediScore()} </Content>
						<div className="option">
							<p>Select by region:</p>
							<Select
								showSearch
								style={{ width: 200 }}
								placeholder="Select a person"
								optionFilterProp="children"
								onChange={(e) => setregion(e.value)}
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="Sardine" name="">
									Sardine
								</Option>
								<Option value="Allache">Allache</Option>
								<Option value="Pouple">Pouple</Option>
							</Select>
						</div>
					</Content>

					{region && datas && (
						<Content>
							<Graph />
						</Content>
					)}
				</Layout>
				<Footer>footer</Footer>
			</Layout>
		</div>
	);
};
export default Page;
