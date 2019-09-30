import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Loading from './LoadingComponent';

function RenderFeature({item, isLoading, errMess}) {
    if (isLoading) {
        return (
            <Loading />
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else if (item) {
        return (
            <Card>
                <CardImg src={item.links[0].href} alt={item.data[0].title} />
                <CardBody>
                    <CardTitle>{item.data[0].title}</CardTitle>
                    {item.data[0].description ? <CardText>{item.data[0].description}</CardText> : null}
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <h3>The Home Page Feature is Coming Soon!</h3>
                </div>
            </div>
        );
    }
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderFeature item={props.media} 
                        isLoading={props.mediaListLoading}
                        errMess={props.mediaListErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;
