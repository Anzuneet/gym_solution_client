import { StyleSheet, Dimensions } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'transparent'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    TextStyle:
    {
        textAlign: 'center',
        color: '#000'
    
    },
    profileContainer : {
        flex :2,
        backgroundColor : "white",
        alignItems : 'center',
    },
    profileImageContainer : {
        paddingTop : 20,
        paddingHorizontal :10,
        alignItems : 'center',
    },
    commentContainer : {
        marginHorizontal :10,
        marginTop : 10,
        backgroundColor : "#eeeeee",
        height : height*0.3,
        width : width*0.6,
        paddingHorizontal :10,
        paddingVertical :10,
        borderRadius : 20,
    },
    gymNameContainer : {
        marginTop : 20,
        width: width*0.3,
        height : height*0.08,
        backgroundColor: "rgba(253,139,27,0.5)",
        alignItems: 'center',
        justifyContent : 'center',
        borderRadius: 10,
    },
    tUpdateBContainer : {
        marginTop : 20,
        width: 130,
        height : 50,
        backgroundColor: "rgba(253,139,27,0.5)",
        alignItems: 'center',
        justifyContent : 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth:3,
        borderColor: "rgba(253,139,27,0.5)"

    }, 
    tUpdateBText : {
        fontSize :30,
        color: "white",
    },
    textInput : {
        width : width,
        backgroundColor : "yellow"
    },
    bodyProfileContainer : {
        flexDirection : 'row',
        flex :1,
    },
});