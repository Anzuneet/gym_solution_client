import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions

const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";

// Action Creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}


// API Actions

function getFeed() {
  return (dispatch, getState) => {
     const { user: { token } } = getState();
     fetch(`${API_URL}/user/bodymeasurements`, {
       headers: {
            'x-gs-token':token
       }
     })
       .then(response => {
        
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setFeed(json)));
  };
}

function postTrainerImage(trainer_uid,img) {
  return (getState) => {
    const {user: {token }} = getState();
    fetch(`${API_URL}/trainers/:${trainer_uid}/images`, {
      method: "POST",
      headers: {
        "x-gs-token" : token
      },
      body: JSON.stringify({
        img: img
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


function getTrainerImages(tuid, handler) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/trainers/:${tuid}/imgaes`, {
      method: "GET",
      headers: {
           'x-gs-token':token
      }
    })
      .then(response => {
       if (response.status === 401) {
         dispatch(userActions.logOut());
       } else {
         return response.json();
       }
     })
     .then(json =>{
      handler(json)});
 };
}

function deleteTrainerImages(tuid,name) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${API_URL}/trainers/:${tuid}/imgaes/:${name}`, {
      method: "DELETE",
      headers: {
           'x-gs-token':token
      }
    })
      .then(response => {
       if (response.status === 401) {
         dispatch(userActions.logOut());
       } else {
         return response.json();
       }
     })
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

// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// Reducer Actions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// Exports

const actionCreators = {
  getFeed,
  postTrainerImage,
  getTrainerImages,
  deleteTrainerImages
};

export { actionCreators };

// Default Reducer Export

export default reducer;