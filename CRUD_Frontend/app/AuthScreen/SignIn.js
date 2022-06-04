import React,{Component,useState,useContext,useEffect} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Button,
	TextInput,
	StyleSheet,
	Dimensions,
	Image,
	ScrollView,
	ActivityIndicator
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } 
from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';

import  AntDesign  from 'react-native-vector-icons/AntDesign';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SignIn=({navigation})=> {

	const {state:{errorMessage,errorMessage1,networkError},
	SignIn,AutomaticSignin,CLearErrorMessage} = useContext(AuthContext);

	useEffect(()=>{
		AutomaticSignin();
///for clearing when visit one page to another
		const unsubscribe = navigation.addListener('blur', () => {
      CLearErrorMessage();
      clearTextInput();
    });

    return unsubscribe;
///end
	},[]);




	//console.log('error Message is ',errorMessage);

	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');

	const [screenWidth , setScreenWidth] = useState(null);
	const [screenHeight , setScreenHeight] = useState(null);

	const [secureText , setSecureText] = useState(true);

	const [Show , setShow]=useState(true);

	 useEffect(() => {

	 	setTimeout(()=>{
	 		setShow(false);
	 		},800);

	});

	 if(Show){
	 	return <ActivityIndicator size="small" />
	 }

	function clearTextInput(){
		return(
			setEmail(''),
			setPassword('')
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
			
			<SafeAreaView>
			<ScrollView>
			<View style={styles.container}>
			<View style={styles.mainViewP }>
				<View style={styles.imageView}>
					<Image source={require('../logo2.jpg')} style={styles.image} />
				</View>
				<View style={styles.textView}>
					<Text style={styles.textStyle}>Email Address</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setEmail(value)}
						value={email}
						placeholder="E-mail"
						placeholderTextColor="#69676C"
						autoCapitalize="none"

						returnKeyType = { "next" }
				    onSubmitEditing={() => { this.secondTextInput.focus(); }}
				    blurOnSubmit={false}
				 />
				 { networkError ? null :
				 		errorMessage ? <Text style={{color:'red',fontSize:16}}>{errorMessage}</Text>:null
				 	}
				</View>
				<View style={styles.textView}>
					<Text style={styles.textStyle}>Password</Text>
					<View style={{flexDirection:'row'}}>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setPassword(value)}
						value={password}
						placeholder="Password"
						placeholderTextColor="#706E73"
						secureTextEntry={secureText}
						
						ref={(input) => { this.secondTextInput = input; }}
				 />
				 { secureText ?
				 <AntDesign name="eyeo" size={26} color="#fff" 
				 	onPress={()=>{setSecureText(false)}} 
				 /> : <AntDesign name="eye" size={26} color="#fff" 
				 	onPress={()=>{setSecureText(true)}} 
				 />
				}
				 </View>
				 { networkError ? null :
				 	errorMessage1?<Text style={{color:'red',fontSize:16}}>{errorMessage1}</Text>:null
				 }
				</View>
				{networkError ? <Text style={{color:'red',fontSize:16}}>{networkError}</Text> :null}
			{/*button work*/}
				<View style={styles.button}>
					
					<TouchableOpacity 
					onPress={()=>{
						SignIn({email,password}),
						clearTextInput()
					}}
					style={styles.buttonStyle}
					activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>SIGN IN</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					
					<TouchableOpacity 
					onPress={()=>{navigation.navigate('SignUp')}}
					style={[styles.buttonStyle, {backgroundColor:'#DEB248'}]}
					activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>No Account Yet? Sign Up Now</Text>
					</TouchableOpacity>
				</View>
			</View>
			</View>
			</ScrollView>
			</SafeAreaView>
			
		);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#38363B',
		paddingBottom:112
	},
	textInput:{
		borderBottomWidth:1,
		borderColor:'#706E73',
		height:40,
		color:'white',
		fontSize:16,
		width:'90%'
	},
	textView:{
		//width:WIDTH-80,
		paddingVertical:15,

	},
	mainViewL:{
		width:HEIGHT-70,
		//backgroundColor:'red',
		padding:20,
	},
	mainViewP:{
		//width:WIDTH-70,
		paddingVertical:20,
		width:'80%'

		//backgroundColor:'green',
	},
	textStyle:{
		color:'#706E73',
		paddingVertical:5,
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
	image:{
		height:80,
		width:80,
		borderRadius:30,
	},
	imageView:{
		alignItems:'center',
		justifyContent:'center',
		marginBottom:10,
	},
});

export default SignIn;






