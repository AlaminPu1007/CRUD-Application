import React,{Component,useContext} from 'react';
import {View,Text,Easing} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView }
 from 'react-native-safe-area-context';
import { createStackNavigator,
	CardStyleInterpolators ,TransitionPresets , 
} from '@react-navigation/stack';
import SignUp from './AuthScreen/SignUp';
import SignIn from './AuthScreen/SignIn';

import { navigationRef } from './RootNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Create from './screen/Create';
import AllList from './screen/AllList';
import Account from './screen/Account';
import {Context as AuthContext} from './context/AuthContext';
import DetailsScreen from './screen/DetailsScreen';
import Setting from './screen/Setting';
import EditScreen from './screen/EditScreen';
import Icon from 'react-native-ionicons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from './screen/Orientation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const StackScreen = createStackNavigator();

const StackNav=()=>{
	return(
		<SafeAreaProvider>
			<StackScreen.Navigator 
				screenOptions={{
					gestureEnabled:true,
					headerShown:false,
					...TransitionPresets.ModalPresentationIOS , 
         transitionSpec: {
		      open: config,
		      close: closeConfig,
		    },
				}}
			 >
				<StackScreen.Screen name="Details" component={DetailsScreen} 
					 options={{headerShown:false}}
				/>
				<StackScreen.Screen name="Setting" component={Setting} />
				<StackScreen.Screen name="Edit" component={EditScreen} />
				
				<StackScreen.Screen name="Orientation" component={Orientation} />
			</StackScreen.Navigator>
		</SafeAreaProvider>
	);
};


const TabNav=()=>{
	return(
		<SafeAreaProvider>
			<Tab.Navigator initialRouteName="Create"
				tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
           labelStyle: {fontSize: 13, },
        }}
			>
				
				<Tab.Screen name="Create" component={Create} 
					options={{
						tabBarIcon:()=><AntDesign name="pluscircleo" size={26} color="#373737"/>
					}}
				/>

				<Tab.Screen name="All List" component={StackNav} 
					options={{
						tabBarIcon:()=><Feather name="list" size={28} color="#373737"/>
					}}
				/>
				<Tab.Screen name="Account" component={Account} 
					options={{
						tabBarIcon:()=><MaterialCommunityIcons  name="account-circle-outline" size={28} color="#373737"/>,
					}}
				/>
			</Tab.Navigator>
		</SafeAreaProvider>
	);
};


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 30,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig={
	animation:'timing',
	config:{
		duration:500,
		easing:Easing.liner,
	}
}

class AuthenticationScreen extends Component{
	render(){
		return(
			<SafeAreaProvider>
			<Stack.Navigator
				initialRouteName="SignIn"
				screenOptions={{
					gestureEnabled:true,
					headerShown:false,
					...TransitionPresets.ModalPresentationIOS ,  ///this cause to modal 
         transitionSpec: {
		      open: config,
		      close: closeConfig,
		    },
				}}
			>
				<Stack.Screen name="SignUp" component={SignUp}/>
				<Stack.Screen name="SignIn" component={SignIn} />
			</Stack.Navigator>
			</SafeAreaProvider>
		);
	}
}
export default ({navigation})=>{

const {state} = useContext(AuthContext); 

	return(
		<NavigationContainer  ref={navigationRef}>
		{
			!state.token ?<AuthenticationScreen />:<TabNav/>
		}
		</NavigationContainer>
	);
};

