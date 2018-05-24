import React, { Component } from "react";
import { ScrollView ,
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  Alert, 
  StyleSheet,
  StatusBar,
  Image,
 } from "react-native";
import { List } from "react-native-elements";
import BeforeAVGListItem from "../../components/BeforeAVGListItem";
import Icon from 'react-native-vector-icons/Ionicons'

class Container extends Component {
  state={
    beforeGroups:[
      {

        uid: 1,
        trainingName: "바벨생각",
        trainingPeriod: "60",
        dataDifference: {
          muscle: +10,
          fat: -10,
          weight: -8,
        }
      },

      {
        uid: 2,
        trainingName: "덤벨생각",
        trainingPeriod: "30",
        dataDifference: {
          muscle: +7,
          fat: -7,
          weight: -10,
        }
      },
    ]
  }

  renderSeparator = () => { // 리스트 아이템을 구분짓는것.
    return (
      <View
        style={{
          marginVertical : 6,
          height: 1,
          width: "86%",
          backgroundColor: "#ffbb00",
          marginLeft: "14%"
        }}
      />
    );
  };

  

  

  render() {
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0  }}>
      <StatusBar barStyle={"light-content"} />
        <FlatList

          data={this.props.changeDatas}
          renderItem={({ item }) => (
            <BeforeAVGListItem
              data = {item}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          
          keyExtractor={item => item}
          ItemSeparatorComponent={this.renderSeparator}
          
        />
      </List>
    
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  logo: {
    width: 180,
    height: 65,
    marginTop: 20
    },
});

export default Container;
