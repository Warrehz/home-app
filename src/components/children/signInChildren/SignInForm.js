import React from 'react';


const SignInForm = React.createClass({

	getInitialState: function() {

		return {
			email: '',
			password: ''
		}

	},

	handleChange: function() {

		return function (e) {
			let state = {};
			state[key] = e.target.value
			this.setState(state)
		}.bind(this)

	},

	render: function(){

		const signInFormStyle = {
			position: "relative",
			left: "25%",
			top: "200px"
		};

		const emailPassStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px",
			opacity: "0.6"
		};

		const buttonStyle = {
			width: "600px",
			height: "40px",
			margin: "0 0 20px 0",
			borderRadius: "7px",
			borderStyle: "none",
			paddingLeft: "10px"
		};

		return(
			<div>
				<form style={signInFormStyle}>

					<input
						style={emailPassStyle}
						value={this.state.email}
						placeholder="Email"
						onChange={this.handleChange('email')} />
						<br />

					<input
						style={emailPassStyle}
						value={this.state.password}
						placeholder="Password"
						onChange={this.handleChange('password')} />
						<br />

					<button className="btn btn-primary" style={buttonStyle}>Sign In</button>

				</form>
			</div>
		)
	}
})

module.exports = SignInForm
