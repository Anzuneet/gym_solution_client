
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
_pullDayInfo = (day) =>{
    
  if(this.dialog != null){
    this.dialog.show();
  }
}

_setDialog = (dialog)=>this.dialog = dialog;


  render() {
    const {navigate} = this.props.navigation;
    //...
    console.log(this.props);
    
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
     />
   );
 }
}
 
export default Container;