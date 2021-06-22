import MapGL, { Source, Layer } from 'react-map-gl';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { Layout, Menu, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import 'mapbox-gl/dist/mapbox-gl.css';
const Map = () => {
	const { Header, Content, Footer, Sider } = Layout;
	const history = useHistory();
	const [wilaya, setWilaya] = useState();
	const [viewport, setViewport] = useState({
		width: 'fit',
		height: '61vh',
		latitude: 34.885,
		longitude: 3.1,
		zoom: 5.6,
	});
	var data = [
		{ code: 'ROU', hdi: 0.811 },
		{ code: 'RUS', hdi: 0.816 },
		{ code: 'SRB', hdi: 0.787 },
		{ code: 'SVK', hdi: 0.855 },
		{ code: 'SVN', hdi: 0.896 },
		{ code: 'ESP', hdi: 0.891 },
		{ code: 'SWE', hdi: 0.933 },
		{ code: 'CHE', hdi: 0.944 },
		{ code: 'HRV', hdi: 0.831 },
		{ code: 'CZE', hdi: 0.888 },
		{ code: 'DNK', hdi: 0.929 },
		{ code: 'EST', hdi: 0.871 },
		{ code: 'FIN', hdi: 0.92 },
		{ code: 'FRA', hdi: 0.901 },
	];
	var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];

	const dataLayer = {
		id: 'countries-join',
		type: 'fill',
		paint: {
			fill_color: matchExpression,
		},
	};

	data.forEach(function (row) {
		var green = row['hdi'] * 255;
		var color = 'rgb(0, ' + green + ', 0)';
		matchExpression.push(row['code'], color);
	});
	return (
		<MapGL
			{...viewport}
			onViewportChange={(nextViewport) => {
				setViewport(nextViewport);
			}}
			mapboxApiAccessToken={
				'pk.eyJ1IjoieWFjaW5lMDUxNiIsImEiOiJja21yaDNoMTEwN3B4MnJwYjIyZ25wdWY3In0.9dW7PtxCsAawN5W6JuUmEw'
			}
			mapStyle="mapbox://styles/yacine0516/ckmriqu93245318p12gb4959a"
		>
			{' '}
			<Source type="geojson" data={data}>
				<Layer {...dataLayer} />
			</Source>
		</MapGL>
	);
};
export default Map;
