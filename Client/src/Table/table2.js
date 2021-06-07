import axios from 'axios';
import { useState, useEffect } from 'react';

import moment from 'moment';
import './table.css';
import { useLocation, useHistory } from 'react-router-dom';
import { Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Table = () => {
	let initialState = {
		Allache: {
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

	const [form, setForm] = useState({});
	const location = useLocation();
	const history = useHistory();
	const { data } = location.state;

	const [datas, setdata] = useState('');

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/', initialState);
		setdata(datas);
	};

	/*const  initialState.Allache. = (e) => {
		/*	const intermediateState = { ...form };
		intermediateState[e.target.name] = e.target.value;
		
		setForm({
			...intermediateState,
		});*/
	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(form);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
		console.log(intermediateState);
	};
	const submit = () => {
		initialState.Allache.Production = form.Allache.Production;
		initialState.Allache.prix_debarquement.debarquemeent_min = form.Allache.prix_debarquement.debarquemeent_min;
		initialState.Allache.prix_debarquement.debarquemeent_moy = form.Allache.prix_debarquement.debarquemeent_moy;
		initialState.Allache.prix_debarquement.debarquemeent_max = form.Allache.prix_debarquement.debarquemeent_max;
		initialState.Allache.prix_consommation.consommation_min = form.Allache.prix_consommation.consommation_min;
		initialState.Allache.prix_consommation.consommation_max = form.Allache.prix_consommation.consommation_max;
		initialState.Allache.prix_consommation.consommation_moy = form.Allache.prix_consommation.consommation_moy;
		console.log(form);
		setForm();
	};

	return (
		<div className="body_tab">
			<div className="date">
				<Title level={3}>Date de Aujourd'hui : {moment().format('LL')}</Title>
			</div>
			<div className="btn-table" style={{ marginRight: '10%' }}>
				<Button
					style={{
						marginTop: '5%',
						display: 'flex',
						justifyContent: 'center',
						alignItem: 'center',

						borderRadius: '25%',
					}}
					type="primary"
				>
					{' '}
					log out
				</Button>
				<Button
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItem: 'center',
						backgroundImage: ' linear-gradient(to top, #fddb92 0%, #d1fdff 100%)',
						borderRadius: '25%',
						border: 'none',
					}}
					type="primary"
					onClick={() => {
						history.push('/fish');
					}}
				>
					{' '}
					Fish{' '}
				</Button>
			</div>
			<Title level={5} style={{ marginLeft: '5%', paddingBottom: '1%' }}>
				{' '}
				DPRH:{data.data?.dprh}
			</Title>
			<Title level={5} style={{ marginLeft: '5%', paddingBottom: '2%' }}>
				{' '}
				Port:
			</Title>
			<div className="Form">
				<form onSubmit={(e) => e.preventDefault()}>
					<table className="tg">
						<thead>
							<tr>
								<th className="tg-0pky" rowSpan="2">
									Espece
								</th>
								<th className="tg-0pky" rowSpan="2">
									Production Totale(T)
								</th>
								<th className="tg-0pky" colSpan="3">
									Prix au debarquement;
								</th>
								<th className="tg-0pky" colSpan="3">
									Prix de la consommation
								</th>
								<th className="tg-0pky" rowSpan="2">
									observe
								</th>
							</tr>
							<tr>
								<td className="tg-f9cb"> Min</td>
								<td className="tg-f9cb"> Moyen</td>
								<td className="tg-f9cb"> Max</td>
								<td className="tg-f9cb">Min</td>
								<td className="tg-f9cb">Moyen</td>
								<td className="tg-f9cb">max</td>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td className="tg-0pky" name="Allaoche">
									Allaoche
								</td>
								<td className="tg-73oq">
									<Input
										name="Production"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td className="tg-f8tv">
									<Input
										name="debarquemeent_min"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td className="tg-0pky">
									{' '}
									<Input
										name="debarquemeent_moy"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td className="tg-0pky">
									{' '}
									<Input
										name="debarquemeent_max"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td className="tg-0pky">
									<Input
										name="consommation_min"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td className="tg-0pky">
									{' '}
									<Input
										name="consommation_moy"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td className="tg-0pky">
									<Input
										name="consommation_max"
										placeholder="enter a number"
										onChange={(e) => {
											handel(e);
										}}
									/>
								</td>
								<td style={{ paddingTop: '10%' }} className="tg-0pky" rowSpan="10">
									<Input
										onChange={handel}
										name="destination"
										placeholder="enter a number"
										style={{ paddingBottom: '25px' }}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
			<div className="btn_table">
				<Button
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItem: 'center',
					}}
					type="primary"
					onClick={() => {
						submit(initialState);
						postData();
					}}
				>
					submit
				</Button>
			</div>
		</div>
	);
};

export default Table;
