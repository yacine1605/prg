import { useState, useEffect } from 'react';
import ReactMapGL, { Layer, Marker, Source } from 'react-map-gl';
import axios from 'axios';

const parkLayer = {
	id: 'features',
	type: 'fill',
	source: 'mapbox',
	'source-layer': 'port',
	filter: ['port', '='],
	'fill-color': '#00ffff',
};

function App() {
	const [viewport, setViewport] = useState({
		width: 'fit',
		height: '61vh',
		latitude: 34.885,
		longitude: 3.1,
		zoom: 5.6,
	});
	const [parkColor, setParkColor] = useState('#00ffff');
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get('http://127.0.0.1:5500/map.json');
			console.log(data.features);
			setCountries(data.features);
		};
		getData();
	}, []);
	return (
		<ReactMapGL
			{...viewport}
			width="100vw"
			height="100vh"
			onViewportChange={setViewport}
			mapboxApiAccessToken={
				'pk.eyJ1IjoieWFjaW5lMDUxNiIsImEiOiJja21yaDNoMTEwN3B4MnJwYjIyZ25wdWY3In0.9dW7PtxCsAawN5W6JuUmEw'
			}
		>
			<Source type="geojson" data={countries}>
				<Layer {...parkLayer} paint={{ 'fill-color': parkColor }} />
			</Source>
		</ReactMapGL>
	);
}
export default App;
//<ReactMapGL ></ReactMapGL>
