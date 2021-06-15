import ReactMapGL from 'react-map-gl';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
const Map = () => {
	const [countries, setCountries] = useState();
	const [viewport, setViewport] = useState({
		width: 'fit',
		height: '100vh',
		latitude: 34.885,
		longitude: 3.002,
		zoom: 3.909629491061953,
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
	);
};

export default Map;
