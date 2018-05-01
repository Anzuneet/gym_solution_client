
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image ,FlatList,View,} from "react-native";
import { List } from "react-native-elements";
import OneGroupForTrainee from "../../components/OneGroupForTrainee";
 
class Container extends Component {
 static propTypes = {
  
};
 state = {

 };


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
      <FlatList
        data={this.props.groups}
        renderItem={({ item }) => (
          <OneGroupForTrainee
            navigate = {this.props.navigate}
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
 
export default Container;