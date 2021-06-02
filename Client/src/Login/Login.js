import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

/*const handleSubmit = () => {
	// ... get data form
	// ... submit to API
     or something
};*/
//	const [data, setdata] = useState();
//	const [form, setForm] = useState(initialState);
const Login = () => {
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

	return (
		<div className="body">
			<Title level={2} className="title" style={{}}>
				Marhba{' '}
			</Title>
			<div className="FormLogin">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="container">
						<Card
							style={{
								boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
								backgroundImage: ' linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
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
								style={{ backgroundImage: ' linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)' }}
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
	);
};

export default Login;
