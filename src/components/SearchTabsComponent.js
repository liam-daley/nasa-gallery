import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const SearchTabs = (props) => {
	const [activeTab, setActiveTab] = useState('all');

	const handleSearch = tab => {
		setActiveTab(tab);
		console.log("search for:" + tab);
	}

	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === 'all' })} 
					onClick={() => { handleSearch('all'); }} >
						All
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === 'images' })}
					onClick={() => { handleSearch('images'); }} >
						Images
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === 'video' })}
					onClick={() => { handleSearch('video'); }} >
						Video
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === 'audio' })}
					onClick={() => { handleSearch('audio'); }} >
						Audio
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
}

export default SearchTabs;