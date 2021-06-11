import React, { useContext, useState, useEffect, useRef } from 'react';
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

export default Theone;
