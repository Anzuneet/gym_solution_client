
import React, { Component } from "react";
import PropTypes from "prop-types";
import RecordMemberScreen from "./presenter";
import NavButton from "../../components/NavButton";

 
class Container extends Component {
 static propTypes = {
  
};
 state = {
  flag : false,
  chartIndex : 1,
  image: {
    uri:null,
    base64:null
  },
  lists : [
    {
      date:"2018-04-21",
    },
    {
      date:"2018-04-22",
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
_pullDayInfo = (day) =>{
    
  if(this.dialog != null){
    this.dialog.show();
  }
}

_setDialog = (dialog)=>this.dialog = dialog;


  render() {
    const {navigate} = this.props.navigation;
    //...
    
    
   return (
     <RecordMemberScreen {...this.props} {...this.state}
     dates2 = {this.state.lists.reduce((obj, it)=>{
      obj[it.date] = {marked:true, selected:true, selectedColor:"blue"};
      return obj;
   }
   ,{})}
     navigate = {navigate}
     clickWeight = {this._clickWeight}
     clickMuscle = {this._clickMuscle}
     clickFat = {this._clickFat}
     pullDayInfo = {this._pullDayInfo}
     setDialog = {this._setDialog}
     />
   );
 }
}
 
export default Container;