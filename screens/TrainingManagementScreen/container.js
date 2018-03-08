import React, { Component } from "react";
import { ScrollView ,View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { List, SearchBar } from "react-native-elements";
import GroupsItem from "../../components/GroupsItem";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons'

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
    console.log("TrainingManagementScreen");
    console.log(this.props);
    return (
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
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.props.navigation.navigate('create')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
      </ActionButton>
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
});

export default Container;
