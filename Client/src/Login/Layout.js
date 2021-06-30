/* eslint-disable jsx-a11y/anchor-has-content */
import { Layout } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Buttton from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import MapIcon from '@material-ui/icons/Map';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';
import fond from '../fond.png';
import axios from 'axios';
import './login.css';
import { Input, Button, Card, Typography } from 'antd';

const { Title, Text } = Typography;
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
		color: 'white',
		height: '100Px',
		width: '100px',
	};
	const StyledMenu = withStyles({
		paper: {
			border: '1px solid #d3d4d5',
		},
	})((props) => (
		<Menu
			elevation={0}
			getContentAnchorEl={null}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			{...props}
		/>
	));

	const StyledMenuItem = withStyles((theme) => ({
		root: {
			'&:focus': {
				backgroundColor: theme.palette.primary.main,
				'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
					color: theme.palette.common.white,
				},
			},
		},
	}))(MenuItem);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<Layout
				style={{
					background: '#D0D5DC',
					height: '180vh',
				}}
			>
				<Content
					className="site-layout"
					style={
						{
							//padding: '0 50px',
							//	backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%',
						}
					}
				>
					<div
						className="site-layout-background"
						//style={{
						//	padding: 24,
						//	minHeight: 380,
						//	height: '90vh',
						//}}
					>
						{' '}
						<div className="body">
							<div className="logo" style={{ display: 'flex', justifyContent: 'center' }}>
								<img src={fond} alt="logo" height="400" width="1300" />
							</div>
							<div>
								<Title
									style={{
										display: 'flex',
										justifyContent: 'space-around',
										textShadow: '1px 2px 1px #474747',
									}}
								>
									مرحبا بكم في الموقع
								</Title>
								<Buttton
									style={{
										paddingRight: '30px',
										marginLeft: '10%',
										paddingLeft: '30px',
									}}
									aria-controls="customized-menu"
									aria-haspopup="true"
									variant="contained"
									color="primary"
									onClick={handleClick}
								>
									Menu
								</Buttton>
								<StyledMenu
									id="customized-menu"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={() => handleClose()}
								>
									<StyledMenuItem>
										<ListItemIcon>
											<ShowChartIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primary="Graph" onClick={() => history.push('/data')} />
									</StyledMenuItem>
									<StyledMenuItem>
										<ListItemIcon>
											<MapIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primary="Map" onClick={() => history.push('/map')} />
									</StyledMenuItem>
									<StyledMenuItem>
										<ListItemIcon>
											<ContactMailIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primary="Contact" onClick={() => history.push('/contact')} />
									</StyledMenuItem>
								</StyledMenu>
							</div>

							<div className="FormLogin">
								<form onSubmit={(e) => e.preventDefault()} style={{ marginTop: '10%' }}>
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
													aria-controls="customized-menu"
													aria-haspopup="true"
													variant="contained"
													color="primary"
													type="primary"
													onClick={() => {
														submit();
													}}
													style={{
														marginTop: '10%',
														display: 'flex',
														justifyContent: 'center',
														alignItem: 'center',
													}}
												>
													{' '}
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
