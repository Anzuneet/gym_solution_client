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
        capacity :3,
        charge: 20000,
        comment: "건강한 프로그래머가 되기 위한 필수 코스",
        daysOfWeek :["MON","WED","FRI"],
        gym : {
          address : "30년 전통의 역사, 실력있는 트레이너, 체계적인 시스템",
          name : "김선태 피트니스 클럽",
          uid :1,
        },
        opened: true,
        trainer : {
          name : "여현동",
          uid : 30,
        },
        period : 60,
        start_date : "2018-05-13",
        time : "18:00",
        title : "고인돌 감량 프로젝트",
        uid : 2,
        user_count : 2,
      },
      {
        capacity :10,
        charge: 10000,
        comment: "체지방을 태우실 목적이라면 확인해보세요!",
        daysOfWeek :["WED","SUN"],
        gym : {
          address : "30년 전통의 역사, 실력있는 트레이너, 체계적인 시스템",
          name : "김선태 피트니스 클럽",
          uid :1,
        },
        opened: true,
        trainer : {
          name : "박종휘",
          uid : 30,
        },
        period : 1,
        start_date : "2018-05-28",
        time : "15:30",
        title : "여현동의 8주 속성BURN",
        uid : 3,
        user_count : 1,
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
