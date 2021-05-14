import React from 'react';
import { Grid } from 'semantic-ui-react';
import ImagesList from './ImagesList';
import ImageDetails from '../details/ImageDetails';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

const DashBoard = () => {

	const { thumbNailStore } = useStore();
	const { selectedImage } = thumbNailStore;
	return (
		<Grid padded>
			<Grid.Row centered>
				<Grid.Column width='6'>
					{selectedImage &&
						<ImageDetails />}
				</Grid.Column>
			</Grid.Row>
			<Grid.Row centered>
				<Grid.Column width='10'>
					<ImagesList />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}

export default observer(DashBoard)