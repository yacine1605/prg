import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
const Accuile = () => {
	const { Header, Content, Footer } = Layout;
	const { SubMenu } = Menu;
	const history = useHistory();
	return (
		<div>
			<Layout style={{ backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' }}>
				<Header
					style={{
						width: '100%',
						marginTop: '1%',
						marginBottom: '5%',
						//backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
					}}
				>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							//	backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
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
						<Menu.Item>
							<Button type="dashed" onClick={() => history.goBack()}>
								Retour
							</Button>
						</Menu.Item>
					</Menu>
					header
				</Header>
				<Layout style={{ backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' }}>
					<Content
						style={{
							width: '20%',
							marginLeft: '20%',
							backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
						}}
					>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={[null]}
							style={{
								height: '10%',
								borderRight: 0,
								backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
							}}
						>
							<SubMenu
								key="sub1"
								title="Production"
								style={{
									backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
									boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
								}}
							>
								<Menu.Item
									key="1"
									style={{
										backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
										boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
									}}
								>
									<a href="data/production">Sardine</a>
								</Menu.Item>
								<Menu.Item
									key="2"
									style={{
										backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
										boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
									}}
								>
									<a href="https://www.twitter.com">option2</a>
								</Menu.Item>
								<Menu.Item
									key="3"
									style={{
										backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
										boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
									}}
								>
									<a href="https://www.twitter.com">option3 </a>
								</Menu.Item>
								<Menu.Item
									key="4"
									style={{
										backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
										boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
									}}
								>
									<a href="https://www.twitter.com">option4</a>
								</Menu.Item>
							</SubMenu>
							<SubMenu
								key="sub2"
								title="Prix "
								style={{
									boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
								}}
							>
								<Menu.Item
									key="1"
									style={{
										backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
										boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
									}}
								>
									option1
								</Menu.Item>
								<Menu.Item
									key="2"
									style={{ backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' }}
								>
									option2
								</Menu.Item>
								<Menu.Item
									key="3"
									style={{ backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' }}
								>
									option3
								</Menu.Item>
								<Menu.Item
									key="4"
									style={{ backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)' }}
								>
									option4
								</Menu.Item>
							</SubMenu>
						</Menu>
					</Content>
				</Layout>
				<Footer style={{ backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)', marginTop: '35%' }}>
					footer
				</Footer>
			</Layout>
		</div>
	);
};

export default Accuile;
