import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {
/*
  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }*/
  // <Text style={styles.uglyDrawerItem}>HomeScreen</Text>

  render() {
    const { navigation } = this.props
    return (
        <View style={styles.container}>

        <View style={styles.touchContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}>
          <Image
         source={require("../assets/images/home.png")}
        resizeMode="stretch"

         />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('OwnGroupScreen')}>
        <Text style={styles.uglyDrawerItem}>OwnGroupScreen</Text>
        </TouchableOpacity>
        </View>

         <View style={styles.touchContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FeedScreen')}>
        <Text style={styles.uglyDrawerItem}>FeedScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationsScreen')}>
        <Text style={styles.uglyDrawerItem}>NotificationsScreen</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.touchContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.uglyDrawerItem}>ProfileScreen</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.touchContainer}>
        <TouchableOpacity
          onPress={this.logout}>
        <Text style={styles.uglyDrawerItem}>logout</Text>
        </TouchableOpacity>
        </View>

        </View>    
    )
  }
}

const styles = StyleSheet.create({
  touchContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  container:{
    height : 520,
    backgroundColor: '#f6f6f6',
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center',
    height:100,
    width:100,
  }
})