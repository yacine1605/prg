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

const { Title } = Typography;
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
	return (
		<div>
			<Layout>
				<Header className="site-layout-background" style={{ padding: 0 }}></Header>
				<Sider width={200} className="site-layout-background" style={{ height: '113vh' }}>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<SubMenu key="sub1" icon={<UserOutlined />} title="Menu ">
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
						backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%',
						height: '100vh',
						width: '200px',
					}}
				>
					<div
						className="site-layout-background"
						style={{
							padding: 24,
							minHeight: 380,
							height: '100vh',
						}}
					>
						<div className="body">
							<div className="logo" /*style={{ paddingLeft: '3%' }}*/>
								<img src={fond} alt="logo" width="100%" />
							</div>
							<Title level={2} className="title" style={{}}></Title>
							<div className="FormLogin">
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="container">
										<Card
											style={{
												boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
												backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%',
												width: '300px',
												height: '300px',
											}}
											title="Login"
											level={4}
											bordered={true}
										>
											<label>
												<b>Username</b>
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
												<b>Password</b>
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
				<Footer style={{ textAlign: 'center' }}></Footer>
			</Layout>
		</div>
	);
};

export default Lay;
