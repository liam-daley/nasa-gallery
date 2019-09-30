import React, { Component }  from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Gallery from './GalleryComponent';
import FeaturePhoto from './FeaturePhotoComponent';
import MediaDetail from './MediaDetailComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMediaList } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
        mediaList: state.mediaList
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMediaList: () => {dispatch(fetchMediaList())}
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMediaList();
    }

    render() {
        const HomePage = () => {
            return (
                // Generate random number, select random media and display on home page feature carousel
                <Home media={this.props.mediaList.mediaList.filter((media) => media.featured)[0]}
                    mediaListLoading={this.props.mediaList.isLoading}
                    mediaListErrMess={this.props.mediaList.errMess}
                />
            );
        };

        const MediaWithId = ({match}) => {
            return (
                <MediaDetail media={this.props.mediaList.mediaList.filter((media) => media.id === parseInt(match.params.mediaId,10))[0]}
                    isLoading={this.props.mediaList.isLoading}
                    errMess={this.props.mediaList.errMess} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/gallery" component={() => <Gallery mediaList={this.props.mediaList} />} />
                    <Route path="/menu/:mediaId" component={MediaWithId} />
                    <Route path={"/photo-of-the-day"} component={FeaturePhoto} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
