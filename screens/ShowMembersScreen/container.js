
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShowMembersScreen from "./presenter";
import NavButton from "../../components/NavButton";
import {Alert} from "react-native";
 
class Container extends Component {

  dialog = null;
  state = {
    tempDate : null,
    data0 :
    {
      count: 1,
      flag:false
    }
  ,
  data1 :
    {
      flag:false
    }
  ,
  data2 :
    {
      flag:false
    }
  ,
  data3 :
    {
      flag:false
    }
  ,
  data4 :
    {
      flag:false
    }
  ,
  data5 :
    {
      flag:false
    },
  
  }


   componentDidMount(){

    const guid = this.props.navigation.state.params.group.uid;
    this.props.getUsersInGroup(guid,(json)=>{
      this.setState({trainees:json});
    });

    this.props.getGroupTraining(guid,(json)=>{
      this.setState({
        dayList: json
      })
     });
  }

  _parsingRD(trainees){
    const guid = this.props.navigation.state.params.group.uid;

    trainees.map((it,index) => {
      this.props.getAfter(guid,it.uid,(json) => {
        this.setState({
          trainees: update(
            this.state.trainees,
            {
              [index] : {
                ...this.state.trainees[index],
                recentData: {$set: json}
              }
            }
          )
        })
      })
    })
  }
_changeNames0 = (text) => {
  this.setState({data0:{...this.state.data0, name:text,flag:true}})
}
_changeNames1 = (text) => {
  this.setState({data1:{...this.state.data1, name:text,flag:true}})
}
_changeNames2 = (text) => {
  this.setState({data2:{...this.state.data2, name:text,flag:true}})
}
_changeTimes0 = (text) => {
  this.setState({data0:{...this.state.data0, count:text,flag:true}})
}
_changeSets0 = (text) => {
  this.setState({data0:{...this.state.data0, set:text,flag:true}})
}
_changeTimes1 = (text) => {
  this.setState({data1:{...this.state.data1, count:text,flag:true}})
}
_changeSets1 = (text) => {
  this.setState({data1:{...this.state.data1, set:text,flag:true}})
}
_changeTimes2 = (text) => {
  this.setState({data2:{...this.state.data2, count:text,flag:true}})
}
_changeSets2 = (text) => {
  this.setState({data2:{...this.state.data2, set:text,flag:true}})
}
_changeNames3 = (text) => {
  this.setState({data3:{...this.state.data3, name:text,flag:true}})
}
_changeNames4 = (text) => {
  this.setState({data4:{...this.state.data4, name:text,flag:true}})
}
_changeNames5 = (text) => {
  this.setState({data5:{...this.state.data5, name:text,flag:true}})
}
_changeTimes3 = (text) => {
  this.setState({data3:{...this.state.data3, count:text,flag:true}})
}
_changeSets3 = (text) => {
  this.setState({data3:{...this.state.data3, set:text,flag:true}})
}
_changeTimes4 = (text) => {
  this.setState({data4:{...this.state.data4, count:text,flag:true}})
}
_changeSets4 = (text) => {
  this.setState({data4:{...this.state.data4, set:text,flag:true}})
}
_changeTimes5 = (text) => {
  this.setState({data5:{...this.state.data5, count:text,flag:true}})
}
_changeSets5 = (text) => {
  this.setState({data5:{...this.state.data5, set:text,flag:true}})
}

   _pullDayInfo = (day) =>{
    const guid = this.props.navigation.state.params.group.uid;
    this.setState({tempDate : day});
    const DATA = this.state.dayList[day.dateString];

    if(DATA){
      if(DATA[0])
        this.setState({data0 : {name : DATA[0].name, count : DATA[0].count.toString(), set: DATA[0].set.toString()}})
      else
        this.setState({data0 : {name : null, count : null, set: null}})
      if(DATA[1])
        this.setState({data1 : {name : DATA[1].name, count : DATA[1].count.toString(), set: DATA[1].set.toString()}})
        else
        this.setState({data1 : {name : null, count : null, set: null}})
      if(DATA[2])
        this.setState({data2 : {name : DATA[2].name, count : DATA[2].count.toString(), set: DATA[2].set.toString()}})
        else
        this.setState({data2 : {name : null, count : null, set: null}})
      if(DATA[3])
        this.setState({data3 : {name : DATA[3].name, count : DATA[3].count.toString(), set: DATA[3].set.toString()}})
        else
        this.setState({data3 : {name : null, count : null, set: null}})
      if(DATA[4])
        this.setState({data4 : {name : DATA[4].name, count : DATA[4].count.toString(), set: DATA[4].set.toString()}})
        else
        this.setState({data4 : {name : null, count : null, set: null}})
      if(DATA[5])
        this.setState({data5 : {name : DATA[5].name, count : DATA[5].count.toString(), set: DATA[5].set.toString()}})
        else
        this.setState({data5 : {name : null, count : null, set: null}})
    }else{
      this.setState({
        data0 : {name : null, count : null, set: null},
        data1 : {name : null, count : null, set: null},
        data2 : {name : null, count : null, set: null},
        data3 : {name : null, count : null, set: null},
        data4 : {name : null, count : null, set: null},
        data5 : {name : null, count : null, set: null},
      })
    }


    
    if(this.dialog != null){
      this.dialog.show();
    }
  }

  _setDialog = (dialog)=>this.dialog = dialog;

  _stateInitialization = () => {
   
 };
 
  _postExercise = async () =>{
    //updateGroupTraining
    const {updateGroupTraining} = this.props;
    const {uid} = this.props.navigation.state.params.group;
    const {tempDate, data0, data1, data2, data3,data4, data5} = this.state;
    const guid = this.props.navigation.state.params.group.uid;

    var TD = new Array(data0, data1,data2,data3,data4,data5);
    var i,j;
    var flag = false;

    for(i= 0;i<6;i++){
      if(TD[i].flag)
      {
        if(TD[i].name == null || TD[i].set == null || TD[i].count == null)
          {
            flag = true;
            Alert.alert(i +"번째 운동 기록이 미완성 상태입니다.!");
            break;
          }
      }
    }
    if(!flag){
      this.dialog.dismiss();
      var TD2 = new Array();
      for(j= 0;j<6;j++){
        if(TD[j].flag == false)
        {
          break;
        }
        TD2[j] = TD[j];
         
        
      }
      const postExerciseResult = await updateGroupTraining(uid,TD2,tempDate.dateString,(json)=>{
        this.setState({
          dayList: json
        })
       });
  
          console.log("새로고침되라")
          this.props.getGroupTraining(guid,);
        
    }
   
  
  }
  render() {
    const dayList = this.state.dayList;
    var dates2 = new Array();
    if(dayList){
      for(udate in dayList){
        dates2[udate] = {marked:true, selected:true, selectedColor:"#rgba(253,139,27,1)"}
      }
    }
   return (
    <ShowMembersScreen {...this.props} {...this.state}

    dates2 = {dates2}
    pullDayInfo = {this._pullDayInfo}
    setDialog = {this._setDialog}
    stateInitialization = {this._stateInitialization}
    changeNames0 = {this._changeNames0}
    changeNames1 = {this._changeNames1}
    changeNames2 = {this._changeNames2}
    changeTimes0 = {this._changeTimes0}
    changeSets0 = {this._changeSets0}
    changeTimes1 = {this._changeTimes1}
    changeSets1 = {this._changeSets1}
    changeTimes2 = {this._changeTimes2}
    changeSets2 = {this._changeSets2}
    changeNames3 = {this._changeNames3}
    changeNames4 = {this._changeNames4}
    changeNames5 = {this._changeNames5}
    changeTimes3 = {this._changeTimes3}
    changeSets3 = {this._changeSets3}
    changeTimes4 = {this._changeTimes4}
    changeSets4 = {this._changeSets4}
    changeTimes5 = {this._changeTimes5}
    changeSets5 = {this._changeSets5}    
    postExercise = {this._postExercise}
/>
   );
 }
}
 
export default Container;