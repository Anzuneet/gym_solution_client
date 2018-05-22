import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationActions } from 'react-navigation'

const { width, height } = Dimensions.get("window");
export default class DrawerContainerForTrainer extends React.Component {



  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style ={styles.trainernameContainer}>
          <Text style = {styles.trainernameText}>
              {this.props.profile.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('TrainerProfileScreen')}
          style={styles.DrawerContainer}>
       <Text style={styles.DrawerText}>프로필 수정</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => navigation.navigate('TrainingManagementScreen')}
          style={styles.DrawerContainer}>
          <Text style={styles.DrawerText}>고객 관리</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.logout()}
          style={styles.LogoutContainer}>
         <Text style={styles.DrawerText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 15,
    paddingHorizontal: 20
  },
  DrawerContainer: {
    padding: 5,
    margin: 5,
    backgroundColor : '#FFDD77',
    borderColor: '#FFBB00',
    borderWidth: 3,
    borderRadius : 20,
    alignItems : 'center',
    justifyContent: "center",
   }, 
   LogoutContainer:{
    padding: 5,
    margin: 5,
    backgroundColor : '#FFDDAA',
    borderColor: '#FFBB00',
    borderWidth: 3,
    borderRadius : 20,
    alignItems : 'center',
    justifyContent: "center",
   },
   DrawerText:{
    paddingVertical : 10,
    fontSize : 20,
    //paddingRight : 20,
    fontFamily: 'font-DoHyeon',
   },
   menuText:{
    paddingVertical : 10,
    fontSize : 30,
    //paddingRight : 20,
    fontFamily: 'font-DoHyeon',
   },
   menuContainer:{
    alignItems : 'center',
    justifyContent: "center",
   },
   avatar: {
    width: width*0.3,
    height: width*0.3,
    borderRadius: 70
  }, 
  trainernameContainer :{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical : 1,
  },
  trainernameText: {
    marginTop:5,
    paddingVertical : 10,
    fontSize : 30,
    //paddingRight : 20,
    fontFamily: 'font-DoHyeon',
  },
  profileContainer :{
    flex:0.45,
    alignItems : 'center',
    paddingVertical : 5,
  },
})