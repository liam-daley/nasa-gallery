import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Loading from './LoadingComponent';

const Media = (props) => {
    const media = props.media;
    return (
        <Card>
            <CardImg src={media.links[0].href} alt={media.data[0].title} />
            <CardBody>
                <CardTitle>{media.data[0].title}</CardTitle>
                {media.data[0].description ? <CardText>{media.data[0].description}</CardText> : null}
            </CardBody>
        </Card>
    );
}

// todo implement a detail component containing all other information from the media object
const Detail = (props) => {
    const media = props.media;
    return (
        <div></div>
    );
}

const MediaDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.media) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>{props.media.data[0].title}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Media media={props.media} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Detail media={props.media} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default MediaDetail;