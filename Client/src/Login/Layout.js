/* eslint-disable jsx-a11y/anchor-has-content */
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fond from '../fond.png';
import axios from 'axios';
import './login.css';
import { Input, Button, Card, Typography } from 'antd';

const { Title, Text } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Lay = () => {
	const [form, setForm] = useState({
		username: '',
		password: '',
	});

	const history = useHistory();
	const submit = async () => {
		const loginResponse = await axios
			.post(`http://localhost:5000/user/login`, {
				username: form.username,
				password: form.password,
			})
			.catch((err) => console.log('Error', err));
		console.log(loginResponse);

		const token = loginResponse.data.data?.access_token;
		const { data } = await axios
			.get('http://localhost:5000/user/info', {
				headers: { Authorization: 'Bearer ' + token },
			})
			.catch((err) => console.log('Error', err));

		if (data) {
			history.push('/user', { data });
		}
	};

	const logout = () => {
		localStorage.removeItem('user');
	};
	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(e.target.name);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
	};
	const [collapsed, setCollapsed] = useState(false);
	const theme = {
		color: 'black',
		height: '100Px',
		width: '100px',
	};
	return (
		<div>
			<Layout
				style={{
					background: '#D0D5DC',
					height: '115vh',
				}}
			>
				<Sider
					className="site-layout-background"
					//style={{ height: '50vh', backgroundColor: '#C4E8E4' }}
				>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[null]}>
						<SubMenu key="sub1" icon={<UserOutlined />} title="Menu " style={{ height: '100vh' }}>
							<Menu.Item
								key="1"
								onClick={() => {
									history.push('/data');
								}}
							>
								Graphs
							</Menu.Item>
							<Menu.Item
								key="2"
								onClick={() => {
									history.push('/contact');
								}}
							>
								Contact
							</Menu.Item>
							<Menu.Item
								key="3"
								onClick={() => {
									history.push('/map');
								}}
							>
								Map
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Content
					className="site-layout"
					style={{
						//padding: '0 50px',
						//	backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%',
						height: '113vh',
						width: '220px',
					}}
				>
					<div
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 380,
							height: '90vh',
						}}
					>
						<div className="body" style={{ marginTop: 0, marginRight: 0 }}>
							<div
								className="logo"
								style={{
									marginLeft: '3%',
								}}
							>
								<img src={fond} alt="logo" width="100%" height="300" />
							</div>
							<Title level={2} className="title" style={{}}></Title>
							<div className="FormLogin">
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="container">
										<Card
											style={{
												boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
												backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%',
												width: '450px',
												height: '300px',
											}}
											title={
												<Title level={4}>
													<Text
														italic
														style={{
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
														}}
													>
														Login
													</Text>
												</Title>
											}
											level={5}
											bordered={true}
										>
											<label>
												<b>
													{' '}
													<Title level={5} className="title">
														Username
													</Title>
												</b>
											</label>
											<Input
												style={{
													backgroundImage:
														' linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
												}}
												name="username"
												type="text"
												placeholder="Enter Username"
												required
												onChange={(e) => {
													handel(e);
												}}
											/>

											<label htmlFor="psw">
												<b>
													{' '}
													<Title level={5} className="title">
														Password
													</Title>
												</b>
											</label>
											<Input
												style={{
													backgroundImage:
														' linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
												}}
												type="password"
												name="password"
												placeholder="Enter Password"
												required
												onChange={(e) => {
													handel(e);
												}}
											/>

											<div>
												<Button
													style={{
														marginTop: '10%',
														display: 'flex',
														justifyContent: 'center',
														alignItem: 'center',
													}}
													type="primary"
													onClick={() => {
														submit();
													}}
												>
													Login
												</Button>
											</div>
										</Card>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Content>
			</Layout>
		</div>
	);
};

export default Lay;
