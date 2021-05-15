import React from 'react';
import { Card, Image, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useStore } from '../../app/stores/store';


const ImageDetails = () => {
	const { thumbNailStore } = useStore();
	const { selectedImage: image } = thumbNailStore;
	if (!image) return <LoadingComponent />;
	return (
		<Card fluid>
			<Header as='h2' attached='top'>
				{image.title}
			</Header>
			<Segment attached>
				<Card.Content>
					<Card.Meta textAlign='center'>
						<Image
							fluid
							label={{
								as: 'a',
								color: 'teal',
								content: ' '+image.cost,
								icon: 'cart',
								ribbon: true,
							}}
							src={`/assets/large/${image.image}`} />
					</Card.Meta>
					<Card.Description>
						{image.description}
					</Card.Description>
				</Card.Content>
			</Segment>
		</Card>
	);
}

export default ImageDetails;