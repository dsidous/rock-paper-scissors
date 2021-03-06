import React from 'react';

import './styles.css';
import Button from '../../../../components/Button';
import Weapon from '../Weapon';

const WeaponList = ({ weapons, onClickWeapon }) => (
	<div className="WeaponList">
		<ul>
			{weapons.map(weapon => (
				<li key={weapon}>
					<Button
						onClick={() => onClickWeapon(weapon)}
					>
						<Weapon
							icon={weapon}
						/>
					</Button>
				</li>
			))}
		</ul>
		<span className="label">CHOOSE A WEAPON</span>
	</div>
);

export default WeaponList;
