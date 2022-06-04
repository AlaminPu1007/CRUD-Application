import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Expanded from './Expanded';

// console.disableYellowBox = true;

export default class App extends React.Component {
  render(){
    return(
      <>
      <Expanded/>
      </>
    );
  }
}


const styles = StyleSheet.create({
  
});




///started graph work here
/* 

import React,{Component} from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
export default class AreaChartExample extends React.Component {
    render() {
        const data = [50, 45, 85, 10, 32, 53,  24, 50, 45, 85, 91, 32, 53,  24, 50  ]
 
        return (
            <AreaChart
                style={{ height: 250}}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: '#2c14de',stroke: 'black', 
                  strokeWidth:1,
                  fillOpacity:0.5,
                  strokeOpacity:0.5,
                  strokeLinejoin:'round',
                  scale:1,
                  
                 }}
                numberOfTicks={0}
                animate

            >
                <Grid />
            </AreaChart>
        )
    }
}



*/






















// import React, { Component } from 'react'
//   import {
//     Dimensions,
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView
//   } from 'react-native';

// import { AreaChart, Grid } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from "react-native-chart-kit";


// import I18n from 'react-native-i18n';
// import en from './i18n/en';
// import fr from './i18n/fr';

// const screenWidth = Dimensions.get("window").width;

// ///color code #2c14de

// I18n.fallbacks = true;
// I18n.translations = {
//   en,
//   fr
// };

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June","july","Augest","september","Octobar","November","December"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43,10,0,45,100,36,7],
//       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//       strokeWidth: 2 // optional
//     }
//   ],
//  // legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
// };

// const chartConfig = {
//   backgroundGradientFrom: "#1E2923",
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: "#08130D",
//   backgroundGradientToOpacity: 0.5,
//   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//   strokeWidth: 2, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false // optional
// };


//   export default class App extends Component {
  
//     render() {
    
//       return (
//         <View style={{backgroundColor:'#2c14de'}}>
//           <Text>Bezier Line Chart</Text>
//           <LineChart
//             data={data}
//             width={screenWidth}
//             height={256}
//             verticalLabelRotation={25}
//             chartConfig={chartConfig}
//             bezier
//             withDots={true}
//             withShadow={true}
//             withInnerLines={false}
//             withOuterLines={false}
//             withVerticalLabels={false}
//             withHorizontalLabels={false}
//           />
//         </View>
//       )
//     }
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//   })