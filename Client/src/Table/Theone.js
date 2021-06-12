import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Popconfirm, Table, message } from 'antd';
import React, { useState } from 'react';
import Select from 'react-select';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

/*import styles from '../style.less';*/

const TableForm = ({ value, onChange }) => {
	const [clickedCancel, setClickedCancel] = useState(false);
	const [loading, setLoading] = useState(false);
	const [index, setIndex] = useState(0);
	const [cacheOriginData, setCacheOriginData] = useState({});
	const [data, setData] = useState(value);

	const [datas, setdata] = useState();
	const [form, setForm] = useState('');
	const location = useLocation();
	const [arr, setArr] = useState([]);
	const history = useHistory();
	//	const { data } = location.state;

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/fish', form);
		setdata(datas);
	};

	const getRowByKey = (key, newData) => (newData || data)?.filter((item) => item.key === key)[0];

	const toggleEditable = (e, key) => {
		e.preventDefault();
		const newData = data?.map((item) => ({ ...item }));
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
		const newData = data?.map((item) => ({ ...item })) || [];
		newData.push({
			key: `NEW_TEMP_ID_${index}`,
			/*date: '',
			Production: '',
			P_Consommation_moy: '',
			nom: '',
			P_Consommation_max: '',
			Destinastion: '',
			P_Debarquement_min: '',
			P_Debarquement_moy: '',
			P_Debarquement_max: '',
			P_Consommation_min: '',*/
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
		const newData = data?.filter((item) => item.key !== key);
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

			if (!target.workId || !target.name || !target.department) {
				message.error('请填写完整成员信息。');
				e.target.focus();
				setLoading(false);
				return;
			}

			delete target.isNew;
			toggleEditable(e, key);

			if (onChange) {
				onChange(data);
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
		const newData = [...data]; // 编辑前的原始数据

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
	];

	const columns = [
		{
			title: 'date',
			dataIndex: 'date',
			key: 'date',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
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
			title: 'Nom poission',
			dataIndex: 'nom',
			key: 'nom',

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
							options={poission}
							placeholder="Nom poission"
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
			title: 'production',
			dataIndex: 'Production',
			key: 'Production',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="production"
							value={text}
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
			title: 'P.Debarquement.min',
			dataIndex: 'P_Debarquement_min',
			key: 'P_Debarquement_min',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Debarquement_min"
							value={text}
							onChange={(e) => handel(e)}
							onKeyPress={(e) => handleKeyPress(e, record.key)}
							placeholder="P.Debarquement.min"
						/>
					);
				}
				return text;
			},
		},
		{
			title: 'P.Debarquement.moy',
			dataIndex: 'P_Debarquement_moy',
			key: 'P_Debarquement_moy',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Debarquement_moy"
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
			title: 'P_Debarquement_max',
			dataIndex: 'P_Debarquement_max',
			key: 'P_Debarquement_max',

			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Debarquement_max"
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
			title: 'P_Consommation_min',
			dataIndex: 'P_Consommation_min',
			key: 'P_Consommation_min',
			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							name="P_Consommation_min"
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
			title: 'P_Consommation_moy',
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
						/>
					);
				}

				return text;
			},
		},
		{
			title: 'P_Consommation_max',
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
						/>
					);
				}

				return text;
			},
		},
		{
			title: 'Destinastion',
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
						/>
					);
				}

				return text;
			},
		},
		{
			title: 'option',
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
		<>
			<Table
				loading={loading}
				columns={columns}
				dataSource={data}
				pagination={false}
				rowClassName={(record) => (record.editable ? /* styles.editable */ '' : '')}
			/>
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
			<Button type="primary" onClick={() => setArr([...arr, arr.push(form)], console.log(arr))}>
				Submit
			</Button>
		</>
	);
};

export default TableForm;
//	setArr([...arr, form]); arr.push(form); console.log(arr);
