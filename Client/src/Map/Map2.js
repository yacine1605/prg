import * as React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import ControlPanel from './Panel';
import { dataLayer } from './Layer';
//import './mapbox-gl.css';
import { updatePercentiles } from './utils';

//const MAPBOX_TOKEN = 'pk.eyJ1IjoieWFjaW5lMDUxNiIsImEiOiJja21yaDNoMTEwN3B4MnJwYjIyZ25wdWY3In0.9dW7PtxCsAawN5W6JuUmEw'; // Set your mapbox token here

const App = () => {
	const [viewport, setViewport] = useState({
		latitude: 40,
		longitude: -100,
		zoom: 3,
		bearing: 0,
		pitch: 0,
	});
	const [year, setYear] = useState(2015);
	const [allData, setAllData] = useState(null);
	const [hoverInfo, setHoverInfo] = useState(null);

	useEffect(() => {
		fetch('https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson')
			.then((resp) => resp.json())
			.then((json) => setAllData(json));
	}, []);

	const onHover = useCallback((event) => {
		const {
			features,
			srcEvent: { offsetX, offsetY },
		} = event;
		const hoveredFeature = features && features[0];

		setHoverInfo(
			hoveredFeature
				? {
						feature: hoveredFeature,
						x: offsetX,
						y: offsetY,
				  }
				: null
		);
	}, []);

	const data = useMemo(() => {
		return allData && updatePercentiles(allData, (f) => f.properties.income[year]);
	}, [allData, year]);

	return (
		<>
			<ReactMapGL
				{...viewport}
				width="100%"
				height="100%"
				mapStyle="mapbox://styles/yacine0516/ckmriqu93245318p12gb4959a"
				onViewportChange={setViewport}
				mapboxApiAccessToken={
					'pk.eyJ1IjoieWFjaW5lMDUxNiIsImEiOiJja21yaDNoMTEwN3B4MnJwYjIyZ25wdWY3In0.9dW7PtxCsAawN5W6JuUmEw'
				}
				interactiveLayerIds={['data']}
				onHover={onHover}
			>
				<Source type="geojson" data={data}>
					<Layer {...dataLayer} />
				</Source>
				{hoverInfo && (
					<div className="tooltip" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
						<div>State: {hoverInfo.feature.properties.name}</div>
						<div>Median Household Income: {hoverInfo.feature.properties.value}</div>
						<div>Percentile: {(hoverInfo.feature.properties.percentile / 8) * 100}</div>
					</div>
				)}
			</ReactMapGL>

			<ControlPanel year={year} onChange={(value) => setYear(value)} />
		</>
	);
};

export default App;
