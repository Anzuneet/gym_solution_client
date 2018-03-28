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
import TrainerListItem from "../../components/TrainerListItem";
import Icon from 'react-native-vector-icons/Ionicons'

class Container extends Component {


  componentDidMount() {
    //this.makeRemoteRequest();
    //gym에 소속되어있는 Trainer api_call
  }


  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
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
      <StatusBar barStyle={"light-content"} />
        <FlatList

          data={this.props.Trainer_Id_List}
          renderItem={({ item }) => (
            <TrainerListItem
              navigate =  {this.props.navigate}
              data = {item}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          
          keyExtractor={item => item.trainer_id}
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
