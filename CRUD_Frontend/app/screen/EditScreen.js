import React,{Component,useState,useContext} from 'react';
import {
	View,Text,Button,FlatList,TextInput,StyleSheet,Dimensions,
	Keyboard,TouchableWithoutFeedback,TouchableOpacity,ScrollView,
}from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as BlogContext} from '../context/BlogContext';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const DismisKeyBoard=({children})=>{

	return(
		<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
		{children}
		</TouchableWithoutFeedback>
		);
		
	};


const EditScreen =({route,navigation,initialValues})=>{

	const {id} =route.params;

	const {state,addBlogPost,EditBlogPost} =useContext(BlogContext);

	const filter = state.find((some)=>some.id===id);
	

	const [title , setTitle] =useState(filter.title);
	const [text , setText] =useState(filter.text);

	const [screenWidth , setScreenWidth] = useState(null);
	const [screenHeight , setScreenHeight] = useState(null);

//console.log(title,text);
	const ClearText=()=>{
		return(
			setText(''),
			setTitle('')
		);
	};

	const OnLayoutChange=()=>{
		return(
			setScreenHeight(Dimensions.get('window').height),
			setScreenWidth(Dimensions.get('window').width)
			//console.log(screenHeight,screenWidth)
		);
	};


	return(
		<SafeAreaView style={styles.container} onLayout={OnLayoutChange} >
		<ScrollView showsVerticalScrollIndicator={false}>
		<DismisKeyBoard>
			<View style={screenHeight > screenWidth ? styles.mainViewP : styles.mainViewL}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Edit your Blog!</Text>
			</View>
			<View>
			<TextInput 
				style={[styles.textInput,]}
				onChangeText={value=>setTitle(value)}
				value={title}
				placeholder="Enter Your Title..."
				placeholderTextColor="#706E73"

				returnKeyType = { "next" }
		    onSubmitEditing={() => { this.secondTextInput.focus(); }}
		    blurOnSubmit={false}
		 />
		 </View>
		 <View>
		 <TextInput 
				style={[styles.textInput,{height:80}]}
				onChangeText={value=>setText(value)}
				value={text}
				placeholder="Enter Your Content..."
				placeholderTextColor="#706E73"
				multiline
				
				ref={(input) => { this.secondTextInput = input; }}
		 />
		 </View>
			<View style={styles.button}>
				<TouchableOpacity 
				onPress={()=>{
					EditBlogPost(id,title,text),
					ClearText(),
					navigation.pop()
				}}
				style={styles.buttonStyle}
				activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>save</Text>
				</TouchableOpacity>
			</View>
			
		</View>
		</DismisKeyBoard>
		</ScrollView>
		</SafeAreaView>
	);
};

EditScreen.defaultProps={
	initialValues:{
		title: '',
		text: '',
	}
};

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		//backgroundColor:'#38363B',
		marginTop:30,
	},
	mainViewL:{
		width:HEIGHT-80,
		//backgroundColor:'red',
		padding:20,
	},
	mainViewP:{
		width:WIDTH-80,
		paddingVertical:20,

		//backgroundColor:'green',
	},
	textInput:{
		borderWidth:1,
		borderColor:'#706E73',
		height:40,
		fontSize:16,
		marginVertical:20,
	},
	button:{
		marginHorizontal:12,
		paddingVertical:15,
	},
	buttonStyle:{
		backgroundColor:'#609FE6',
		paddingVertical:9,
		borderRadius:20,
	},
	buttonText:{
		color:'white',
		fontSize:16,
		textAlign:'center',
	},
	header:{
		height:70,
		marginTop:-20,

	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	}
})

export default EditScreen;