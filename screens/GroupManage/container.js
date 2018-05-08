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
import OneGroupForTrainer from "../../components/OneGroupForTrainer";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      groups:
      [
        {
          capacity :10,
          charge: 10000,
          comment: "체지방을 태우실 목적이라면 확인해보세요!",
          daysOfWeek :["WED","SUN"],
          gym : {
            address : "사랑시 고백구 행복동",
            name : "김선태 피트니스 클럽",
            uid :1,
          },
          opened: true,
          trainer : {
            name : "박종휘",
            uid : 30,
          },
          period : 30,
          start_date : "2018-05-28",
          time : "15:30",
          title : "여현동의 8주 속성BURN",
          uid : 2,
          user_count : 2,
        },
        {
          capacity :3,
          charge: 20000,
          comment: "건강한 프로그래머가 되기 위한 필수 코스",
          daysOfWeek :["MON","WED","FRI"],
          gym : {
            address : "사랑시 고백구 행복동",
            name : "김선태 피트니스 클럽",
            uid :1,
          },
          opened: true,
          trainer : {
            name : "박종휘",
            uid : 30,
          },
          period : 40,
          start_date : "2018-05-13",
          time : "18:00",
          title : "고인돌 감량 프로젝트",
          uid : 3,
          user_count : 2,
        },
      ],
    }
  }
/*
  componentDidMount(){
    await this.props.getOwnTrainerGroups((json)=>{
      this.setState({groups:json.groups});
    });
  }*/




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
      <View style = {{flex : 1}}>
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0  }}>
        <FlatList

          data={this.state.groups}
          renderItem={({ item }) => (
            <OneGroupForTrainer
              data = {item}
              containerStyle={{ borderBottomWidth: 0 }}
              navigation = {this.props.navigation}
            />
          )}
          keyExtractor={item => item.uid}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </List>
      <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="새로운 트레이닝 만들기" onPress={() => this.props.navigation.navigate('create')}>
             <Icon name="md-create" style={styles.actionButtonIcon} />
           </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="로그아웃" onPress={() => this.props.logout()}>
             <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
           </ActionButton.Item>
       </ActionButton>
      </View>
      
      
    
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
