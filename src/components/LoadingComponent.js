import React from "react"

const Loading = () => (
	<div className={"loading-container"}>
		<div className="loader">
			<div className="loader-circle">
				<div>
					<div className="loader moon-loader">
						<div className="loader-circle">
							<div className="loader-moon-size" />
						</div>
					</div>
				</div>
			</div>

			<div className="loader-sun" />
		</div>
		Loading...
	</div>
)

export default Loading;
