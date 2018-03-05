import React from "react";
import PropTypes from 'prop-types';
import {
      View,
      Text,
      Image,
      StyleSheet,
      Dimensions,
      TouchableOpacity,
      TextInput,
      ActivityIndicator,
      ListView,
    } from "react-native";
import { Ionicons } from "@expo/vector-icons";
    

const { width, height } = Dimensions.get("window");

const TrainingManagementScreen = props => (
    <ListView
        dataSource={props.trainingGroups}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
);

TrainingManagementScreen.propTypes = {
    trainingGroup: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    container: {
    flex: 1
    },
});
    
export default TrainingManagementScreen;