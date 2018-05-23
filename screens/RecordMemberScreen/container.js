
import React, { Component } from "react";
import PropTypes from "prop-types";
import RecordMemberScreen from "./presenter";
import NavButton from "../../components/NavButton";
import { ImagePicker } from 'expo';
import {Alert} from 'react-native';

 
class Container extends Component {
 static propTypes = {
  
};
 state = {
  flag : false,
  isSubmitting : false,
  chartIndex : 1,
  image: null,
  tempDate :null,
  fat: null,
  muscle: null,
  weight: null,
  comment : null,
  lists : [
    {
      date:"2018-05-02",
    },
  ],
  Weight: [
  ],
  Muscle: [
  ]
  ,
  Fat: [
  ],
 };

 componentDidMount(){
  const {guid} = this.props.navigation.state.params;
  const {uid} = this.props.navigation.state.params.member;
  const {trainerGetBodyMeasurements} = this.props
  trainerGetBodyMeasurements(guid,uid,(json)=>{
    this.setState({
      bodyMeasurements: json
    }, () => this._bodyMeasurementsParsing(this.state.bodyMeasurements))
 })
}
 _clickWeight = () =>{
  this.setState({chartIndex: 1});
};
_clickMuscle = () =>{
  this.setState({chartIndex: 2});
};
_clickFat = () =>{
  this.setState({chartIndex: 3});
};

_pickImage = async () => {
  const {navigate} = this.props.navigation;
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [3,4],
    base64 :true,
    mediaTypes : ImagePicker.MediaTypeOptions.Images
  });
  
  if (!result.cancelled) {
    
    this.setState({ image:{uri:result.uri, base64:result.base64 },flag : true  });
  }
};

_takeImage = async ()=>{
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [3,4],
    base64 :true,
    mediaTypes : ImagePicker.MediaTypeOptions.Images
  });
  
  if (!result.cancelled) {
    
    this.setState({ image:{uri:result.uri, base64:result.base64 },flag : true   });
  }
}
  _changeWeight = (value) =>{
    this.setState({weight:value})
  }
  _changeMuscle = (value) =>{
    this.setState({muscle:value})
  }
  _changeFat = (value) =>{
    this.setState({fat:value})
  }
  _changeComment = (value) => {
    this.setState({comment: value})
  }
_pullDayInfo = (day) =>{
    
  this.setState({tempDate : day})
   const {bodyMeasurements} = this.state;
   
   bodyMeasurements.map(it => {
     if(it.upload_datetime.split(" ")[0] == day.dateString)
        {
          this.setState({
            comment : it.comment,
            weight : it.weight.toString(),
            muscle : it.muscle.toString(),
            fat : it.fat.toString(),
            image : it.image})
        }
   }
  )
  if(this.dialog != null){
    this.dialog.show();
  }
}

_dateCasting(dext){
  if(dext){
    var sText = dext.split(" ");
    var ssText = sText[0].split("-");
    var outText = (`${ssText[1]}/${ssText[2]}`);
    return outText;
  }else
    return ;

}

_bodyMeasurementsParsing(bodyMeasurements){
  let front_ten_items = bodyMeasurements.slice(0,10);
  let fats = front_ten_items.map(it=>{
    return {
      x: this._dateCasting(it.upload_datetime),
      y: it.fat
    };
  });
  let muscle = front_ten_items.map(it=>{

    return {
      x: this._dateCasting(it.upload_datetime),
      y: it.muscle
    };
  });
  let weight = front_ten_items.map(it=>{


    return {
      x: this._dateCasting(it.upload_datetime),
      y: it.weight
    };
  });
  this.setState({
    ...this.state, Muscle:muscle, Weight:weight, Fat:fats
  });
}
_submit = async () =>{

  const { image, weight, muscle, fat ,isSubmitting, flag , comment, tempDate } = this.state;
  const { trainerPostBodymeasurements } = this.props;
  const { guid} = this.props.navigation.state.params;
  const tuid = this.props.navigation.state.params.member.uid;

  
  //group id --> guid
  //trainee id --> tuid
  //필요

  

  let img_type;
  let img;
  if(!flag){
    img = null;
  }else{
    img_type = image.uri.split(".");
    img_type = img_type[img_type.length - 1];
    img = {data : image.base64, type : img_type}
  }

  if(!isSubmitting){
    if(weight  && muscle && fat && comment && tempDate){
      if(this.dialog != null)//화면 끄기
        this.dialog.dismiss();
      this.setState({
        isSubmitting : true
      });
      await trainerPostBodymeasurements(guid,tuid,tempDate.dateString,img,fat,weight,muscle);
      this.setState({
        isSubmitting : false
      });
    }else{
      Alert.alert('인바디 값 코멘트값이 설정되어있어야 합니다!');
    }
  }
}

_cancel = () =>{
  this.setState({tempDate:null,fat:null,muscle:null,comment:null,weight:null})
  if(this.dialog != null)
    this.dialog.dismiss();
}
_setDialog = (dialog)=>this.dialog = dialog;


  render() {

    const {navigate} = this.props.navigation;

    const {bodyMeasurements} = this.state;

    var dates2 = new Array();

    if(bodyMeasurements){
      bodyMeasurements.map(it => {
        dates2[it.upload_datetime.split(" ")[0]] = {marked:true, selected:true, selectedColor:"#rgba(253,139,27,1)"}
      })
    }


   return (
    
     <RecordMemberScreen {...this.props} {...this.state}
     dates2 = {dates2}
     navigate = {navigate}
     clickWeight = {this._clickWeight}
     clickMuscle = {this._clickMuscle}
     clickFat = {this._clickFat}
     pullDayInfo = {this._pullDayInfo}
     setDialog = {this._setDialog}
     changeWeight = {this._changeWeight}
     changeMuscle = {this._changeMuscle}
     changeFat = {this._changeFat}
     changeComment ={this._changeComment}
     submit = {this._submit}
     cancel = {this._cancel}
     pickImage = {this._pickImage}
     takeImage = {this._takeImage}
     />
   );
 }
}
 
export default Container;