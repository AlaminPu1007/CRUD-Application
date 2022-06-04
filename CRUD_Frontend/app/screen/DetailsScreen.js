import React,{Component,useContext,useState,useEffect} from 'react';
import {
	View,Text,FlatList,StyleSheet,TouchableOpacity,Dimensions,ScrollView,
	ActivityIndicator,
}from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-ionicons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DetailsScreen =({navigation})=>{

	const {state,addBlogPost,DeteBlog} =useContext(BlogContext);

	const [screenWidth , setScreenWidth] = useState(null);
	const [screenHeight , setScreenHeight] = useState(null);

	const [Show , setShow]=useState(true);

	 useEffect(() => {

	 	setTimeout(()=>{
	 		setShow(false);
	 		},800);

	});

	 if(Show){
	 	return <ActivityIndicator size="small" />
	 }

	const OnLayoutChange=()=>{
		return(
			setScreenHeight(Dimensions.get('window').height),
			setScreenWidth(Dimensions.get('window').width)
			//console.log(screenHeight,screenWidth)
		);
	};

	return(

		<SafeAreaView style={ screenHeight > screenWidth ? styles.container: styles.containerL} 
			onLayout={OnLayoutChange}>
			<View style={styles.header}>
				<Text style={styles.headerText}>All Blog List Here!</Text>
			</View>
			<FlatList
				data={state}
				keyExtractor={some=>some.id}
				renderItem={({item})=>{
					return(
						<TouchableOpacity activeOpacity={0.5}
							onPress={()=>{navigation.navigate('Setting',{id:item.id})}}
						>
						<View style={styles.viewStyle}>
							<Text style={styles.textStyle}>{item.title}</Text>
								<AntDesign name="edit" size={35} color="#656565"
									style={{paddingRight:5,}}
									onPress={()=>{navigation.navigate('Edit',{id:item.id})}}
								/>
							 <AntDesign name="delete" color="#888888" size={26}
							 style={{marginTop:4,}}
							 	onPress={()=>{DeteBlog(item.id)}}
							 />
						</View>
						</TouchableOpacity>
						
					);
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	viewStyle:{
		marginHorizontal:15,
		borderWidth:2,
		marginVertical:5,
		padding:5,
		flexDirection:'row'

	},
	header:{
		marginVertical:5,
	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	},
	container:{
		width:WIDTH-5,
		flex:1,
	},
	containerL:{
		width:HEIGHT-5,
		flex:1,
	},
	textStyle:{
		fontSize:16,
		fontWeight:'bold',
		width:"80%",
		marginTop:5,
	},

});

export default DetailsScreen;

