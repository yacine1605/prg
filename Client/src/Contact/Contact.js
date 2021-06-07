import React from 'react';
import { Card } from 'antd';
//import { useHistory } from 'react-router-dom';
import { TwitterSquareFilled, FacebookFilled, InstagramOutlined } from '@ant-design/icons';
import './contact.css';
import fish from '../fish4.svg';
import fond from '../fond.png';

const { Meta } = Card;

const Contact = () => {
	//	const history = useHistory();
	return (
		<div className="all">
			<div className="body_contact">
				<div className="logo" style={{ paddingLeft: '1.5%' }}>
					<img src={fond} alt="logo" />
				</div>

				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
			</div>
			<div className="fish">
				<img src={fish} alt="logo" />
			</div>
			<div className="social_media">
				<a href="https://twitter.com" alt="2">
					<TwitterSquareFilled
						hoverable
						style={{
							fontSize: '28px',
							'box-shadow': 'rgba(0, 0, 0, 0.24) 1px 3px 8px',
							borderRadius: '5px 5px 5px 5px',
						}}
					/>{' '}
				</a>
				<a href="https://facebool.com" alt="2">
					<FacebookFilled
						hoverable
						style={{
							fontSize: '27px',
							borderRadius: '10px 10px 10px 10px',
							'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
						}}
					/>{' '}
				</a>

				<a href="https://Instagram.com" alt="2">
					<InstagramOutlined
						hoverable
						style={{
							fontSize: '29px',
							color: 'rgba(11, 223, 322, 22)',
							'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
							borderRadius: '10px 10px 10px 10px',
						}}
					/>
				</a>
			</div>
		</div>
	);
};

export default Contact;
