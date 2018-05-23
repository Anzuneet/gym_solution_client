
import React, { Component } from "react";
import PropTypes from "prop-types";
import TrainerListItem from "./presenter";
 
class Container extends Component {


  state = {
    AVG : NaN
  }
  componentDidMount() {

    const tuid = this.props.data.uid;

    this.props.getReview(tuid,(json)=>{
      let avgRating = json.reviews.reduce((n,it) => n+ it.grade, 0)/ json.reviews.length
      this.setState({AVG: avgRating})
    });
  }



  _onPress = () => {
    this.props.navigate("showTrainerInfo",{trainer : this.props.data});
  };

  
  render() {
    var star = 0;
    if(this.state.AVG >0){
      star = this.state.AVG;
    }
    return (
      <TrainerListItem
      trainerInfo = {this.props.data}
      onPress = {this._onPress}
      star ={star}
      />
    );
  }
} 
export default Container;