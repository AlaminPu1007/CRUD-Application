import React,{Component,useContext} from 'react';
import {
	View,Text,Button,
}from 'react-native';
import { SafeAreaView }from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';

const Account =({navigation})=>{

const {signOut} = useContext(AuthContext);

	return(
		<SafeAreaView style={{flex:1}}>
		<View>
			<Text>Account Screen!</Text>
			<Button
				title="Sign Out"
				onPress={()=>{signOut()}}
			/>
		</View>
		</SafeAreaView>
	);
};

export default Account;