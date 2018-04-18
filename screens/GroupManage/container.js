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
import GroupsItem from "../../components/GroupsItem";
import Icon from 'react-native-vector-icons/Ionicons'
import ActionButton from 'react-native-action-button';
class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      groups : [
      ]
    };
  }

  componentDidMount() {
    //this.makeRemoteRequest();
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

  renderHeader = () => { // 헤더
    return (
      <View style = {{
        backgroundColor: "#rgba(253,139,27,0.8)",
        height : 70,
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1
      }}>

        <Image
        source={require("../../assets/images/logo-gym2.png")}
        resizeMode="stretch"
        style ={{width : 400,height : 100}}
        />
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
      <View style ={{flex:1}}>
      
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0  }}>
      <StatusBar barStyle={"light-content"} />

        <FlatList

          data={this.state.groups}
          renderItem={({ item }) => (
            <GroupsItem
              data = {item}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          
          //ListHeaderComponent={this.renderHeader}
          keyExtractor={item => item.uid}
          ItemSeparatorComponent={this.renderSeparator}
          
          //ListFooterComponent={this.renderFooter}
          //onRefresh={this.handleRefresh}
          //refreshing={this.state.refreshing} // refreshingrlsmd
          //onEndReached={this.handleLoadMore} // 끝에 도달했을때 
          //onEndReachedThreshold={50}
        />

      </List>
      <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Training" onPress={() => this.props.navigation.navigate('create')}>
             <Icon name="md-create" style={styles.actionButtonIcon} />
           </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="logout" onPress={() => this.props.logout()}>
             <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
           </ActionButton.Item>
           <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
             <Icon name="md-done-all" style={styles.actionButtonIcon} />
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
