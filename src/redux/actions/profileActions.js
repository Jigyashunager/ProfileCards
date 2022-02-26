import {ActionTypes} from '../constants/action-types'


// first action
export const setProfiles = (profiles) =>  {
    return {
        type: ActionTypes.SET_PROFILES,
        payload: profiles,
    };
};

// second action
export const selectedProfile = (profile) =>  {
    return {
        type: ActionTypes.SELECTED_PROFILE,
        payload: profile,
    };
};

