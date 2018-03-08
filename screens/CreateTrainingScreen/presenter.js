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
      Button,
    } from "react-native";
import PopupDialog from 'react-native-popup-dialog';
import CalenderPicker from '../../components/CalenderPicker';

const { width, height } = Dimensions.get("window");

const CreateTrainingScreen = props => (
    <View>
        <Button
            title="Show Dialog"
            onPress={() => {
            this.popupDialog.show();
            }}
        />
        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
            <CalenderPicker 
                Date = {props.start_date}
                changeDate = {props.changeStartDate}
            />
            <Text> {props.start_date} </Text>

        </PopupDialog>
    </View>
);


const styles = StyleSheet.create({
    container: {
    flex: 1
    },
});
    
export default CreateTrainingScreen;
