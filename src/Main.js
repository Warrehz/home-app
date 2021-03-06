'use strict'

import React from 'react'
import { Link } from 'react-router'
//--------------------------------------------------
import Navbar from "./components/children/Navbar"
import authentication from './components/utils/authentication'
//--------------------------------------------------
//require the helpers.js file for HTTP requests
import helpers from './components/utils/helpers'

//--------------------------------------------------
//Create the Main component

const Main = React.createClass({

	getInitialState() {
    	return {
			loggedIn: authentication.loggedIn()
    	}
	},

	updateAuth(loggedIn) {
		this.setState({
			loggedIn
		})
	},

	componentWillMount() {
		authentication.onChange = this.updateAuth
		if (localStorage.token) {
			authentication.login()
		}
	},

	render() {
		return(
			<div>
				<Navbar loggedIn={this.state.loggedIn}/>
				<div>
					{this.props.children}
           		</div>
			</div>
		)
	}
})

export default Main
