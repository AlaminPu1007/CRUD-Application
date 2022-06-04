import React,{Component,useState,useContext,useEffect} from 'react';
import {
	View,Text,Button,FlatList,TextInput,StyleSheet,Dimensions,
	Keyboard,TouchableWithoutFeedback,TouchableOpacity,ScrollView,ActivityIndicator,
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


const Create =({navigation,initialValues})=>{
	const {state,addBlogPost} =useContext(BlogContext);

	const [title , setTitle] =useState(initialValues='');
	const [text , setText] =useState(initialValues='');
//console.log(title,text);

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
	
		<DismisKeyBoard>
		<SafeAreaView >
		<ScrollView showsVerticalScrollIndicator={false}>
		<View style={styles.container}>
			<View style={styles.mainViewP }>
			<View style={styles.header}>
				<Text style={styles.headerText}>Create your Blog!</Text>
			</View>

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
					addBlogPost(title,text),
					ClearText()
				}}
				style={styles.buttonStyle}
				activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>save</Text>
				</TouchableOpacity>
			</View>
			
		</View>
		</View>
		</ScrollView>
		</SafeAreaView>
		</DismisKeyBoard>
	);
};

// Create.defaultProps={
// 	initialValues:{
// 		title: '',
// 		text: '',
// 	}
// };

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		//backgroundColor:'#38363B',
		//marginTop:50
	},
	mainViewL:{////no need
	//	width:HEIGHT-70,
		//backgroundColor:'red',
		padding:20,
	},
	mainViewP:{
		//width:WIDTH-70,
		paddingVertical:20,
		width:'80%',

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
		//marginTop:-20,

	},
	headerText:{
		fontSize:20,
		textAlign:'center',
	}
})

export default Create;