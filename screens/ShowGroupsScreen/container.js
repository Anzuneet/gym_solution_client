
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

 componentDidMount() {
  //이체육관에등록된 모든 group정보
  // key에러 뜸

  //const {groups} = this.props.navigation.state.params
  //this.setState({groups});
};

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
    const {navigate} = this.props.navigation;
   return (
    <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0  }}>
      <FlatList
        data={this.props.navigation.state.params}
        renderItem={({ item }) => (
          <OneGroupForTrainee
            navigate = {navigate}
            data = {item}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
        
        keyExtractor={item => item.guid}
        ItemSeparatorComponent={this.renderSeparator}
        
        //ListFooterComponent={this.renderFooter}
        //onRefresh={this.handleRefresh}
        //refreshing={this.state.refreshing} // refreshingrlsmd
        //onEndReached={this.handleLoadMore} // 끝에 도달했을때 
        //onEndReachedThreshold={50}
      />
    </List>
   );
 }
}
 
export default Container;