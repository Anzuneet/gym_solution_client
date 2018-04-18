 // Imports
 
import { API_URL, FB_APP_ID } from "../../constants";
import { AsyncStorage, Alert } from "react-native";
import { getStoredState } from "redux-persist";

 
 // Actions
 
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
const SET_GROUP = "SET_GROUP";
const SET_GYM = "SET_GYM";

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

function setUser(object) {
  return {
    type: SET_USER,
    profile : object.user,
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

function setGroups(groups) {
  return {
    type: SET_GROUP,
    groups
  };
}

function setGyms(gyms) {
  return { type: SET_GYM, gyms };
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

function enrollGroup(trainingInfo) {
  return (dispatch, getState) => {
    const { user: { token} } = getState();
    fetch(`${API_URL}/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-gs-token" : token
      },
      body: JSON.stringify({
        capacity:trainingInfo.capacity,
        comment:trainingInfo.comment,
        title:trainingInfo.title,
        period:trainingInfo.period,
        time:trainingInfo.time,
        charge:trainingInfo.charge,
        daysOfWeek:trainingInfo.days,
        start_date:trainingInfo.start_date,
      })
    })
    .then(response => {
        if(response == 403)
          dispatch(logOut());
      else 
        return response.json();
      })
      .then(json => {
        if (json.msg) {
         Alert.alert(json.msg);
          return true;
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
    fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-gs-token" : token
      }
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

function getTrainers(uid, handler ) {
  return (dispatch, getState) => {
    const { user: { token} } = getState();
    fetch(`${API_URL}/gyms/${uid}/trainers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-gs-token" : token
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch(logOut());
        } else {
          return response.json();
        }})
      .then(json =>handler(json));
  };
}

function postBodyMeasurements(Img,Fat,Weight,Muscle) {
  const img = Img;
  const fat = Fat;
  const weight = Weight;
  const muscle = Muscle;

  return (dispatch,getState) => {
    const { user: { token} } = getState();
    fetch(`${API_URL}/user/bodymeasurements`, { 
    method: "post",
    headers: {
      "x-gs-token": token,
    },
    body: JSON.stringify({
      img : img,
      fat : fat,
      weight : weight,
      muscle : muscle,
    })
    })
    .then(response => response.json())
    .then(json => {
      if (json.msg) {
       Alert.alert(json.msg);
       return true;
      }
    })
  };
}
function getGyms() {
  return (dispatch, getState) => {
     const { user: { token } } = getState();
     fetch(`${API_URL}/gyms`, {
       method : "GET",
       headers: {
            "x-gs-token": token
       }
     })
       .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setGyms(json)));
  };
}

function getGroups() {
  return (dispatch, getState) => {
     const { user: { token } } = getState();
     fetch(`${API_URL}/groups`, {
       headers: {
            "x-gs-token" : token
       }
     })
       .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setGroups(json)));
      
  };
}

function getOwnGroups(handler) {
  return (dispatch, getState) => {
     const { user: { token } } = getState();
     fetch(`${API_URL}/user/groups`, {
       headers: {
            "x-gs-token" : token
       }
     })
       .then(response => {
        if (response.status != 200) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json =>{
        handler(json)});
      
  };
}

function getOwnTrainerGroups(handler) {
  return (dispatch, getState) => {
     const { user: { token } } = getState();
     fetch(`${API_URL}/trainer/groups`, {
       headers: {
            "x-gs-token" : token
       }
     })
       .then(response => {
        if (response.status != 200) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json =>{
        handler(json)});
      
  };
}


// 특정 반경 안 헬스장의 모든 그룹목록을 가져오는 함수

// Initial State
const initialState = {
 isLoggedIn: false,
 isTrainer : null,
 profile : null,
};

 
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
    case SET_GROUP:
      return applySetGroups(state, action);
    case SET_GYM:
      return applySetGyms(state, action);
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
    isTrainer:null,
    token: "",
    profile: null,
  };
}
 
function applySetUser(state, action) {
  const { profile  } = action;
  if(profile.gym_uid != null)
    flag = true;
  else
    flag= false;
  return {
    ...state,
    isTrainer:flag,
    profile,
  };
}
 
function applySetNotifications(state, action) {
  const { notifications } = action;
  return {
    ...state,
    notifications
  };
}

function applySetGroups(state, action) {
  const { groups } = action;
  return {
    ...state,
    groups
  };
}

function applySetGyms(state, action) {
  const { gyms } = action;

  return {
    ...state,
    gyms
  };
}

// Exports

const actionCreators = {
  login,
  logOut,
  getNotifications,
  getOwnProfile,
  signup,
  postBodyMeasurements,
  enrollGroup,
  getGyms,
  getGroups,
  getTrainers,
  getOwnGroups,
  getOwnTrainerGroups

};
  

export { actionCreators };
 // Default Reducer Export
 
export default reducer;


