//import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, Input, Form, InputNumber } from 'antd';
import { Menu, Layout } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';

import { useLocation, useHistory } from 'react-router-dom';

import { PageContainer } from '@ant-design/pro-layout';
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
	const submitFormLayout = {
		wrapperCol: {
			xs: {
				span: 24,
				offset: 0,
			},
			sm: {
				span: 10,
				offset: 7,
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
		<PageContainer /*  content={<FormattedMessage id="formandbasic-form.basic.description" />}*/>
			<Header
				style={{
					width: '100%',
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
				<Title level={3} style={{ marginTop: '1.5%' }}></Title>
			</Header>
			<Card bordered={true}>
				<Form
					onSubmit={(e) => e.preventDefault()}
					hideRequiredMark
					style={{
						marginTop: 8,
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
						label /*</Form>={<FormattedMessage id="formandbasic-form.standard.label" />}*/
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
					<FormItem
						{...submitFormLayout}
						style={{
							marginTop: 32,
						}}
					>
						<Button
							type="primary"
							htmlType="submit"
							onClick={() => postData()}
							//onClick={() => return(<Alert message="Success Text" type="success" />)}
						>
							submit
						</Button>
						<Button
							style={{
								marginLeft: ' 18%',
							}}
							onClick={() => onReset(setForm(''))}
							//type="reset"
						>
							Clear
						</Button>
					</FormItem>
				</Form>
			</Card>
		</PageContainer>
	);
};

export default BasicForm;
