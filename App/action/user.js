import Api from '../utils/Api';
import { USER_DETAILS } from './type';

export function getUserDetails(params) {

    return async (dispatch) => {
        try {

            let userData = await Api.GET('get_user_list', params, { 'Token': 'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc' })
            // dispatch({ type: USER_DETAILS, payload: userData.data })
            return userData;
        } catch (e) {
            console.log(e);
        }
    }
}

export async function addUser(params) {

    try {

        let response = await Api.POSTFORMDATA('add_user', params, { 'Token': 'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc' })
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}


export async function updateUser(params) {

    try {

        let response = await Api.PUT('edit_user_details', params, { 'Token': 'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc' })
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

export async function deleteUser(params) {

    try {

        let response = await Api.DELETE('delete_user', params, { 'Token': 'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc' })
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}
