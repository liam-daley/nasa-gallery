import React, { Component }  from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Library from './LibraryComponent';
import Feature from './FeatureComponent';
import MediaDetail from './MediaDetailComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMediaList, fetchPhotoOfTheDay } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        mediaList: state.mediaList,
        photoOfTheDay: state.photoOfTheDay
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMediaList: () => {dispatch(fetchMediaList())},
    fetchPhotoOfTheDay: () => {dispatch(fetchPhotoOfTheDay())}
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchMediaList();
        this.props.fetchPhotoOfTheDay();
    }

    render() {
        const HomePage = () => {
            return (
                <Home media={this.props.photoOfTheDay.photoOfTheDay}
                    mediaListLoading={this.props.photoOfTheDay.isLoading}
                    mediaListErrMess={this.props.photoOfTheDay.errMess}
                />
            );
        };

        const FeaturePage = () => {
            return (
                <Feature media={this.props.photoOfTheDay.photoOfTheDay}
                    mediaListLoading={this.props.photoOfTheDay.isLoading}
                    mediaListErrMess={this.props.photoOfTheDay.errMess}
                />
            );
        };

        const MediaWithId = ({match}) => {
            return (
                <MediaDetail media={this.props.mediaList.collection.items.filter((media) => media.data[0].nasa_id === parseInt(match.params.mediaId,10))[0]}
                    isLoading={this.props.mediaList.isLoading}
                    errMess={this.props.mediaList.errMess} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/library" component={() => <Library mediaList={this.props.mediaList} />} />
                    <Route path="/library/:mediaId" component={MediaWithId} />
                    <Route path={"/photo-of-the-day"} component={Feature} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
