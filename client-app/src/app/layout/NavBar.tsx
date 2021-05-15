import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const NavBar = () => {

	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item header>
					<img src='assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
				</Menu.Item>
				<Menu.Item name='Thumbnails' />
			</Container>
		</Menu>
	)
}

export default NavBar;