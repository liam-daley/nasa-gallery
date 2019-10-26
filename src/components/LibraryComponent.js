import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { detaultQuery } from '../shared/apiDefinitions'

function RenderMedia ({media}) {
    return (
        <Card>
            <Link to={`/gallery/${media.data[0].nasa_id}`} >
                <CardImg width="100%" src={media.links[0].href} alt={media.data[0].title} />
            </Link>
            <CardBody>
                <CardTitle>{media.data[0].title}</CardTitle>
            </CardBody>
        </Card>
    );
}

const Library = (props) => {
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
        const library = props.mediaList.mediaList.collection.items.map((media) => {
            return (
                <div key={media.data[0].nasa_id} className="col-12 col-md-2">
                    <RenderMedia media={media} />
                </div>
            );
        });

        return (
            <React.Fragment>
                <Jumbotron>
                    <h1 className="display-5">NASA Image and Video Library</h1>
                    <p className="lead">Search results for {props.query ? props.query : detaultQuery}</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button outline color="dark">Learn More</Button>
                    </p>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        {library}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Library;
