import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import water from '../water.png';
const Accuile = () => {
	const { Header, Content, Footer } = Layout;
	const { SubMenu } = Menu;
	const history = useHistory();
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${water})`,
					width: '99.65%',
					height: '100vh',
				}}
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
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							backgroundColor: '#C4E8E4',
						}}
					>
						<Menu.Item
							key="1"
							onClick={() => {
								history.push('/');
							}}
						>
							Accueil
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
						<Menu.Item key="5" style={{ marginLeft: '20%' }}></Menu.Item>
						<Menu.Item>
							<Button type="dashed" onClick={() => history.goBack()}>
								Retour
							</Button>
						</Menu.Item>
					</Menu>
				</Header>
				<Content
					style={{
						width: '20%',
						marginLeft: '20%',
					}}
				>
					<Menu mode="vertical" defaultSelectedKeys={['1']} defaultOpenKeys={[null]}>
						<SubMenu
							mode="vertical"
							key="sub1"
							title="Production"
							style={{
								backgroundColor: '#36D1DC',
								border: '1px solid black',
								MarginBottom: '10%',
								hover: true,
								transition: ' all 5s ease',
							}}
						>
							<Menu.Item
								mode="vertical"
								key="1"
								style={{
									background: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
								}}
							>
								<a href="data/production">Sardine</a>
							</Menu.Item>
							<Menu.Item
								key="2"
								style={{
									background: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
								}}
							>
								<a href="https://www.twitter.com">option2</a>
							</Menu.Item>
							<Menu.Item
								key="3"
								style={{
									background: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
								}}
							>
								<a href="https://www.twitter.com">option3 </a>
							</Menu.Item>
							<Menu.Item
								key="4"
								style={{
									background: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
								}}
							>
								<a href="https://www.twitter.com">option4</a>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title="Prix "
							style={{
								border: '1px solid black',
								backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
							}}
						>
							<Menu.Item
								key="1"
								style={
									{
										//backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
									}
								}
							>
								option1
							</Menu.Item>
							<Menu.Item key="2" style={{}}>
								option2
							</Menu.Item>
							<Menu.Item key="3" style={{}}>
								option3
							</Menu.Item>
							<Menu.Item key="4" style={{}}>
								option4
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Content>
			</div>
			<Footer
				theme="dark"
				style={{ /*backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',*/ marginTop: '35%' }}
			>
				footer
			</Footer>
		</>
	);
};

export default Accuile;
