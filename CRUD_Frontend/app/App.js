import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import AuthenticationScreen from './AuthenticationScreen';
import {Provider as AuthProvider} from './context/AuthContext';
import {Provider as BlogProvider} from './context/BlogContext';

console.disableYellowBox = true
const App=()=>{
	return(
		<AuthenticationScreen />
	);
};

export default()=>{
	return(
		<BlogProvider>
		<AuthProvider>
			<App/>
		</AuthProvider>
		</BlogProvider>
	);
};

