import ReactMapGL from 'react-map-gl';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { Layout, Menu, Button } from 'antd';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import 'mapbox-gl/dist/mapbox-gl.css';
const Map = () => {
	const { Header, Content } = Layout;

	const history = useHistory();
	const [countries, setCountries] = useState();

	const [viewport, setViewport] = useState({
		width: 'fit',
		height: '61vh',
		latitude: 34.885,
		longitude: 3.1,
		zoom: 5.6,
	});
	const [pop, setPop] = useState({ show: false });
	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get('http://127.0.0.1:5500/map.json');
			console.log(data.features);
			setCountries(data.features);
		};
		getData();
	}, []);

	return (
		<div>
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
					style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#C4E8E4' }}
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
						Graphs
					</Menu.Item>
					<Menu.Item
						key="4"
						onClick={() => {
							history.push('/map');
						}}
					>
						Map
					</Menu.Item>
					<Menu.Item key="5" style={{ marginLeft: '20%' }}></Menu.Item>
				</Menu>
			</Header>
			<ReactMapGL
				{...viewport}
				onViewportChange={(nextViewport) => {
					setViewport(nextViewport);
				}}
				mapboxApiAccessToken={
					'pk.eyJ1IjoieWFjaW5lMDUxNiIsImEiOiJja21yaDNoMTEwN3B4MnJwYjIyZ25wdWY3In0.9dW7PtxCsAawN5W6JuUmEw'
				}
				mapStyle="mapbox://styles/yacine0516/ckmriqu93245318p12gb4959a"
			>
				{countries &&
					countries.map((country) => {
						return (
							<Marker
								//key={country.country}
								offsetTop={-48}
								offsetLeft={-24}
								latitude={country.geometry.coordinates[0]}
								longitude={country.geometry.coordinates[1]}
							></Marker>
						);
					})}
				{pop.show && (
					<Popup
						className={`${pop.todayCases < 1000 ? 'div2' : 'div1'}`}
						offsetTop={-60}
						offsetLeft={-10}
						tipSize={0}
						dynamicPosition={false}
						longitude={pop.geometry.coordinates[0]}
						latitude={pop.geometry.coordinates[1]}
						closeButton={false}
					>
						<div
							style={{
								textAlign: 'center',
							}}
						>
							<h1>{pop.country}</h1>
							<p>Today cases : {pop.todayCases}</p>
						</div>
					</Popup>
				)}
			</ReactMapGL>
		</div>
	);
};
export default Map;
