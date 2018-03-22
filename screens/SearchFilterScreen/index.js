import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

export default connect()(Container);

/*
import React from "react";
import {View, Text }from "react-native";

const SearchFilterScreen = props =><Text>필터</Text>;

export default SearchFilterScreen;
*/