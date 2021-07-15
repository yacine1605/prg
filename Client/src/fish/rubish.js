import { useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import { Input, Button } from 'antd';
import { Layout, Menu } from 'antd';
import Select from 'react-select';
/*
button ajouter 
 create  new arrray
 push form 
 

*/
import './fish.css';
const Fish = () => {
	const { Header, Content, Footer } = Layout;
	const history = useHistory();

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
	//const location = useLocation();
	//const history = useHistory();
	//const { data } = location.state;

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
			<div
				className="thebody"
				style={{
					backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
					//background:  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
					width: '100%',
					height: '100vh',
				}}
			>
				<Header
					style={{
						width: '100%',
						marginBottom: '5%',
						backgroundColor: '#C4E8E4',
						boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
					}}
				>
					<Menu
						mode="horizontal"
						defaultSelectedKeys={['1']}
						style={{
							display: 'flex',
							backgroundColor: '#C4E8E4',
							width: '100%',
						}}
					>
						<Menu.Item key="1" onClick={() => history.push('/map')}>
							Accueil
						</Menu.Item>

						<Menu.Item
							key="3"
							onClick={() => {
								history.push('/map');
							}}
						>
							Map
						</Menu.Item>
						<Menu.Item
							key="4"
							onClick={() => {
								history.push('/data');
							}}
						>
							Graph
						</Menu.Item>
						<Menu.Item key="5" style={{ marginLeft: '70%' }} onClick={() => history.push('/')}>
							<Button>Log out </Button>
						</Menu.Item>
					</Menu>
				</Header>
				<Button
					style={{ marginLeft: '10%', backgroundColor: 'white' }}
					onClick={() => history.goBack()}
					type="ghost"
				>
					Retour
				</Button>
				<form
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: ' row',
						alignItems: ' center',
						marginTop: '5%',
					}}
				>
					<div
						style={{
							backgroundColor:
								'#C4E8E4' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
							backgroundColor: '#C4E8E4',
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
							backgroundColor: '#C4E8E4',
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
							backgroundColor: '#C4E8E4',
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
							backgroundColor: '#C4E8E4',

							width: ' 15%',
							border: '1px solid black',
							padding: '9.25px',
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
							backgroundColor: '#C4E8E4',
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
						style={{ marginTop: '8%', marginLeft: '10%' }}
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
			<footer
				role="contentinfo"
				style={{
					//backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
					backgroundColor: '#CBCCD1',
					height: '73px',
					display: 'block',
				}}
			>
				<div className="footer2" style={{ display: 'block' }}>
					<div class="generic2Container footer2Container">
						<div class="footer2BlocLinks">
							<ul class="footer2BlocLinks__bloc">
								<li class="footer2BlocLinks__item">
									<a
										style={{ color: 'black' }}
										class="footer2BlocLinks__link"
										href="http://www.dgpa.gov.dz/algerie/FLOT/fl00_genbranch.php?sesid=sealumblh6ueauds6q6vokfhf6&callphp=flpb11_docs.php"
									>
										Actualités
									</a>
								</li>
								<li class="footer2BlocLinks__item">
									<a style={{ color: 'black' }} class="footer2BlocLinks__link" href="/credits">
										Crédits
									</a>
								</li>

								<li class="footer2BlocLinks__item">
									<a style={{ color: 'black' }} class="footer2BlocLinks__link" href="/plan-du-site">
										Plan du site
									</a>
								</li>
							</ul>
						</div>
						<div style={{ marginRight: '1%', width: '20%' }}>
							<a href="www.facebook.com/" style={{ color: 'black', fontSize: '20px' }}>
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href="www.twitter.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}>
								<i class="fab fa-twitter"></i>
							</a>
							<a
								href="www.instagram.com"
								style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}
							>
								<i class="fab fa-instagram"></i>
							</a>
							<a href="www.snapchat.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}>
								<i class="fab fa-snapchat-ghost"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Fish;
/*<a href="www.facebook.com/" style={{ color: 'black', fontSize: '20px', paddingLeft: '0%' }}>
								<i class="fab fa-facebook-f"></i>
							</a>
							
							
							<a href="www.snapchat.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '25%' }}>
								<i class="fab fa-snapchat-ghost"></i>
							</a>*/
