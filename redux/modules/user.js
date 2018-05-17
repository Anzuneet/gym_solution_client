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
        c
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



function joinTraining(guid) {

  const guid = guid;
  return (getState) => {
    const {user: {token }} = getState();
    fetch(`${API_URL}/user/groups/:${guid}`, {
      headers: {
        "x-gs-token" : token
      }
    })
    .then(response => {
      console.log("??");
      console.log(response)
      response.json()})
    .then(json => {
      if (json.msg) {
       Alert.alert(json.msg);
        return true;
      } else {
        return false;
      }
    })
  }
  
}

function postReview(trainer_uid,grade,comments) {

  const trainer_uid = trainer_uid;
  const grade = grade;
  const comments = comments;

  return (getState) => {
    const {user: {token }} = getState();
    fetch(`${API_URL}/trainers/:${trainer_uid}/reviews`, {
      method: "POST",
      headers: {
        "x-gs-token" : token
      },
      body: JSON.stringify({
        grade : grade,
        comments : comments,
      })
    })
    .then(response => {
      console.log(response);
      response.json()})
    .then(json => {
      if (json.msg) {
       Alert.alert(json.msg);
        return true;
      } else {
        return false;
      }
    })
  } 
}


function updateProfileImage(value){
  const value = value
  return (getState) => {
    const {user:{token}} = getState();
    fetch(`${API_URL}/trainer/:profileImage`, {
      method: "PUT",
      headers: {
        "x-gs-token" : token
      },
      body: JSON.stringify({
        profileImage: value
      })
    })
    .then(response => {
      console.log(response);
      response.json()})
    .then(json =>{
      if(json.msg){
        Alert.alert(json.msg);
        return true;
      }else
        return false;
    })
  }
}

function updateProfileComment(value){
  const value = value;
  return (getState) => {
    const {user:{token}} = getState();

    fetch(`${API_URL}/trainer/:self_introduction_text`, {
      method: "PUT",
      headers: {
        "x-gs-token" : token
      },
      body: JSON.stringify({
        self_introduction_text: value
      })
    })
    .then(response => {
      console.log(response);
      response.json()})
    .then(json =>{
      if(json.msg){
        Alert.alert(json.msg);
        return true;
      }else
        return false;
    })
  }
}

function trainerPostBodymeasurements(guid,tuid,date,Img,Fat,Weight,Muscle) {
  const guid = guid;
  const tuid = tuid;
  const date = date
  const img = Img;
  const fat = Fat;
  const weight = Weight;
  const muscle = Muscle;

  return (dispatch,getState) => {
    const { user: { token} } = getState();
    fetch(`${API_URL}/groups/${guid}/users/${tuid}/bodymeasurements`, { 
    method: "POST",
    headers: {
      "x-gs-token": token,
    },
    body: JSON.stringify({
      img : img,
      fat : fat,
      weight : weight,
      muscle : muscle,
      date: date,
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




// Initial State
const initialState = {
 isLoggedIn: false,
 isTrainer : null,
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
    gyms: null,
    groups: null,
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
  joinTraining,
  postReview,
  updateProfileImage,
  updateProfileComment,
  trainerPostBodymeasurements,

};
  

export { actionCreators };
 // Default Reducer Export
 
export default reducer;


