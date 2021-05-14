import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useStore } from '../../app/stores/store';


const ImageDetails = () => {
    const{thumbNailStore} = useStore();
    const {selectedImage: image} = thumbNailStore;

    if (!image) return <LoadingComponent />;
    return (
        <Card fluid>
            <Image src={`/assets/large/${image.image}`} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{image.title}</Card.Header>
                <Card.Meta>
                    <span>{image.cost}</span>
                </Card.Meta>
                <Card.Description>
                    {image.description}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default ImageDetails;