import createDataContext from './createDataContext';
import tracker from '../api/tracker';
import {Text} from 'react-native';
import * as RootNavigation from '../RootNavigation';
//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const reducer =(state , action)=>{
	switch(action.type){
		case 'signIn_Up':
			return{...state, token: action.payload, errorMessage:'',errorMessage1:'',networkError:''};
		case 'signout':
			return {token:null ,};
		case 'TextInput_error':
			return {...state , errorMessage:action.payload };
		case 'TextInput_error1':
			return {...state , errorMessage1:action.payload };
		case 'NetWorkError':
			return {...state , networkError:action.payload};
		case 'Clear_Error':
			return {...state, networkError:'',errorMessage:'',errorMessage1:''};
		default:
		return state;
	}
};

const CLearErrorMessage=(dispatch)=>{
	return()=>{
		dispatch({type:'Clear_Error'});
	};
};

const signOut =(dispatch)=>{
	return async ()=>{
		await AsyncStorage.removeItem('token');
		dispatch({type: 'signout' });
		RootNavigation.navigate('SignIn');
	};
};


const SignIn=(dispatch)=>{
	return async ({email,password})=>{
		try{
			
			if(email===''){
				dispatch({type:'TextInput_error',payload:'Field is Required!'});
			}
			 if(password===''){
				dispatch({type:'TextInput_error1',payload:'Field is Required!'});
			}
		if(email!==''&& password!==''){
			
			const response = await tracker.post('/signin',{email , password});
			await AsyncStorage.setItem('token' , response.data.token);
			dispatch({type:'signIn_Up',payload:response.data.token});
			
			RootNavigation.navigate('Create');
		}

		}catch(err){
			console.log(err.message);
			dispatch({type:'NetWorkError', payload: 'Check Your Internet Connection!'});
		}
		
	};
};


const SignUp=(dispatch)=>{
	return async ({name,mobile,email,password})=>{
		try{
			//console.log(name,mobile,email,password);
			const response = await tracker.post('/signup',{name,mobile,email , password});
		  await AsyncStorage.setItem('token' , response.data.token);

			dispatch({type: 'signIn_Up', payload:response.data.token,});

			RootNavigation.navigate('Create')
		}catch(err){
			console.log(err.message);
		}
	};
};

const AutomaticSignin =(dispatch)=>{
	return async ()=>{

		//console.log('async-storage before');

		const token = await AsyncStorage.getItem('token');

		//console.log(token);
		if(token){
			dispatch({type:'signIn_Up' , payload:token});

			RootNavigation.navigate('Create')
		}
		else{
			RootNavigation.navigate('SignIn');
			//console.log(token);
		}
	};
};




export const {Context , Provider} = createDataContext(
	reducer,
	{SignIn,SignUp,AutomaticSignin,signOut,CLearErrorMessage},
	{
		token:null,errorMessage: '',errorMessage1: '',
	takeEmail: '',alldata:null,getalldata:'',networkError:'',
	}
);