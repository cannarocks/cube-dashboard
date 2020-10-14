import './body.css';
import 'antd/dist/antd.css';
import React from 'react';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
const API_URL = 'http://insights.app-quality.com';
const CUBEJS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDI1NzkxNjgsImV4cCI6MTYwMjY2NTU2OH0.WBnXxF92zaROp6MyFlENudXFX36MN-mXEjnUQYAkQdY';
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`,
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: '100%',
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: (
				localStorage.getItem('user') ==  process.env.REACT_APP_ADMIN_USER 
				&& localStorage.getItem('pass') == process.env.REACT_APP_ADMIN_PSW
			)
		};
		this.login = this.login.bind(this);
    	this.name = React.createRef();
    	this.pass = React.createRef();
	}
	
	login() {
		if (
			this.name.current.value == process.env.REACT_APP_ADMIN_USER
		 	&& this.pass.current.value == process.env.REACT_APP_ADMIN_PSW) {
				localStorage.setItem('user', this.name.current.value);
				localStorage.setItem('pass', this.pass.current.value);
				this.setState({loggedIn:true})
		}
	}
	render() {
		if (!this.state.loggedIn) {
			return <form className="login" onSubmit={this.login}>
				<input onChange={this.setName} ref={this.name} type="text"></input>
				<input onChange={this.setPass} ref={this.pass} type="password"></input>
				<button>Login</button>
			</form>
		}
		return <CubeProvider cubejsApi={cubejsApi}>
		    <ApolloProvider client={client}>
		      <AppLayout>{this.props.children}</AppLayout>
		    </ApolloProvider>
		  </CubeProvider>
	}
} 

export default App;
