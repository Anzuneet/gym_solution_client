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
import MemberListItem from "../../components/MemberListItem";
import Icon from 'react-native-vector-icons/Ionicons'

class Container extends Component {

  state = {
    members : [
    ]
  }

  componentDidMount() {
    //이그룹에 등록된 멤버 가져오기
  }
  renderSeparator = () => { // 리스트 아이템을 구분짓는것.
    return (
      <View
        style={{
          marginVertical : 6,
          height: 1,
          width: "86%",
          backgroundColor: "red",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    var data, recentData;
    if(this.props.trainees){
      data = this.props.trainees;
    }
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0  }}>
        <FlatList

          data={data}
          renderItem={({ item }) => (
            <MemberListItem
              navigate =  {this.props.navigate}
              data = {item}
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
