import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
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
                <CardImg src={item.url} alt={item.title} />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    {item.date ? <CardSubtitle>{item.date}</CardSubtitle> : null}
                    {item.description ? <CardText>{item.description}</CardText> : null}
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <h1>The home page is broken!</h1>
                </div>
            </div>
        );
    }
}

function Home(props) {
    return (
        <div className="container card-feature">
            <div className="row">
                <div className="col-12">
                    <RenderFeature item={props.media} 
                        isLoading={props.mediaListLoading}
                        errMess={props.mediaListErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;
