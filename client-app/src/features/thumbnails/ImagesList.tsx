import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import './styles.css';
import { ThumbNail } from '../../app/models/thumbnail';
import { Button, Grid, Image, Label, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/LoadingComponent';

const ImagesList = () => {
	const { thumbNailStore } = useStore();
	const { thumbNails, selectedImage } = thumbNailStore;
	const [pageNumber, setPageNumber] = useState<number>(0);
	const [thumbNailsGroup, setThumbNailsGroup] = useState<ThumbNail[]>([]);
	const [nextPage, setNextPage] = useState(true);
	const itemsbypage: number = 4;
	const [loadingThumbnails, setLoadingThumbnails] = useState(false);

	useEffect(() => {
		const lastItem = pageNumber * itemsbypage + itemsbypage;
		setThumbNailsGroup(thumbNails.slice(pageNumber * itemsbypage, lastItem));
		setNextPage(lastItem < thumbNails.length);
		setLoadingThumbnails(false);
	}, [thumbNails, pageNumber]);

	const computeNewPage = (orientation: string) => {
		setLoadingThumbnails(true);
		const lastItem = pageNumber * itemsbypage + itemsbypage;
		if (orientation === 'left') {
			if (pageNumber > 0)
				setPageNumber(pageNumber - 1);
		} else {
			if (lastItem < thumbNails.length)
				setPageNumber(pageNumber + 1);
		}
	}

	if (loadingThumbnails) return (<Segment><LoadingComponent/></Segment>)

	return (
		<Segment>
			<Grid doubling centered columns="4">
				<Grid.Row verticalAlign='top'>
					<Grid.Column textAlign='center'>
						<Button className={(pageNumber > 0) ? "positive" : "basic disabled"} circular icon='arrow alternate circle left' size='big' color="grey" onClick={() => computeNewPage('left')} />
					</Grid.Column>
					<Grid.Column textAlign='center'>
						<Button className={(nextPage) ? "positive" : "basic disabled"} icon='arrow alternate circle right' circular size='big' color="grey" onClick={() => computeNewPage('right')} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row verticalAlign='middle' style={{ paddingTop:'0px'}}>
					{thumbNailsGroup.map(thumbnail => (
						<Grid.Column key={thumbnail.id}>
							<Segment textAlign='center'>
								<Label attached='top'>{thumbnail.id}</Label>
								<Image
									fluid
									className={selectedImage?.id === thumbnail.id ? 'imageborder' : ''}
									src={`/assets/thumbnails/${thumbnail.thumbnail}`}
									onClick={() => thumbNailStore.selectImage(thumbnail.id)} />
							</Segment>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</Segment>
	)
}

export default observer(ImagesList);