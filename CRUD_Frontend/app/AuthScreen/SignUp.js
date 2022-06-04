import React,{Component,useState,useContext,useEffect} from 'react';
import {View,Text,StyleSheet,TextInput,Button,
	Dimensions,TouchableOpacity,Image,ScrollView,ActivityIndicator,

} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SignUp=({navigation})=>{

	const {state,SignUp} = useContext(AuthContext);

	// useEffect(()=>{
	// 	AutomaticSignin();
	// },[]);


	const [name , setName] = useState('');
	const [mobile , setMobile] = useState('');
	const [password , setPassword] = useState('');
	const [email, setEmail] =useState('');

	const [screenWidth , setScreenWidth] = useState(null);
	const [screenHeight , setScreenHeight] = useState(null);

	// const [Show , setShow]=useState(true);

	//  useEffect(() => {

	//  	setTimeout(()=>{
	//  		setShow(false);
	//  		},800);

	// });

	//  if(Show){
	//  	return <ActivityIndicator size="small" />
	//  }


//console.log(state,SignUp);

function handleSubmit(){
    return(
    	setEmail(''),
    	setPassword(''),
    	setName(''),
    	setMobile('')
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
			<View style={styles.mainViewP}>
				<View style={styles.imageView}>
					<Image source={require('../logo2.jpg')} style={styles.image} />
				</View>
				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your Name</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setName(value)}
						value={name}
						placeholder="Full Name"
						placeholderTextColor="#69676C"
						autoCapitalize="none"

						returnKeyType = { "next" }
				    onSubmitEditing={() => { this.secondTextInput.focus(); }}
				    blurOnSubmit={false}
				 />
				</View>

				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your Mobile No</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setMobile(value)}
						value={mobile}
						placeholder=" Mobile No"
						placeholderTextColor="#69676C"
						autoCapitalize="none"

						returnKeyType = { "next" }
				    onSubmitEditing={() => { this.towTextInput.focus(); }}
				    blurOnSubmit={false}

				    ref={(input) => { this.secondTextInput = input; }}
				 />
				</View>

				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your E-Mail</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setEmail(value)}
						value={email}
						placeholder="E-Main"
						placeholderTextColor="#69676C"
						autoCapitalize="none"

						returnKeyType = { "next" }
				    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
				    blurOnSubmit={false}

				    ref={(input) => { this.towTextInput = input; }}
				 />
				</View>

				<View style={styles.textView}>
					<Text style={styles.textStyle}>Enter Your Password</Text>
					<TextInput 
						style={styles.textInput}
						onChangeText={value=>setPassword(value)}
						value={password}
						placeholder="Password"
						placeholderTextColor="#69676C"
						autoCapitalize="none"
						secureTextEntry={true}

						ref={(input) => { this.thirdTextInput = input; }}
				 />
				</View>
				<View style={styles.button}>
					
					<TouchableOpacity 
					onPress={()=>{
						SignUp({name,mobile,email,password}),
						handleSubmit()
					}}
					style={[styles.buttonStyle, {backgroundColor:'#609FE6'}]}
					activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>SIGN UP</Text>
					</TouchableOpacity>
				</View>

				<View  style={[styles.button,{flexDirection:'row'}]}>
					<Text style={[styles.textStyle,{fontSize:16}]}>Already Have an account? </Text>
					<TouchableOpacity
						onPress={()=>{navigation.navigate('SignIn')}}
					>
						<Text style={[styles.textStyle,{fontSize:16,color:'#DEB248'}]}> LogIn Now </Text>
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
	textInput:{
		borderBottomWidth:1,
		borderColor:'#706E73',
		height:40,
		color:'white',
		fontSize:16,
	},
	textView:{
		paddingVertical:10,

	},
	textStyle:{
		color:'#706E73',
		paddingVertical:5,
	},
	button:{
		marginHorizontal:12,
		paddingVertical:10,
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
	},
});

export default SignUp;
