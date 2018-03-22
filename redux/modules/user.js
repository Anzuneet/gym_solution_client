 // Imports
 
import { API_URL, FB_APP_ID } from "../../constants";
import { AsyncStorage, Alert } from "react-native";
import { getStoredState } from "redux-persist";

 
 // Actions
 
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
// const SET_GROUPS = "SET_GROUPS";
  
 // Action Creators
  
function setLogIn(token) {
  // 토큰 값을 tokenKey 변수에 저장한다.
  initialState.tokenKey = token
   return {
     type: LOG_IN,
     token
   };
}

/*
function setAllGroups(groups) {
  // 모든 그룹목록을 groups[] 배열에 저장한다. getAllGroups()
  console.log("in setAllGroups");
  console.log(groups);
  if (groups)
  {
    console.log("setAllGroups True");
    allGroups = groups;
    console.log(allGroups);
    return allGroups;
  }
  else
  {
    console.log("setAllGroups False");
    return false;
  }
}
*/
 
function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}
 
function logOut() {
   console.log("I am in function LogOut");
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
    const { user: { token} } = getState();
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

// 맵의 마커에서 선택한 헬스장의 그룹 목록을 가져오는 함수
function getGroups(uid) {
<<<<<<< HEAD
=======
  //console.log(initialState.tokenKey)
  //console.log(uid);
>>>>>>> damezuma_filter_screen_presenter
  return (dispatch) => {
   return fetch(`${API_URL}/gyms/${uid}/groups`, { 
    method: "GET",
    headers: {
      "x-gs-token": initialState.tokenKey
    }
     })
     .then(response =>response.json() )
     .then(json=>{
      if (json.token) {
         dispatch(setGroupToken(json.token));
         return true;
       } else {
        Alert.alert(json.msg);
         return false;
       }
    })
 };
}

// 전체 헬스장의 모든 그룹목록을 가져오는 함수
function getAllGroups() {
  //console.log(initialState.tokenKey)
  //console.log(uid);

  /*
  return (dispatch) => {
   return fetch(`${API_URL}/groups`, { 
    method: "GET",
    headers: {
      "x-gs-token": initialState.tokenKey
    }
     })
     .then(response =>response.json() )
     .then(json => dispatch(setAllGroups(json.groups)));
 };
 */
/*
let res = fetch(`${API_URL}/groups`, { 
  method: "GET",
  headers: {
    "x-gs-token": initialState.tokenKey
  }
   })
let groups = res.json();
 return groups.groups;
 */
}


// 특정 반경 안 헬스장의 모든 그룹목록을 가져오는 함수

// Initial State
const initialState = {
 isLoggedIn: false,
 isTrainer : false,
 tokenKey : '',
};

allGroups:[{ 
}]
 
 // Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return applyLogIn(state, action);
    case LOG_OUT:
       return applyLogOut(state, action);
    case SET_USER:
       return applySetUser(state, action);
    case SET_NOTIFICATIONS:
      return applySetNotifications(state, action);
   // case SET_GROUPS:
    //  return applySetAllGroups(state, action);
    default:
       return state;
   }
}
 
// Reducer Functions
 
function applyLogIn(state, action) {
  const { token } = action;
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
  if(user.user.gym_uid != null)
    flag = true;
  else
    flag= false;
  return {
    ...state,
    profile: user.user,
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

/*
function applySetAllGroups(state, action) {
  const { groups } = action;
  return {
    ...state,
    allGroups : groups
  };
}
*/

// Exports

const actionCreators = {
  login,
  logOut,
  getNotifications,
  getOwnProfile,
  signup,
  getGroups,
  getToken
  // getAllGroups
};
  

function getToken() {
  return initialState.tokenKey;
}


const getModulesState ={
  getToken
};

export { actionCreators };
 // Default Reducer Export
 
export default reducer;