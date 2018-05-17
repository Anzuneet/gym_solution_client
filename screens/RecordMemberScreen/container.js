
import React, { Component } from "react";
import PropTypes from "prop-types";
import RecordMemberScreen from "./presenter";
import NavButton from "../../components/NavButton";

 
class Container extends Component {
 static propTypes = {
  
};
 state = {
  flag : false,
  isSubmitting : flag,
  chartIndex : 1,
  image: {
    uri:null,
    base64:null
  },
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
    {
      x:"04-06",
      y: 85
    },
    {
      x:"04-14",
      y: 83
    },
    {
      x:"04-15",
      y: 83
    },
    {
      x:"04-17",
      y: 81
    },
    {
      x:"04-18",
      y: 80
    },
    {
      x:"04-28",
      y: 80
    },
    {
      x:"05-02",
      y: 79
    },
  ],
  Muscle: [
    {
      x:"04-06",
      y: 20
    },
    {
      x:"04-14",
      y: 23
    },
    {
      x:"04-15",
      y: 24
    },
    {
      x:"04-17",
      y: 24
    },
    {
      x:"04-18",
      y: 24
    },
    {
      x:"04-28",
      y: 27
    },
    {
      x:"05-02",
      y: 28
    },
  ]
  ,
  Fat: [
    {
      x:"04-06",
      y: 30
    },
    {
      x:"04-14",
      y: 29
    },
    {
      x:"04-15",
      y: 27
    },
    {
      x:"04-17",
      y: 26
    },
    {
      x:"04-18",
      y: 25
    },
    {
      x:"04-28",
      y: 22
    },
    {
      x:"05-02",
      y: 23
    },
  ]
  
 };

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
  if(this.dialog != null){
    this.dialog.show();
  }
}

_submit = async () =>{

  const { image, weight, muscle, fat ,isSubmitting,flag , comment, tempDate } = this.state;
  const { trainerPostBodymeasurements } = this.props;
  //group id --> guid
  //trainer id --> tuid
  //필요

  console.log(guid);
  console.log(tuid);
  console.log(tempDate);
  console.log(image);
  console.log(fat);
  console.log(weight);
  console.log(muscle);

  if(this.dialog != null)//화면 끄기
    this.dialog.dismiss();

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
    if(weight  && muscle && fat && comment){
      this.setState({
        isSubmitting : true
      });
      await trainerPostBodymeasurements(guid,tuid,tempDate,img,fat,weight,muscle);
      this.setState({
        isSubmitting : false
      });
    }else{
      Alert.alert('All fields are required!');
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
    
   return (
     <RecordMemberScreen {...this.props} {...this.state}
     dates2 = {this.state.lists.reduce((obj, it)=>{
      obj[it.date] = {marked:true, selected:true, selectedColor:"#rgba(253,139,27,1)"};
      return obj;
   }
   ,{})}
     navigate = {navigate}
     clickWeight = {this._clickWeight}
     clickMuscle = {this._clickMuscle}
     clickFat = {this._clickFat}
     pullDayInfo = {this._pullDayInfo}
     setDialog = {this._setDialog}
     changeWeight = {this._changeWeight}
     changeMuscle = {this._changeMuscle}
     changeFat = {this._changeFat}
     submit = {this._submit}
     cancel = {this._cancel}
     pickImage = {this._pickImage}
     takeImage = {this._takeImage}
     />
   );
 }
}
 
export default Container;