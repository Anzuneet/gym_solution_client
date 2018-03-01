 // Imports
 
import { API_URL, FB_APP_ID } from "../../constants";
import { AsyncStorage, Alert } from "react-native";

 
 // Actions
 
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
  
 // Action Creators
  
function setLogIn(token) {
   return {
     type: LOG_IN,
     token
   };
}
 
function setUser(user) {
  console.log("in setUser");
  console.log(user);
  return {
    type: SET_USER,
    user
  };
}
 
function logOut() {
   return { type: LOG_OUT };
}
  
function setNotifications(notifications) {
  return {
    type: SET_NOTIFICATIONS,
    notifications
  };
}

// API Actions
function login(username, password) {
  console.log(username);
  console.log(password);
  return dispatch => {
   return fetch(`${API_URL}/token`, {
     method: "GET",
     headers: {
       "x-gs-id": username,
       "x-gs-password" : password
     }
   })
     .then(response => response.json())
     .then(json => {
       console.log(json);
       if (json.token) {
         dispatch(setLogIn(json.token));
         return true;
       } else {
        Alert.alert(json.msg);
         return false;
       }
     })

 };
}

function signup(personInfo) {
  console.log(personInfo);
  const name = personInfo.username;
  const password = personInfo.password;
  const phonenumber = personInfo.phonenumber;
  const type = personInfo.type;
  const fitness_club_idx = personInfo.fitness_club_name;
  const gender = personInfo.gender;
  const birthday = personInfo.birthday;

  return dispatch => {
   return fetch(`${API_URL}/users`, {
     method: "POST",
     headers : {
      "Content-Type": "application/json"
     },
     body: JSON.stringify({

       name : name,
       password : password,
       phonenumber : phonenumber,
       type : type,
       fitness_club_idx : fitness_club_idx,
       gender : gender,
       birthday : birthday,
     })
   })
     .then(response => response.json())
     .then(json => {
       console.log(json);
       if (json.msg) {
        Alert.alert(json.msg);
         return true;
       } else {
         return false;
       }
     })

 };
}

function facebookLogin() {
  return async dispatch => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      {
        permissions: ["public_profile", "email"]
      }
    );
    if (type === "success") {
      return fetch(`${API_URL}/users/login/facebook/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token: token
        })
      })
        .then(response => response.json())
        .then(json => {
          if (json.user && json.token) {
            dispatch(setLogIn(json.token));
            dispatch(setUser(json.user));
            return true;
          } else {
            return false;
          }
        });
    }
   };
 }

function getNotifications() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/notifications/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setNotifications(json)));
  };
}

function getOwnProfile() {
  return (dispatch, getState) => {
    const { user: { token, profile: { username } } } = getState();
    fetch(`${API_URL}/tokens/${token}/user`, {
    })
      .then(response => {
        if (response.status != 200) {
          dispatch(logOut());
        } else {
          return response.json();
        }})
      .then(json => dispatch(setUser(json)));
  };
}

// Initial State
  
const initialState = {
 isLoggedIn: false,
 isTrainer : false,

};
 
 // Reducer
 
function reducer(state = initialState, action) {
  console.log("in reducer");
  console.log(action.type);
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
       return applyLogOut(state, action);
    case SET_USER:
       return applySetUser(state, action);
    case SET_NOTIFICATIONS:
      return applySetNotifications(state, action);
    default:
       return state;
   }
}
 
// Reducer Functions
 
function applyLogIn(state, action) {
  const { token } = action;
  console.log("is in applyLogin");
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}
 
function applyLogOut(state, action) {
  AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}
 
function applySetUser(state, action) {
  const { user } = action;
  console.log(user.user.gym_uid);
  if(user.user.gym_uid)
    flag = true;
  else
    flag= false;
  return {
    ...state,
    profile: user,
    isTrainer:flag,
  };
}
 
function applySetNotifications(state, action) {
  const { notifications } = action;
  return {
    ...state,
    notifications
  };
}

// Exports

const actionCreators = {
  login,
  logOut,
  getNotifications,
  getOwnProfile,
  signup
};
  
export { actionCreators };
 // Default Reducer Export
 
export default reducer;