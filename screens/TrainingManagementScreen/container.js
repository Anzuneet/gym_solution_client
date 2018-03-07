import React, { Component } from "react";
import { ScrollView ,View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import { List, SearchBar } from "react-native-elements";
import GroupsItem from "../../components/GroupsItem";
import FAB from 'react-native-fab';
class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      groups: [
        {
          uid : 100,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 101,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 102,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 103,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 104,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 105,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 106,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 107,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 108,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
        {
          uid : 109,
          capacity : 4,
          opened: false,
          opener : "Trainer park",
          gym: 1004,
          start_date : "2018-03-06",
          charge : 20000,
          time : "10:30",
          period : 30,
          days : ["MON","TUE"]
        },
      ],
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    //this.makeRemoteRequest();
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

  /*handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };*/

  /*handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };*/

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

  renderHeader = () => { // 헤더
    return (
      <View style = {{
        backgroundColor : "#ffbb00",
        height : 70,
        justifyContent : 'center',
        alignItems : 'center',
      }}>
        <Text style = {{
          fontSize : 30,
          fontWeight :"500",
        }}>
          GYM_SOLUTION
        </Text>
        <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {console.log("FAB pressed")}} visible={true}/>
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          height: 100,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
          justifyContent:'center',
          alignItems : 'center',

        }}
      >
        <Text style = {{
          fontSize: 40,
        }}>
        Training 추가하기!
        </Text>
      </View>
    );
  };

  render() {

    return (
      <ScrollView>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.groups}
          renderItem={({ item }) => (
            <GroupsItem
              data = {item}
              containerStyle={{ borderBottomWidth: 0 }}
              //onPressItem={Alert.alert(item.email)}
            />
          )}
          keyExtractor={item => item.uid}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          //ListFooterComponent={this.renderFooter}
          //onRefresh={this.handleRefresh}
          //refreshing={this.state.refreshing} // refreshingrlsmd
          //onEndReached={this.handleLoadMore} // 끝에 도달했을때 
          //onEndReachedThreshold={50}
        />
      </List>
      </ScrollView>
    );
  }
}

export default Container;
