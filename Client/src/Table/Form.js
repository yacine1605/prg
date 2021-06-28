//import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, Input, Form, InputNumber } from 'antd';
import { Menu, Layout } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';

import { useLocation, useHistory } from 'react-router-dom';

import Select from 'react-select';
import axios from 'axios';

//const { TextArea } = Input;

const BasicForm = () => {
	const { Title } = Typography;

	const FormItem = Form.Item;
	const history = useHistory();
	const { Header } = Layout;

	//const { submitting } = props;
	const [datas, setdata] = useState();
	const [format, setForm] = useState();

	const [form] = Form.useForm();
	//const [showPublicUsers, setShowPublicUsers] = useState(false);

	const postData = async () => {
		const { datas } = await axios.post('http://localhost:5000/prix/fish', format);
		setdata(datas);
	};
	const onReset = () => {
		form.resetFields();
	};
	const formItemLayout = {
		labelCol: {
			xs: {
				span: 24,
			},
			sm: {
				span: 7,
			},
		},
		wrapperCol: {
			xs: {
				span: 24,
			},
			sm: {
				span: 12,
			},
			md: {
				span: 10,
			},
		},
	};

	const poission = [
		{ value: 'Sardine', name: 'nom', label: 'Sardine' },
		{ value: 'Poulpe', name: 'nom', label: 'Poulpe' },
		{
			value: 'cumcumbre de mer',
			name: 'nom',
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

	/*const onFinish = (values) => {
		const { dispatch } = props;
		dispatch({
			type: 'formAndbasicForm/submitRegularForm',
			payload: values,
		});
	};

	const onFinishFailed = (errorInfo) => {
		// eslint-disable-next-line no-console
		console.log('Failed:', errorInfo);
	};

	const onValuesChange = (changedValues) => {
		const { publicType } = changedValues;
		if (publicType) setShowPublicUsers(publicType === '2');
	};*/
	const handel = (e) => {
		const intermediateState = { ...format };
		//console.log(e.target.name);
		intermediateState[e.target.name] = e.target.value;
		setForm({ ...intermediateState });
		console.log(intermediateState);
	};
	const handelchoice = (e) => {
		const intermediateState = { ...format };

		intermediateState[e.name] = e.value;
		setForm({ ...intermediateState });
		console.log(intermediateState);
	};

	return (
		<div>
			<div
				className="bdy"
				style={{ height: '120vh' }}
				/*  content={<FormattedMessage id="formandbasic-form.basic.description" />}*/
			>
				<Header
					style={{
						width: '100%',
						marginBottom: '5%',
						backgroundColor: '#C4E8E4',
						boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
					}}
				>
					<Menu
						mode="horizontal"
						defaultSelectedKeys={['1']}
						style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#C4E8E4' }}
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
				</Header>
				<Title level={3} style={{ marginTop: '1.5%', display: 'flex', justifyContent: 'center' }}>
					Ajouter Un Possion
				</Title>
				<Card bordered={true}>
					<Form
						onSubmit={(e) => e.preventDefault()}
						hideRequiredMark
						style={{
							paddingTop: '10px',
							backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
							marginLeft: '30%',
							width: '40%',
							paddingBottom: '4',

							boxShadow:
								'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
						}}
						name="basic"
						form={form}

						//	onFinish={onFinish}
						//	onFinishFailed={onFinishFailed}
						//	onValuesChange={onValuesChange}
					>
						<FormItem
							{...formItemLayout}
							label="Nom de Possion" /*={<FormattedMessage id="formandbasic-form.title.label" />}*/
							name="Possion"
							rules={[
								{
									required: true,
									/*	message: formatMessage({
									id: 'formandbasic-form.title.required',
								}),*/
								},
							]}
						>
							<Select
								options={poission}
								placeholder="poission"
								name="poission"
								onChange={(choice) => handelchoice(choice)}
							></Select>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Date" /*={<FormattedMessage id="formandbasic-form.date.label" />}*/
							name="date"
							rules={[
								{
									required: true,
									/*	message: formatMessage({
									id: 'formandbasic-form.date.required',
								}),*/
								},
							]}
							onChange={handel}
						>
							<Input
								name="date"
								type="date"
								style={{
									width: '100%',
								}}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="wilaya" /*</Form>={<FormattedMessage id="formandbasic-form.goal.label" />}*/
							name="wilaya"
							rules={[
								{
									required: true,
									/*	message: formatMessage({
									id: 'formandbasic-form.goal.required',
								}),*/
								},
							]}
						>
							<Select
								options={wilaya}
								placeholder="wilaya"
								name="wilaya"
								onChange={(choice) => handelchoice(choice)}
							></Select>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Port" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="port"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
						>
							<Select
								styles={{ fontSize: '20' }}
								options={port}
								placeholder="port"
								name="port"
								onChange={(choice) => handelchoice(choice)}
							></Select>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Production" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="production"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="production"
								style={{
									width: '100%',
								}}
								placeholder="Production"
								min={0}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Prix de debarquemet min " /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="P_Debarquement_min"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="P_Debarquement_min"
								style={{
									width: '100%',
								}}
								placeholder="P.Debarque.min"
								min={0}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Prix de debarquemet moyen" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="P_Debarquement_moy"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="P_Debarquement_moy"
								style={{
									width: '100%',
								}}
								placeholder="P_Debarquement_moy"
								min={0}
								max={100000}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Prix de debarquemet max" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="P_Debarquement_max"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="P_Debarquement_max"
								style={{
									width: '100%',
								}}
								placeholder="P_Debarquement_max"
								min={0}
								max={100000}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Prix consomation min" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="P_Consommation_min"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="P_Consommation_min"
								placeholder="P_Consommation_min"
								style={{
									width: '100%',
								}}
								min={0}
								max={100000}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Prix consomation moy" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="P_Consommation_moy"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="P_Consommation_moy"
								placeholder="P_Consommation_moy"
								style={{
									width: '100%',
								}}
								min={0}
								max={100000}
							/>
						</FormItem>
						<FormItem
							{...formItemLayout}
							label="Prix consomation max" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="P_Consommation_max"
							//rules={[
							//	{
							//		required: true,
							//		message: formatMessage({
							//			id: 'formandbasic-form.standard.required',
							//		}),*/
							//	},
							//]}
							onChange={(e) => handel(e)}
						>
							<InputNumber
								name="P_Consommation_max"
								placeholder="P_Consommation_max"
								style={{
									width: '100%',
								}}
								min={0}
								max={10000}
							/>
						</FormItem>
						<FormItem
							style={{ paddingBottom: '25px' }}
							{...formItemLayout}
							label="Destinastion" /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
							name="Destinastion"
							rules={[
								{
									required: true,
									/*message: formatMessage({
									id: 'formandbasic-form.standard.required',
								}),*/
								},
							]}
							onChange={(e) => handel(e)}
						>
							<Input
								name="Destinastion"
								placeholder="Destinastion"
								style={{
									width: '100%',
								}}
							/>
						</FormItem>
					</Form>
				</Card>
				<div style={{ display: 'flex', alignItems: 'center', marginLeft: '40%' }}>
					<Button
						type="primary"
						htmlType="submit"
						onClick={() => postData()}
						//onClick={() => return(<Alert message="Success Text" type="success" />)}
					>
						submit
					</Button>
					<Button
						type="dashed"
						style={{
							paddingBottom: '2px',
							marginLeft: ' 18%',
						}}
						onClick={() => onReset(setForm(''))}
						//type="reset"
					>
						Clear
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BasicForm;
