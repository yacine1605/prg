import React from 'react';
import './plan.css';
function plan() {
	return (
		<div>
			<div class="plandusite genericContainer--content">
				<ul class="plandusite__liste1">
					<li class="plandusite__item1">
						<a class="plandusite__link1" href="/">
							Accueil
						</a>
					</li>
					<li class="plandusite__item1">
						<a class="plandusite__link1" href="/rejoignez-l-equipage">
							Rejoignez l'équipage
						</a>
						<ul class="plandusite__liste2">
							<li class="plandusite__item2">
								<a href="/rejoignez-l-equipage/se-renseigner" class="plandusite__link2">
									Se renseigner
								</a>
								<ul class="plandusite__liste3">
									<li class="plandusite__item3 icon-before-puce">
										<a
											href="/rejoignez-l-equipage/parcours-de-recrutement/les-etapes-du-recrutement"
											class="plandusite__link3"
										>
											Information de jour
										</a>
									</li>
									<li class="plandusite__item3 icon-before-puce">
										<a
											href="/rejoignez-l-equipage/parcours-de-recrutement/comment-bien-se-preparer"
											class="plandusite__link3"
										>
											Etat de sante de l'espace
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="plandusite__item1">
						<a class="plandusite__link1" href="/en-immersion">
							Pour touts
						</a>
						<ul class="plandusite__liste2">
							<li class="plandusite__item3">
								<a href="/graph" class="plandusite__link3">
									Detaile sur prix d'espace
								</a>
							</li>
							<li class="plandusite__item3">
								<a href="/graph" class="plandusite__link3">
									Detaile sur production
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default plan;
