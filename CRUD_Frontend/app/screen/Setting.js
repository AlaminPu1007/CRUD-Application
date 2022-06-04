import React,{Component,useContext} from 'react';
import {Context as BlogContext} from '../context/BlogContext';
import {
	View,Text,StyleSheet,Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-ionicons';

const WIDTH = Dimensions.get('window').width;

const Setting=({route,navigation})=>{
	const {id} =route.params;
	const {state} = useContext(BlogContext);
	const blogPost = state.find((some)=>some.id===id);
	return(
		<SafeAreaView style={styles.container}>
		<View>
		
		<View style={styles.textBox}>
			<Text style={styles.textStyle}>{blogPost.title}</Text>
		</View>
		<View style={styles.textBox}>
			<Text style={styles.textStyle}>{blogPost.text}</Text>
		</View>
		</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container:{
		width:WIDTH-5,
		//borderWidth:2,
		//borderColor:'black',
		//justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	textBox:{
		width:WIDTH-20,
		padding:5,
		marginTop:10,
	},
	textStyle:{
		fontSize:18,
	}
});

export default Setting;