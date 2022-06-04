import React,{Component,useContext,useState} from 'react';
import {
	View,Text,FlatList,StyleSheet,TouchableOpacity,Dimensions,ScrollView,
}from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AllList =({navigation})=>{

	const {state,addBlogPost} =useContext(BlogContext);

	const [screenWidth , setScreenWidth] = useState(null);
	const [screenHeight , setScreenHeight] = useState(null);

	const OnLayoutChange=()=>{
		return(
			setScreenHeight(Dimensions.get('window').height),
			setScreenWidth(Dimensions.get('window').width)
			//console.log(screenHeight,screenWidth)
		);
	};

	return(
		<SafeAreaView style={screenHeight>screenWidth? styles.container:styles.containerL} onLayout={OnLayoutChange}>
			<View style={styles.header}>
				<Text style={styles.headerText}>All Blog List Here!</Text>
			</View>
			<FlatList
				data={state}
				keyExtractor={some=>some.id}
				renderItem={({item})=>{
					return(
						<View style={styles.viewStyle}>
						<TouchableOpacity activeOpacity={0.7}
							onPress={()=>{navigation.navigate('Details',{id:item.id})}}
						>
							<Text >{item.title}</Text>
						</TouchableOpacity>
						</View>
						
					);
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container:{
		flex:1,
		width:40,
	},
	containerL:{},
	viewStyle:{
		margin:5,
	},
	header:{
		marginVertical:5,
		width:WIDTH,
	},
	headerL:{
		marginVertical:5,
		width:HEIGHT,
	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	}
});

export default AllList;