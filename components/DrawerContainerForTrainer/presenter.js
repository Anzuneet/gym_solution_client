import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainerForTrainer extends React.Component {


  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainerProfileScreen')}
          style={styles.uglyDrawerItem}>
        <Text style = {{fontSize : 20,}}>프로필 수정</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingManagementScreen')}
          style={styles.uglyDrawerItem}>
          <Text style = {{fontSize : 20,}}>고객 관리</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.logout()}
          style={styles.uglyDrawerItem}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
  }
})