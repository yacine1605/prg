import React, { useState } from 'react';
import { Line } from '@ant-design/charts';
const Page = ({ datas, format }) => {
	const totalJediScore = () => {
		let word = datas
			.filter((el) => el.nom === 'Sardine')
			.filter((elem) => elem.port === format.port)
			.map((person) => ({
				production: person.production,
				/*date: person.date,
				wilaya: person.wilaya,*/
			}));
		console.log(word);
	};

	return (
		<div>
			{format &&
				datas &&
				datas
					.filter((el) => el.nom === 'Sardine')
					.filter((elem) => elem.port === format.port)
					.map((person) => {
						const data = [
							{ year: 2012, value: person.production },
							{ year: 2013, value: datas[0].production },
							{ year: 2014, value: datas[1].production },
							{ year: 2015, value: 400 },
							{ year: 2017, value: 200 },
							{ year: 2018, value: 500 },
							{ year: 2019, value: 300 },
							{ year: 2020, value: 200 },
						];
						//const data = console.log({ production: person.production }); /**/

						const config = {
							data,
							xField: 'year',
							yField: 'value',
							point: {
								size: 9,
								shape: 'diamond',
							},
						};
						return <Line {...config} />; /* <h1>{data}</h1>*/
					})}
		</div>
	);
};
export default Page;
