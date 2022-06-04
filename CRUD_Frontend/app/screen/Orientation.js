import React,{Component,useState} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Orientation =()=>{

	const [screenWidth , setScreenWidth] = useState(null);
	const [screenHeight , setScreenHeight] = useState(null);


	const OnLayoutChange=({navigation})=>{
		return(
			setScreenHeight(Dimensions.get('window').height),
			setScreenWidth(Dimensions.get('window').width)
			//console.log(screenHeight,screenWidth)
		);
	};

return(
	<SafeAreaView>
	<View  style={styles.container} onLayout={OnLayoutChange} >
		<Text style={styles.textStyle}>Orientation screen</Text>
		<Text style={styles.textStyle}>Orientation screen</Text>
		<Text style={styles.textStyle}>Orientation screen</Text>
		<Text style={styles.textStyle}>Orientation screen</Text>
		<Text style={styles.textStyle}>Orientation screen</Text>
	</View>
	</SafeAreaView>
);
};

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	VIewStyle:{
		flex:1,
	},
	textStyle:{
		width:'80%',
		borderWidth:2,
		borderColor:'red',
	}
});

export default Orientation;