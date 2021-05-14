import React from 'react';
import { observer } from 'mobx-react-lite';
import { Image, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

const ImagesList = () => {
    const{thumbNailStore} = useStore();
    const{ thumbNails} = thumbNailStore;

    return (
        <Segment>
            <Item.Group divided>
                {thumbNails.map(thumbnail => (
                    <Item key={thumbnail.id}>
                        <Item.Content>
                            <Item.Header as='a'>{thumbnail.title}</Item.Header>
                            <Item.Meta>{thumbnail.cost}</Item.Meta>
                            <Item.Description>
                                <div>{thumbnail.description}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Image src={`/assets/thumbnails/${thumbnail.thumbnail}`} size='small' rounded onClick={() => thumbNailStore.selectImage(thumbnail.id)} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default observer(ImagesList);