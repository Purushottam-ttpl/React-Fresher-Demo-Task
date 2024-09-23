export const FETCH_USER_DATA= "FETCH_USER_DATA";
export const FETCH_USER_DATA_SUCCESS= "FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_FAILURE= "FETCH_USER_DATA_FAILURE";

export const fetchUserData=(url)=>({
    type: FETCH_USER_DATA,
    payload: {url},
});

export const fetchUserDataSuccess=(data)=>({
    type: FETCH_USER_DATA_SUCCESS,
    payload: data,
});

export const fetchUserDataFailure=(error)=>({
    type: FETCH_USER_DATA_FAILURE,
    payload: error,
});

