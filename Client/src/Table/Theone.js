/*import React, { useContext, useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Table, Input, Button, Popconfirm, Form } from 'antd';
const EditableContext = React.createContext(null);

const Theone = () => {
	const EditableRow = ({ index, ...props }) => {
		const [form] = Form.useForm();
		return (
			<Form form={form} component={false}>
				<EditableContext.Provider value={form}>
					<tr {...props} />
				</EditableContext.Provider>
			</Form>
		);
	};

	const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
		const [editing, setEditing] = useState(false);
		const inputRef = useRef(null);
		const form = useContext(EditableContext);
		useEffect(() => {
			if (editing) {
				inputRef.current.focus();
			}
		}, [editing]);

		const toggleEdit = () => {
			setEditing(!editing);
			form.setFieldsValue({
				[dataIndex]: record[dataIndex],
			});
		};

		const save = async () => {
			try {
				const values = await form.validateFields();
				toggleEdit();
				handleSave({ ...record, ...values });
			} catch (errInfo) {
				console.log('Save failed:', errInfo);
			}
		};

		let childNode = children;

		if (editable) {
			childNode = editing ? (
				<Form.Item
					style={{
						margin: 0,
					}}
					name={dataIndex}
					rules={[
						{
							required: true,
							message: `${title} is required.`,
						},
					]}
				>
					<Input ref={inputRef} onPressEnter={save} onBlur={save} />
				</Form.Item>
			) : (
				<div
					className="editable-cell-value-wrap"
					style={{
						paddingRight: 24,
					}}
					onClick={toggleEdit}
				>
					{children}
				</div>
			);
		}

		return <td {...restProps}>{childNode}</td>;
	};

	const init = [
		{
			key: '0',
			date: 'yyyy-mm-dd',
			age: 'enter ',
			prix_deb: 'prix_deb',
			prix_con: 'prix_con',
			production: 'production',
			address: 'addrese',
		},
		{ count: 0 },
	];
	const location = useLocation();
	const history = useHistory();
	const { data } = location.state;
	const arr = [];
	const [datas, setdata] = useState();
	const [dataSource, setDatasource] = useState(init);
	const [count, setCounte] = useState(0);
	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/', arr);
		setdata(datas);
	};

	const columns = [
		{
			title: 'date',
			dataIndex: 'date',
			editable: true,
		},
		{
			title: 'prix_deb',
			dataIndex: 'prix_deb',

			editable: true,
		},
		{
			title: 'prix_con',
			dataIndex: 'prix_con',

			editable: true,
		},
		{
			title: 'production',
			dataIndex: 'production',

			editable: true,
		},
		{
			title: 'age',
			dataIndex: 'age',
			editable: true,
		},
		{
			title: 'address',
			dataIndex: 'address',
			editable: true,
		},
		{
			title: 'operation',
			dataIndex: 'operation',
			render: (_, record) =>
				dataSource.length >= 1 ? (
					<Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
						<a href="f">Delete</a>
					</Popconfirm>
				) : null,
		},
	];

	const handleDelete = (key) => {
		const dataSource = [...init];
		setDatasource({
			dataSource: dataSource.filter((item) => item.key !== key),
		});
	};

	const handleAdd = () => {
		//	const { count, dataSource } = this.state;

		const newData = {
			key: count,
			name: '',
			age: '',
			address: '',
		};
		setDatasource(newData);
		setCounte(count + 1);
	};
	const handleSave = (row) => {
		const newData = [init];
		const index = newData.findIndex((item) => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, { ...item, ...row });
		setDatasource();
	};
	const components = {
		body: {
			row: EditableRow,
			cell: EditableCell,
		},
	};
	const column = columns.map((col) => {
		if (!col.editable) {
			return col;
		}

		return {
			...col,
			onCell: (record) => ({
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				handleSave: handleSave,
			}),
		};
	});

	return (
		<div>
			<h1>dprh:{data.data?.dprh}</h1>
			<Button
				onClick={(() => handleAdd(), arr.push(dataSource))}
				type="primary"
				style={{
					marginBottom: 16,
				}}
			>
				{' '}
				Ajouter une autre
			</Button>

			<Table
				components={components}
				rowClassName={() => 'editable-row'}
				bordered
				dataSource={init}
				columns={column}
			/>
			<Button
				onClick={() => postData()}
				style={{
					marginBottom: 16,
				}}
				type="primary"
			>
				Submit
			</Button>
		</div>
	);
};

export default Theone;*/
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
	const arr = [];
	const location = useLocation();
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
			/*	date: '',
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
	};
	const handel = (e) => {
		const intermediateState = { ...form };
		console.log(form);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
	};
	const handelchoice = (e) => {
		const intermediateState = { ...form };
		console.log(form);
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
							onChange={(e) => handel(e)}
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
							onChange={(e) => handel(e)}
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
			<Button type="primary" onClick={() => postData()}>
				Submit
			</Button>
		</>
	);
};

export default TableForm;
