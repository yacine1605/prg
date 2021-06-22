import ReactMapGL from 'react-map-gl';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { Layout, Menu, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
const Map = () => {
	const { Header, Content, Footer, Sider } = Layout;
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
		/*const getData = async () => {
			const { data } = await axios.get();
			console.log(data);
			setCountries(data);
		};
		getData();*/
	}, []);
	return (
		<div>
			<Header
				style={{
					width: '100%',
					marginTop: '1%',
					marginBottom: '3%',
				}}
			>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Menu.Item
						key="1"
						onClick={() => {
							history.push('/user');
						}}
					>
						Accueil
					</Menu.Item>
					<Menu.Item
						key="2"
						onClick={() => {
							history.push('/fish');
						}}
					>
						Detaile sur Poission
					</Menu.Item>
					<Menu.Item
						key="3"
						onClick={() => {
							history.push('/data');
						}}
					>
						Graph
					</Menu.Item>
					<Menu.Item key="4" style={{ marginLeft: '20%' }}>
						<Button>Log out </Button>
					</Menu.Item>
				</Menu>
			</Header>
			<Layout>
				<Content style={{ marginRight: '25%', border: '7px ridge #a77272', marginLeft: '25%' }}>
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
										key={country.country}
										offsetTop={-48}
										offsetLeft={-24}
										latitude={country.countryInfo.lat}
										longitude={country.countryInfo.long}
									>
										<img
											style={{ width: '30px', height: '30px' }}
											src={country.countryInfo.flag}
											onMouseOver={() => setPop({ ...country, show: true })}
											onMouseEnter={() => setPop({ ...country, show: true })}
											onMouseMove={() => setPop({ ...country, show: true })}
											onMouseLeave={() => setPop({ show: false })}
											alt="log"
										/>
									</Marker>
								);
							})}
						{pop.show && (
							<Popup
								className={`${pop.todayCases < 1000 ? 'div2' : 'div1'}`}
								offsetTop={-60}
								offsetLeft={-10}
								tipSize={0}
								dynamicPosition={false}
								longitude={pop.countryInfo.long}
								latitude={pop.countryInfo.lat}
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
				</Content>
			</Layout>
		</div>
	);
};

export default Map;
