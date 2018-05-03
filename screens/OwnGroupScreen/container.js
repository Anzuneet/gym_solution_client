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
import { List, SearchBar } from "react-native-elements";
import OneGroupForProfile from "../../components/OneGroupForProfile";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'

class Container extends Component {
  state = {
    loading: false,
    groups:
    [
      {
        capacity :5,
        charge: 10000,
        comment: "",
        daysOfWeek :["WED","SUN"],
        gym : {
          address : "사랑시 고백구 행복동",
          name : "행복-FIT",
          uid :1,
        },
        opened: true,
        trainer : {
          name : "박종휘",
          uid : 30,
        },
        period : 60,
        start_date : "2018-04-28",
        time : "8:30",
        title : "박종휘의바벨생각",
        uid : 2,
        user_count : 2,
      },
      {
        capacity :5,
        charge: 10000,
        comment: "",
        daysOfWeek :["WED","SUN"],
        gym : {
          address : "사랑시 고백구 행복동",
          name : "행복-FIT",
          uid :1,
        },
        opened: true,
        trainer : {
          name : "박종휘",
          uid : 30,
        },
        period : 1,
        start_date : "2018-03-28",
        time : "8:30",
        title : "불끈",
        uid : 3,
        user_count : 2,
      },
    ]
  }

  componentDidMount(){
    /*
    this.props.getOwnGroups((json)=>{
      this.setState({groups:json.groups});
    });*/
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

          data={this.state.groups}
          
          renderItem={({ item }) => (
            <OneGroupForProfile
              data = {item}
              navigate = {this.props.navigation.navigate}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.uid}
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
