import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter
}from "victory-native";

const { width, height } = Dimensions.get("window");



 const ProfileChart = props => (
  <View style = {styles.container}>
    <View style = {styles.chartContainer}>
      <View style = {styles.chartTitleContainer}>
        <Text style = {styles.title}> {props.name} </Text>
      </View>
      <VictoryChart height={200} width={width}
            domainPadding={{ y: 10 }}
            containerComponent={
              <VictoryVoronoiContainer
                voronoiDimension="x"
                labels={(d) => `${props.name} : ${d.y}`}
                labelComponent={
                  <VictoryTooltip
                  flyoutStyle={{ fill: "transparent", stroke : 'transparent' }}
                  orientation = "top"
                  pointerLength = {30}
                />
                }
              />}
      >
            <VictoryLine
              interpolation={"linear"} data={props.data}
              style={{
                data: {
                  stroke: "tomato",
                  strokeWidth: (d, active) => {return active ? 4 : 2;}
                },
                labels: { fill: "black" }
              }}
            />
      </VictoryChart>

    </View>
  </View>
  

);

const styles = StyleSheet.create({
  container : {
    height : 300,
  },
  TooltipEx: {
    justifyContent : 'center',
    alignItems: 'center',
  },
  chartTitleContainer :{
    paddingTop :10,
    alignItems: 'center',
  },
  chartContainer : {
    backgroundColor: '#eeeeee',
    marginVertical : 6,
    marginHorizontal : 10,
  },
  title :{
    fontSize : 20,
  },
});

export default ProfileChart;