import React from 'react';
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
	const data = [
		{ year: '1991', value: datas[0].production },
		{ year: '1992', value: 300 },
		{ year: '1993', value: 300 },
		{ year: '1994', value: 500 },
		{ year: '1995', value: 409 },
		{ year: '1996', value: 600 },
		{ year: '1997', value: 700 },
		{ year: '1998', value: 900 },
		{ year: '1999', value: 130 },
	];

	return (
		<div>
			{format &&
				datas &&
				datas
					.filter((el) => el.nom === 'Sardine')
					.filter((elem) => elem.port === format.port)
					.map((person) => {
						const data = [
							{ year: '1991', value: datas[person]?.production },
							{ year: '1992', value: datas[person]?.production },
							{ year: '1993', value: datas[person]?.production },
							{ year: '1994', value: datas[person]?.production },
							{ year: '1995', value: datas[person]?.production },
							{ year: '1996', value: datas[person]?.production },
							{ year: '1997', value: datas[person]?.production },
							{ year: '1998', value: datas[person]?.production },
							{ year: '1999', value: datas[person]?.production },
						];

						const config = {
							data,
							xField: 'year',
							yField: 'value',
							point: {
								size: 9,
								shape: 'diamond',
							},
						};
						return <Line {...config} />;
					})}
		</div>
	);
};
export default Page;
