import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import SearchHeader from './SearchHeaderComponent';
import SearchTabs from './SearchTabsComponent'
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
                <SearchHeader />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <SearchTabs />
                        </div>
                        <div className="col-12">
                            <br />
                            <p>Search results for: "{props.query ? props.query : detaultQuery}"</p>
                        </div>
                    </div>
                    <div className="row">
                        {library}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Library;
