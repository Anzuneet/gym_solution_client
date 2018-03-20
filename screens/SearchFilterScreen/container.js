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
import { List, SearchBar, Divider, Button, ButtonGroup } from "react-native-elements";
import GroupsItem from "../../components/GroupsItem";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'
import { CheckBox } from 'react-native-elements'

/*
여기서 체크박스, 라디오버튼을 이용하여 state를 바꿔주고
이전 화면 (SearchScreen)으로 돌아갈때 그 state를 전부 넘겨준다.
그후 SearchScreen에선 받아온 state를 이용하여 다시 marker를 rander한다.
*/


class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedIndex: 2,
        monCheck: false,
        tueCheck: false,
        wedCheck: false,
        thuCheck: false,
        friCheck: false,
        satCheck: false,
        sunCheck: false,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  componentDidMount() {
    //this.makeRemoteRequest();
  }

  checkBoxTest()
  {
   this.setState({monCheck:!this.state.monCheck})
   alert ("now value is " + this.state.monCheck)
  }

  render() {
    console.log("TrainingManagementScreen");
    console.log(this.state);
    return (      
      // 월화수목금토일

<View style = {styles.weightContainer}>
<CheckBox
      title='월'
      checked={this.state.monCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({monCheck:!this.state.monCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='화'
      checked={this.state.tueCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({tueCheck:!this.state.tueCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='수'
      checked={this.state.wedCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({wedCheck:!this.state.wedCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='목'
      checked={this.state.thuCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({thuCheck:!this.state.thuCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='금'
      checked={this.state.friCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({friCheck:!this.state.friCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
      <CheckBox
      title='토'
      checked={this.state.satCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({satCheck:!this.state.satCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />

      <CheckBox
      title='일'
      checked={this.state.sunCheck} 
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      onPress={()=>this.setState({sunCheck:!this.state.sunCheck})}
      containerStyle={styles.checkBoxContainer}
      textStyle={styles.textStyle}
      size={15}
      />
    </View>

     

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        height:60,
        width:100,
    },
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
  weightContainer :{
      flex:1,
      flexDirection : 'row',
     // justifyContent : 'space-between',
      backgroundColor : '#f2f2f2',
      paddingHorizontal : 7
    },
  checkBoxContainer :{
    //flex:2,
   // flexDirection : 'column',
    height:30,
    width:47,
    marginLeft: -6,
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  textStyle:{
    fontSize:12,
  }
});

export default Container;
