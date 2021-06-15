import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Menu, Button } from 'antd';

const Accuile = () => {
	const { Header, Content, Footer } = Layout;
	const { SubMenu } = Menu;
	const history = useHistory();
	return (
		<div>
			<Layout>
				<Header style={{ marginBottom: '10%' }}>
					<Button type="dashed" onClick={() => history.goBack()}>
						Retour
					</Button>
					header
				</Header>
				<Layout>
					<Content style={{ width: '20%', marginLeft: '20%' }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={[null]}
							style={{ height: '10%', borderRight: 0 }}
						>
							<SubMenu key="sub1" title="Production">
								<Menu.Item key="1">
									<a href="data/production">Sardine</a>
								</Menu.Item>
								<Menu.Item key="2">
									<a href="https://www.twitter.com">option2</a>
								</Menu.Item>
								<Menu.Item key="3">
									<a href="https://www.twitter.com">option3 </a>
								</Menu.Item>
								<Menu.Item key="4">
									<a href="https://www.twitter.com">option4</a>
								</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" title="Prix ">
								<Menu.Item key="1">option1</Menu.Item>
								<Menu.Item key="2">option2</Menu.Item>
								<Menu.Item key="3">option3</Menu.Item>
								<Menu.Item key="4">option4</Menu.Item>
							</SubMenu>
						</Menu>
					</Content>
				</Layout>
				<Footer>footer</Footer>
			</Layout>
		</div>
	);
};

export default Accuile;
