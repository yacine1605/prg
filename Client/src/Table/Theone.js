import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Popconfirm, Table, message } from 'antd';
import { Layout, Menu } from 'antd';
import { Typography } from 'antd';
import React, { useState } from 'react';
import Select from 'react-select';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from '../Table/style.less';
const TableForm = ({ value, onChange }) => {
	const { Header, Footer, Content } = Layout;
	const { Title } = Typography;
	const [clickedCancel, setClickedCancel] = useState(false);
	const [loading, setLoading] = useState(false);
	const [index, setIndex] = useState(0);
	const [cacheOriginData, setCacheOriginData] = useState({});
	const [datam, setData] = useState(value);
	const [datas, setdata] = useState();
	const [form, setForm] = useState('');
	const [arr, setArr] = useState([]);
	const history = useHistory();
	const location = useLocation();
	const { data } = location.state;

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/fish', { arr: arr });
		setdata(datas);
	};

	const getRowByKey = (key, newData) => (newData || data)?.filter((item) => item.key === key)[0];

	const toggleEditable = (e, key) => {
		e.preventDefault();
		const newData = datam?.map((item) => ({ ...item }));
		const target = getRowByKey(key, newData);

		if (target) {
			// 进入编辑状态时保存原始数据
			if (!target.editable) {
				cacheOriginData[key] = { ...target };
				setCacheOriginData(cacheOriginData);
			}

			target.editable = !target.editable;
			setData(newData);
		}
	};
	const newMember = () => {
		const newData = datam?.map((item) => ({ ...item })) || [];
		newData.push({
			key: `NEW_TEMP_ID_${index}`,

			editable: true,
			isNew: true,
		});
		setIndex(index + 1);
		setData(newData);
		setArr([...arr, form]);
		arr.push(form);
		console.log(arr);
	};
	const handel = (e) => {
		const intermediateState = { ...form };
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
	};
	const handelchoice = (e) => {
		const intermediateState = { ...form };
		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
	};

	const remove = (key) => {
		const newData = datam?.filter((item) => item.key !== key);
		setData(newData);

		if (onChange) {
			onChange(newData);
		}
	};

	/*const handleFieldChange = (e, fieldName, key) => {
		const newData = [...data];
		const target = getRowByKey(key, newData);

		if (target) {
			target[fieldName] = e.target.value;
			setData(newData);
		}
	};
*/
	const saveRow = (e, key) => {
		e.persist();
		setLoading(true);
		setTimeout(() => {
			if (clickedCancel) {
				setClickedCancel(false);
				return;
			}

			const target = getRowByKey(key) || {};

			if (
				!target.date ||
				!target.Production ||
				!target.P_Consommation_moy ||
				!target.nom ||
				!target.P_Consommation_max ||
				!target.P_Debarquement_moy ||
				!target.Destinastion ||
				!target.P_Debarquement_min ||
				!target.P_Debarquement_max ||
				!target.P_Consommation_min
			) {
				message.error('请填写完整成员信息。');
				e.target.focus();
				setLoading(false);
				return;
			}

			delete target.isNew;
			toggleEditable(e, key);

			if (onChange) {
				onChange(datam);
			}

			setLoading(false);
		}, 500);
	};

	const handleKeyPress = (e, key) => {
		if (e.key === 'Enter') {
			saveRow(e, key);
		}
	};

	const cancel = (e, key) => {
		setClickedCancel(true);
		e.preventDefault();
		const newData = [...datam]; // 编辑前的原始数据

		let cacheData = [];
		cacheData = newData.map((item) => {
			if (item.key === key) {
				if (cacheOriginData[key]) {
					const originItem = { ...item, ...cacheOriginData[key], editable: false };
					delete cacheOriginData[key];
					setCacheOriginData(cacheOriginData);
					return originItem;
				}
			}

			return item;
		});
		setData(cacheData);
		setClickedCancel(false);
	};

	const poission = [
		{ value: 'Sardine', name: 'nom', label: 'Sardine' },
		{ value: 'Poulpe', name: 'nom', label: 'Poulpe' },
		{
			value: 'cumcumbre de mer',
			name: 'nom ',
			label: 'cumcumbre de mer',
		},
	];
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
	];

	const columns = [
		{
			title: <Title level={5}>Date</Title>,
			dataIndex: 'date',
			key: 'date',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							style={{ fontSize: 12, width: '80px' }}
							type="date"
							autoFocus
							/*	onChange={(e) => handleFieldChange(e, 'date', record.key)}*/
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							onChange={handel}
							name="date"
						/>
						/*<Select name="poission" options={poission} onChange={(choice) => handel(choice)}></Select>*/
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>wilaya</Title>,
			dataIndex: 'wilaya',
			key: 'wilaya',
			render: (text, record) => {
				if (record.editable) {
					return (
						/*<Input
						value={text}
						onChange={(e) => handleFieldChange(e, 'nom', record.key)}
						onKeyPress={(e) => handleKeyPress(e, record.key)}
						placeholder="工号"
					/>*/
						<Select
							styles={{ fontSize: '20' }}
							options={wilaya}
							placeholder="wilaya"
							value={text}
							name="wilaya"
							onChange={(choice) => handelchoice(choice)}
						></Select>
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>port</Title>,
			dataIndex: 'port',
			key: 'port',
			render: (text, record) => {
				if (record.editable) {
					return (
						<Select
							styles={{ fontSize: '20' }}
							options={port}
							placeholder="port"
							value={text}
							name="port"
							onChange={(choice) => handelchoice(choice)}
						></Select>
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>poission</Title>,
			dataIndex: 'nom',
			key: 'nom',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Select
							styles={{ fontSize: '20' }}
							options={poission}
							placeholder="poission"
							value={text}
							name="poission"
							onChange={(choice) => handelchoice(choice)}
						></Select>
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>production</Title>,
			dataIndex: 'Production',
			key: 'Production',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="production"
							value={text}
							style={{ fontSize: 12, width: '80px' }}
							onChange={handel}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="Production"
						/>
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>P.Debarque.min</Title>,
			dataIndex: 'P_Debarquement_min',
			key: 'P_Debarquement_min',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							style={{ fontSize: 12, width: '80px' }}
							name="P_Debarquement_min"
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P.Debarque.min"
						/>
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>P.Debarque.moy</Title>,
			dataIndex: 'P_Debarquement_moy',
			key: 'P_Debarquement_moy',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Debarquement_moy"
							style={{ fontSize: 12, width: '80px' }}
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P_Debarquement_moy"
						/>
					);
				}
				return text;
			},
		},
		{
			title: <Title level={5}>P_Debarque_max</Title>,
			dataIndex: 'P_Debarquement_max',
			key: 'P_Debarquement_max',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Debarquement_max"
							style={{ fontSize: 12, width: '80px' }}
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P_Debarquement_max"
						/>
					);
				}

				return text;
			},
		},

		{
			title: <Title level={5}>P_Consomma_min</Title>,
			dataIndex: 'P_Consommation_min',
			key: 'P_Consommation_min',
			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Consommation_min"
							style={{ fontSize: 12, width: '80px' }}
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P_Consommation_min"
						/>
					);
				}

				return text;
			},
		},
		{
			title: <Title level={5}>P_Consomma_moy</Title>,
			dataIndex: 'P_Consommation_moy',
			key: 'P_Consommation_moy',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Consommation_moy"
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P_Consommation_moy"
							style={{ fontSize: 12, width: '80px' }}
						/>
					);
				}

				return text;
			},
		},
		{
			title: <Title level={5}>P_Consomma_max</Title>,
			dataIndex: 'P_Consommation_max',
			key: 'P_Consommation_max',
			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Consommation_max"
							value={text}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P_Consommation_max"
							onChange={(e) => handel(e)}
							style={{ fontSize: 12, width: '80px' }}
						/>
					);
				}

				return text;
			},
		},
		{
			title: <Title level={5}>Destinastion</Title>,
			dataIndex: 'Destinastion',
			key: 'Destinastion',
			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="Destinastion"
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="Destinastion"
							style={{ fontSize: 12, width: '80px' }}
						/>
					);
				}

				return text;
			},
		},
		{
			title: <Title level={5}>option</Title>,
			key: 'option',
			render: (text, record) => {
				if (!!record.editable && loading) {
					return null;
				}

				if (record.editable) {
					if (record.isNew) {
						return (
							<span>
								<a href="Save" onClick={(e) => saveRow(e, record.key)}>
									Save
								</a>
								<Divider type="vertical" />
								<Popconfirm title="Supprimer" onConfirm={() => remove(record.key)}>
									<a href="Suppperim">Supprimer</a>
								</Popconfirm>
							</span>
						);
					}

					return (
						<span>
							<a href="Save" onClick={(e) => saveRow(e, record.key)}>
								Save
							</a>
							<Divider type="vertical" />
							<a href="h" onClick={(e) => cancel(e, record.key)}>
								取消
							</a>
						</span>
					);
				}

				return (
					<span>
						<a href="n" onClick={(e) => toggleEditable(e, record.key)}>
							编辑
						</a>
						<Divider type="vertical" />
						<Popconfirm title="是否要删除此行？" onConfirm={() => remove(record.key)}>
							<a href="n">删除</a>
						</Popconfirm>
					</span>
				);
			},
		},
	];
	return (
		<div>
			<Layout>
				<Header
					style={{
						width: '105%',
						marginTop: '1%',
						marginBottom: '5%',
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
						<Menu.Item
							key="4"
							onClick={() => {
								history.push('/map');
							}}
						>
							Map
						</Menu.Item>
						<Menu.Item key="5" style={{ marginLeft: '20%' }}>
							<Button>Log out </Button>
						</Menu.Item>
					</Menu>
					<Title level={3} style={{ marginTop: '1.5%' }}>
						Dprh: {data?.data.dprh}{' '}
					</Title>
				</Header>
				<Layout
					style={{
						border: '1px solid black',
						width: '105%',
						backgroundImage: 'linear-gradient(to top, #a8ff78, #78ffd6)',
					}}
				>
					<Content>
						<div className="table">
							<Table
								loading={loading}
								columns={columns}
								dataSource={datam}
								size={'small'}
								pagination={false}
								rowClassName={(record) => (record.editable ? styles.editable : '')}
							/>
						</div>
						<div className="btn">
							<Button
								style={{
									width: '100%',
									marginTop: 16,
									marginBottom: 8,
								}}
								type="dashed"
								onClick={newMember}
							>
								<PlusOutlined />
								Ajouter Data
							</Button>
						</div>
					</Content>
				</Layout>
				<Footer>
					<Button
						type="primary"
						onClick={() => setArr([...arr, arr.push(form)], console.log(arr), postData())}
					>
						Submit
					</Button>
				</Footer>
			</Layout>
		</div>
	);
};

export default TableForm;
//	setArr([...arr, form]); arr.push(form); console.log(arr);
