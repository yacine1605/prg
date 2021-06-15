import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Select } from 'antd';
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
	const gra = () => {
		const data = [];
		const config = {
			data,
			xField: 'year',
			yField: 'value',
			point: {
				size: 5,
				shape: 'diamond',
			},
		};
	};
	//		return <Line {...config}/>;
	//

	return (
		<div>
			<Layout>
				<Header>
					<Button type="dashed" onClick={() => history.goBack()}>
						retour
					</Button>
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

					{region && datas && <Content>grahph</Content>}
				</Layout>
				<Footer>footer</Footer>
			</Layout>
		</div>
	);
};
export default Page;
