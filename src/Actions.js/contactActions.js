export const postContact = body => {
    return dispatch => {
        dispatch({type: 'POST_CONTACT', payload: body})
    }
}

// can be done 
// export const postContact = body => dispatch => {
//     dispatch({})
// }

// export function postContact(body){
//     return function(dispatch){
//         dispatch({type: 'POST_CONTACT', payload: body})
//     }
// }