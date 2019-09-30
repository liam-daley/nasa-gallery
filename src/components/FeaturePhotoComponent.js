import React, { Component } from "react"

const FeaturePhoto = () => {
    return (
        <div className="container">
            <div className="row">
                <h3>Photo of the Day is Coming Soon!</h3>
            </div>
        </div>
    );
}

export default FeaturePhoto;
/*
import { ADD_MEDIA } from "../redux/ActionTypes";
import axios from "axios"
import { withRouter } from "react-router-dom"
import Loading from "./LoadingComponent"

const AstronomyCard = props => {
	const { title, url, hdurl, explanation, date, copyright, media_type } = props.data

	function renderContent() {
		switch (media_type) {
			case "video":
				return <iframe title={"nasa video"} allowFullScreen frameBorder="0" height="520" width="720" src={url} />

			case "image":
				return (
					<a href={hdurl} className="astronomy-image-wrapper">
						<img src={url} alt={title} />
					</a>
				)

			default:
				return null
		}
	}

	return (
		<div className="astronomy-card">
			<h6 className="astronomy-title">{title}</h6>

			{renderContent()}

			<p>{explanation}</p>

			<span>
				{date}, {copyright}
			</span>
		</div>
	)
}

class FeaturePhoto extends Component {
	constructor() {
		super()

		this.state = {
			loading: true,
			astronomy: [],
		}
	}

	componentDidMount() {
		const API_KEY = "nxKl8yTvpvsXEqRz06mTPnn29uyckFmFCYrnqEIz"
		const END_POINT = "https://api.nasa.gov/planetary/apod?api_key="

		axios
			.get(END_POINT + API_KEY)
			.then(response => {
				this.setState({
					astronomy: response.data,
					loading: false,
				})
			})
			.catch(error => {
				console.log(error, "failed to fetch data")
			})
	}

	goBack = () => {
		this.props.history.goBack()
	}

	render() {
		const { astronomy } = this.state
		return (
			<div className={"astronomy-container"}>
				<button onClick={this.goBack}>Go Back</button>
				{this.state.loading && <Loading />}
				{!this.state.loading && <AstronomyCard data={astronomy} />}
			</div>
		)
	}
}

export default withRouter(FeaturePhoto)
*/

