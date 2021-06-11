import { useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import { Input, Button } from 'antd';
import Select from 'react-select';
/*
button ajouter 
 create  new arrray
 push form 
 

*/

const Fish = () => {
	const wilaya = [
		{
			value: 'Ain Temouchent',
			name: 'wilaya',
			label: 'Ain Temouchent',
		},
		{ value: 'Alger', name: 'wilaya', label: 'Alger' },
		{ value: 'Tipaza', name: 'wilaya', label: 'Tipaza' },
		{ value: 'jijel', name: 'wilaya', label: 'jijel' },
		{ value: 'Annaba', name: 'wilaya', label: 'Annaba' },
		{ value: 'Bejaia', name: 'wilaya', label: 'Bejaia' },
		{ value: 'Boumerdes', name: 'wilaya', label: 'Boumerdes' },
		{ value: 'Chlef', name: 'wilaya', label: 'Chlef' },
		{ value: 'El Tarf', name: 'wilaya', label: 'El Tarf' },
		{ value: 'Mostaganem', name: 'wilaya', label: 'Mostaganem' },
		{ value: 'Oran', name: 'wilaya', label: 'Oran' },
		{ value: 'Skikda', name: 'wilaya', label: 'Skikda' },
		{ value: 'Tizi ouzou', name: 'wilaya', label: 'Tizi ouzou' },
		{ value: 'Tlemcen', name: 'wilaya', label: 'Tlemcen' },
	];
	const port = [
		{ value: 'Beni-saf', name: 'port', label: 'Tlemcen' },
		{ value: 'Bouzedjar', name: 'port', label: 'Tlemcen' },
		{ value: 'Alger', name: 'port', label: 'Tlemcen' },
		{ value: 'El Djamila', name: 'port', label: 'Tlemcen' },
		{ value: 'Tamentefoust', name: 'port', label: 'Tlemcen' },
		{ value: 'Annaba', name: 'port', label: 'Tlemcen' },
		{ value: 'Chetaibi', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: "Béni K'sila", name: 'port', label: 'Tlemcen' },
		{ value: 'Dellys', name: 'port', label: 'Tlemcen' },
		{ value: 'Djinet', name: 'port', label: 'Tlemcen' },
		{ value: 'Zemmouri', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
		{ value: 'Béjaia', name: 'port', label: 'Tlemcen' },
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

	const [form, setForm] = useState('');
	const [datas, setdata] = useState('');
	const location = useLocation();
	const history = useHistory();
	const { data } = location.state;

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/infofish/fish', form);
		setdata(datas);
	};
	console.log(datas);
	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(form);
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
		console.log(intermediateState);
	}; /*setForm({ ...form, [e.target.name]: e.value });*/

	return (
		<div>
			<h1>dprh:{/*data.data?.dprh*/}</h1>

			<form
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: ' row',
					alignItems: ' center',
					marginTop: '10%',
					boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
				}}
			>
				<div
					style={{
						backgroundColor: 'blue',
						width: ' 15%',
						border: '1px solid black',
						padding: '8px',
						color: 'black',
					}}
					className="datefish"
				>
					<h4 style={{ display: 'flex', justifyContent: 'center' }}>date</h4>
					<Input
						type="date"
						id="start"
						name="date"
						onChange={(e) => {
							handel(e.target);
						}}
					/>
				</div>
				<div
					style={{
						backgroundColor: 'blue',
						width: ' 15%',
						border: '1px solid black',
						padding: '6px',
						color: 'black',
					}}
					className="wilaya"
				>
					<h4 style={{ display: 'flex', justifyContent: 'center' }}>wilaya</h4>
					<Select name="wilaya" options={wilaya} onChange={(choice) => handel(choice)}></Select>
				</div>
				<div
					style={{
						backgroundColor: 'blue',
						width: ' 15%',
						border: '1px solid black',
						padding: '6px',
						color: 'black',
					}}
					className="port"
				>
					{' '}
					<h4 style={{ display: 'flex', justifyContent: 'center' }}>port</h4>
					<Select name="port" options={port} onChange={(choice) => handel(choice)}></Select>
				</div>
				<div
					style={{
						backgroundColor: 'blue',
						width: ' 15%',
						border: '1px solid black',
						padding: '6px',
						color: 'black',
					}}
					className="poisson"
				>
					{' '}
					<h4 style={{ display: 'flex', justifyContent: 'center' }}>poisson</h4>
					<Select name="poisson" options={poission} onChange={(choice) => handel(choice)}></Select>
				</div>
				<div
					style={{
						backgroundColor: 'blue',

						width: ' 15%',
						border: '1px solid black',
						padding: '9px',
						color: 'black',
					}}
					className="Taille"
				>
					{' '}
					<h4 style={{ display: 'flex', justifyContent: 'center' }}>Taille</h4>
					<Input
						name="taille"
						onChange={(e) => {
							handel(e.target);
						}}
					></Input>
				</div>
				<div
					style={{
						backgroundColor: 'blue',
						width: ' 15%',
						border: '1px solid black',
						padding: '9px',
						color: 'black',
					}}
					className="Poids"
				>
					{' '}
					<h4 style={{ display: 'flex', justifyContent: 'center' }}>Poids</h4>
					<Input
						name="poids"
						onChange={(e) => {
							handel(e.target);
						}}
					></Input>
				</div>
			</form>
			<div className="btn-fish">
				<Button
					style={{
						backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%',
						borderRadius: '20%',
						paddingTop: '0%',
						paddingBottom: '0%',
						paddingRight: '3%',
						paddingLeft: '3%',
					}}
					onClick={() => {
						setForm(form);
						console.log(form);
						postData();
					}}
					type="primary"
				>
					submit
				</Button>
			</div>
		</div>
	);
};
export default Fish;
