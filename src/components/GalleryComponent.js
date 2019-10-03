import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';

function RenderMedia ({media}) {
    return (
        <Card>
            <Link to={`/gallery/${media.data[0].nasa_id}`} >
                <CardImg width="100%" src={media.links[0].href} alt={media.data[0].title} />
                <CardImgOverlay>
                    <CardTitle>{media.data[0].title}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Gallery = (props) => {
    if (props.mediaList.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.mediaList.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.mediaList.errMess}</h4>
                </div>
            </div>
        );
    } else {
        const gallery = props.mediaList.mediaList.collection.items.map((media) => {
            return (
                <div key={media.data[0].nasa_id} className="col-12 col-md-3 m-1">
                    <RenderMedia media={media} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {gallery}
                </div>
            </div>
        );
    }
}

export default Gallery;
