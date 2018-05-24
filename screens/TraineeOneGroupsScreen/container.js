
import React, { Component } from "react";
import PropTypes from "prop-types";
import TraineeOneGroupsScreen from "./presenter";
import { Image, Alert } from "react-native";
import NavButton from "../../components/NavButton";
 
class Container extends Component {
  dialog = null;

  state = {
    reviewFlag: false,
    starCount: 3,
    comment : "",
    isSubmitting: false,
    data0 :
    {
     
    }
  ,
  data1 :
    {
      
    }
  ,
  data2 :
    {
      
    }
  ,
  data3 :
    {
      
    }
  ,
  data4 :
    {
      
    }
  ,
  data5 :
    {
      
    },

    before : {
      Weight: 85,
      Muscle: 20,
      Fat: 30,
    },
    after : {
      Weight: 79,
      Muscle: 28,
      Fat: 23,
    },
  }

  
  componentDidMount(){

    const guid = this.props.navigation.state.params.group.uid;
    const uid = this.props.profile.uid;

    
    this.props.getBefore(guid,uid,(json) => {
      this.setState({
        beforeData : json
      })
    })
    
    this.props.getAfter(guid,uid,(json) => {
      this.setState({
        afterData : json
      })
    })

    this.props.getGroupTraining(guid,(json)=>{
      this.setState({
        dayList: json
      })
     });

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

  _closeDialog = () =>
  {
    this.dialog.dismiss();
  }
  _setDialog = (dialog)=>this.dialog = dialog;

  _onStarRatingPress = (rating) =>{
    this.setState({starCount: rating});
  }
  _changeComment = (comment) => {
    this.setState({comment : comment})
  }

  _submit = async () =>{
    const {uid} = this.props.navigation.state.params.group.opener;
    const {comment, starCount, isSubmitting} = this.state;
    const {postReview} = this.props;
  
    if(!isSubmitting){
      if(uid && comment && starCount){
        this.setState({
          isSubmitting : true
        })
        const submitResult = await postReview(uid,starCount,comment);
        if(submitResult == true){
          this.setState({isSubmitting: false})
        }else if(submitResult == false)
          this.setState({isSubmitting: false})
      }else{
        Alert.alert('평점과 리뷰를 작성해주세요!');
      }
      
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    const group = this.props.navigation.state.params.group;
    
    const dayList = this.state.dayList;
    var AD_fat = "x" ,AD_muscle = "x" ,AD_weight = "x" , afterImage;
    var BD_fat = "x" ,BD_muscle= "x" ,BD_weight = "x" , beforeImage;

    var dates2 = new Array();
    if(dayList){
      for(udate in dayList){
        dates2[udate] = {marked:true, selected:true, selectedColor:"#rgba(253,139,27,1)"}
      }
    }

    if(this.state.afterData){
      AD_fat = this.state.afterData.fat;
      AD_muscle = this.state.afterData.muscle;
      AD_weight = this.state.afterData.weight;
      afterImage = this.state.afterData.image;
    }
    if(this.state.beforeData){
      BD_fat = this.state.beforeData.fat;
      BD_muscle = this.state.beforeData.muscle;
      BD_weight = this.state.beforeData.weight;
      beforeImage = this.state.beforeData.image;
    }
      

   return (
    <TraineeOneGroupsScreen {...this.props} {...this.state}
    dates2 = {dates2}
    pullDayInfo = {this._pullDayInfo}
    setDialog = {this._setDialog}
    navigate = {navigate}
    group = {group}
    closeDialog={this._closeDialog}
    onStarRatingPress = {this._onStarRatingPress}
    changeComment = {this._changeComment}
    reviewSubmit = {this._submit}
    AD_fat = {AD_fat}
    AD_muscle = {AD_muscle}
    AD_weight = {AD_weight}
    afterImage = {afterImage}
    BD_fat = {BD_fat}
    BD_muscle = {BD_muscle}
    BD_weight = {BD_weight}
    beforeImage = {beforeImage}

    />
   );
 }
}
 
export default Container;