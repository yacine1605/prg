/*const [input, //setInput] = useState({
		name1: '',
		name2: '',
		name3: '',
		name4: '',
		name5: '',
		name6: '',
		name7: '',
		name8: '',
		name9: '',
		name10: '',
		name11: '',
		name12: '',
		name13: '',
		name14: '',
		name15: '',
		name16: '',
		name17: '',
		name18: '',
		name19: '',
		name20: '',
		name21: '',
		name22: '',
		name23: '',
		name24: '',
		name25: '',
		name26: '',
		name27: '',
		name28: '',
		name29: '',
		name30: '',
		name31: '',
		name32: '',
		name33: '',
		name34: '',
		name35: '',
		name36: '',
		name37: '',
		name38: '',
		name39: '',
		name40: '',
		name41: '',
		name42: '',
		name43: '',
		name44: '',
		name45: '',
		name46: '',
		name47: '',
		name48: '',
		name49: '',
		name50: '',
		name51: '',
		name52: '',
		name53: '',
		name54: '',
		name55: '',
		name56: '',
		name57: '',
		name58: '',
		name59: '',
		name60: '',
		name61: '',
		name62: '',
		name63: '',
		name64: '',
		name65: '',
		name66: '',
		name67: '',
		name68: '',
		name69: '',
		name70: '',
		name71: '',
	});*/
/*	Anchois: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Sardine: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Saurel: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Rouget: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Pageot: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Merlan: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Espadon: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Crevette_blanche: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		Crevette_Rouge: {
			Production: { type: String },

			prix_debarquement: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
			prix_consommation: {
				min: {
					type: String,
				},
				moy: {
					type: String,
				},
				max: {
					type: String,
				},
			},
		},
		
	
	
	import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import Table from '../Table/table2';
import { useEffect } from 'react';

/*const handleSubmit = () => {
	// ... get data form
	// ... submit to API
     or something
};
//	const [data, setdata] = useState();
//	const [form, setForm] = useState(initialState);
const Login = () => {
	const [loginResponse, setloginResponse] = useState();
	const [form, setForm] = useState({
		username: '',
		password: '',
	});
	const [data, setData] = useState();

	const history = useHistory();
	const submit = async () => {
		const loginResponse = await axios
			.post(`http://localhost:5000/user/login`, { username: form.username, password: form.password })
			.catch((err) => console.log('Error', err));
		//console.log(loginResponse);
		setloginResponse(loginResponse);

		const user = JSON.parse(localStorage.getItem('user'));

		const token = loginResponse.data.data?.access_token;
		const recData = async (token) => {
			const { data } = await axios
				.get('http://localhost:5000/user/info', {
					headers: { Authorization: 'Bearer ' + token },
				})
				.catch((err) => console.log('Error', err));
			console.log(data);
			setData(data);
		};
		recData(token);
		if (token) {
			history.push('/user', { state: { data } });
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
		<>
			<h2> Marhba </h2>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="imgcontainer">
					<img src="img_avatar2.png" alt="Avatar" className="avatar" />
				</div>

				<div className="container">
					<label>
						<b>Username</b>
					</label>
					<input
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
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						required
						onChange={(e) => {
							handel(e);
						}}
					/>

					<button
						type="submit"
						onClick={() => {
							submit();
							<Table ladata={data?.data} />;
						}}
					>
						Login
					</button>
				</div>

				<div className="container">
					<button type="button" className="cancelbtn">
						Cancel
					</button>
				</div>
			</form>
		</>
	);
};

export default Login;
import axios from 'axios';
import './table.css';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
const Table = ({ ladata }) => {
	const initialState = {
		Allaoche: {
			Production: '',
			prix_debarquement: {
				debarquemeent_min: '',

				debarquemeent_moy: '',

				debarquemeent_max: '',
			},
			prix_consommation: {
				consommation_min: '',

				consommation_moy: '',

				consommation_max: '',
			},
		},
		destination: '',
	};
	const [form, setForm] = useState(initialState);
	const location = useLocation();
	//	const { data } = location.state;

	const [datas, setdata] = useState('');

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/', {
			newData: form,
		});
		setdata(datas);
		console.log(datas);
	};

	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(e.target.name);
//		intermediateState[e.target.name] = e.target.value;
//		setForm({ ...intermediateState });
//		console.log(intermediateState);
//	};
//	return (
//		<div>
//			<div className="date"> {moment().format('LL')}</div>
//
//			<button> log out</button>
//			<h5 style={{ marginLeft: '5%', paddingBottom: '1%' }}> DPRH:{/*ladata?.email*/ //}</h5>
//			<h5 style={{ marginLeft: '5%', paddingBottom: '2%' }}> Port:{/*props?.ladata.port*/} </h5>
//			<form onSubmit={(e) => e.preventDefault()}>
//				<table className="tg">
//					<thead>
//						<tr>
//							<th className="tg-0pky" rowSpan="2">
//								Espece
//							</th>
//							<th className="tg-0pky" rowSpan="2">
//								Production Totale(T)
//							</th>
//							<th className="tg-0pky" colSpan="3">
//								Prix au debarquement;
//							</th>
//							<th className="tg-0pky" colSpan="3">
//								Prix de la consommation
//							</th>
//							<th className="tg-0pky" rowSpan="2">
//								observe
//							</th>
//						</tr>
//						<tr>
//							<td className="tg-f9cb"> Min</td>
//							<td className="tg-f9cb"> Moyen</td>
//							<td className="tg-f9cb"> Max</td>
//							<td className="tg-f9cb">Min</td>
//							<td className="tg-f9cb">Moyen</td>
//							<td className="tg-f9cb">max</td>
//						</tr>
//					</thead>
//					<tbody>
//						<tr>
//							<td className="tg-0pky" name="Allaoche">
//								Allaoche
//							</td>
//							<td className="tg-73oq">
//								<input
//									name="Production"
//									placeholder="enter a number"
//									onChange={(e) => {
//										handel(e);
//									}}
//								/>
//							</td>
//							<td className="tg-f8tv">
//								<input
//									name="debarquemeent_min"
//									placeholder="enter a number"
//									onChange={(e) => {
//										handel(e);
//									}}
//								/>
//							</td>
//							<td className="tg-0pky">
//								{' '}
//								<input name="debarquemeent_moy" placeholder="enter a number" onChange={handel} />
//							</td>
//							<td className="tg-0pky">
//								{' '}
//								<input
//									name="debarquemeent_max"
//									placeholder="enter a number"
//									onChange={(e) => {
//										handel(e);
//									}}
//								/>
//							</td>
//							<td className="tg-0pky">
//								<input
//									name="consommation_min"
//									placeholder="enter a number"
//									onChange={(e) => handel(e)}
//								/>
//							</td>
//							<td className="tg-0pky">
//								{' '}
//								<input
//									name="consommation_moy"
//									placeholder="enter a number"
//									onChange={(e) => {
//										handel(e);
//									}}
//								/>
//							</td>
//							<td className="tg-0pky">
//								<input
//									name="consommation_max"
//									placeholder="enter a number"
//									onChange={(e) => {
//										handel(e);
//									}}
//								/>
//							</td>
//							<td style={{ paddingTop: '10%' }} className="tg-0pky" rowSpan="10">
//								<input
//									onChange={(e) => {
//										handel(e);
//									}}
//									name="destination"
//									placeholder="enter a number"
//									style={{ paddingBottom: '25px' }}
//								></input>
//							</td>
//						</tr>
//					</tbody>
//				</table>
//			</form>
//			<button
//				onClick={() => {
//					//		postData(form);
//
//					console.log(form);
//				}}
//			>
//				submit
//			</button>
//		</div>
//	);
//};

//export default Table;
/*<tr>
						<td className="tg-0pky">
							<input type="date" id="start" name="trip-start" />
						</td>
						<td className="tg-0pky">
							<select id="cars">
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="opel">Opel</option>
								<option value="audi">Audi</option>
							</select>
						</td>
						<td className="tg-0pky">
							<select id="cars">
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="opel">Opel</option>
								<option value="audi">Audi</option>
							</select>
						</td>
						<td className="tg-0pky">Poulpe</td>
						<td className="tg-0pky"></td>
						<td className="tg-0pky"></td>
					</tr>
					<tr>
						<td className="tg-0pky">
							<input type="date" id="start" name="trip-start" />
						</td>
						<td className="tg-0pky"></td>
						<td className="tg-0pky"></td>
						<td className="tg-0pky">Concombre de mer </td>
						<td className="tg-0pky"></td>
						<td className="tg-0pky"></td>
					</tr>*/
