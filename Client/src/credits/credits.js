import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import './credit.css';

const Credits = () => {
	const { Header, Content, Footer, Sider } = Layout;
	const history = useHistory();
	return (
		<div>
			<Header
				style={{
					width: '100%',
					height: '100%',
					marginBottom: '4%',
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
						width: '100%',
					}}
				>
					<Menu.Item key="1" onClick={() => history.push('/map')}>
						Accueil
					</Menu.Item>

					<Menu.Item
						key="3"
						onClick={() => {
							history.push('/map');
						}}
					>
						Map
					</Menu.Item>
					<Menu.Item
						key="4"
						onClick={() => {
							history.push('/data');
						}}
					>
						Graph
					</Menu.Item>
				</Menu>
			</Header>
			<div class="genericContainerOneCol genericContainerOneCol--Offset">
				<div class="genericContainerOneCol__col">
					<div class="wysiwyg wysiwyg--skin1 mentionslegales">
						<h2>Crédits</h2>
						<div>
							<p>
								<strong>Site internet </strong>: Réalisation Bouzir Mohamed Yacine & Co
								<br />
								<strong>Copyright : </strong>le ministère de la peche
							</p>
							<p>
								<strong>Droit d'auteur :</strong>
								<br />
								le ministère de la peche a ouvert ce site pour l'information personnelle de ses
								utilisateurs. Aucune exploitation commerciale même partielle de son contenu, ses données
								chiffrées ou non, qui y sont présentées ne pourra être effectuée sans l'accord préalable
								et écrit de le ministère. L'ensemble de ce site constitue une oeuvre protégée par les
								lois en vigueur sur la propriété intellectuelle. Aucune reproduction et/ou
								représentation, partielle ou intégrale, ne pourra en être faite sans l'accord préalable
								et écrit de le ministère. L'ensemble des éléments graphiques, des campagnes de
								communication, affiche, films, dessins, photographies, images, textes, séquences animées
								sonores ou non, logos, marque, nom de produits, représentés sur ce site internet sont
								protégés par le Code de la propriété intellectuelle et sont, selon les cas, propriété de
								la Marine nationale, ou propriété de tiers ayant autorisé le ministère, à les
								représenter sur son site internet. A ce titre, tout téléchargement, toute reproduction,
								représentation, adaptation, traduction, et/ou transformation, partielles ou intégrales,
								ou transfert sur un autre site ou sur quelqu'autre support (papier, support numérique,
								film, etc...) sont strictement interdits. Les liens hypertextes externes mis en place
								dans le cadre du présent site et les contenus des sites de tiers vers lesquels ils
								pointent ne sauraient engager la responsabilité de le le ministère.
							</p>
							<p>&nbsp;</p>
						</div>
					</div>
				</div>
			</div>
			<footer
				role="contentinfo"
				style={{
					//backgroundImage: 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)',
					backgroundColor: '#CBCCD1',
					height: '73px',
					display: 'block',
				}}
			>
				<div className="footer2" style={{ display: 'block' }}>
					<div class="generic2Container footer2Container">
						<div class="footer2BlocLinks">
							<ul class="footer2BlocLinks__bloc">
								<li class="footer2BlocLinks__item">
									<a
										style={{ color: 'black' }}
										class="footer2BlocLinks__link"
										href="http://www.dgpa.gov.dz/algerie/FLOT/fl00_genbranch.php?sesid=sealumblh6ueauds6q6vokfhf6&callphp=flpb11_docs.php"
									>
										Actualités
									</a>
								</li>
								<li class="footer2BlocLinks__item">
									<a style={{ color: 'black' }} class="footer2BlocLinks__link" href="/credits">
										Crédits
									</a>
								</li>

								<li class="footer2BlocLinks__item">
									<a style={{ color: 'black' }} class="footer2BlocLinks__link" href="/plan-du-site">
										Plan du site
									</a>
								</li>
							</ul>
						</div>
						<div style={{ marginRight: '1%', width: '20%' }}>
							<a href="www.facebook.com/" style={{ color: 'black', fontSize: '20px' }}>
								<i class="fab fa-facebook-f"></i>
							</a>
							<a href="www.twitter.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}>
								<i class="fab fa-twitter"></i>
							</a>
							<a
								href="www.instagram.com"
								style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}
							>
								<i class="fab fa-instagram"></i>
							</a>
							<a href="www.snapchat.com" style={{ color: 'black', fontSize: '20px', paddingLeft: '10%' }}>
								<i class="fab fa-snapchat-ghost"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Credits;
