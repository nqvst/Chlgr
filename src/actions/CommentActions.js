import firebase from "firebase";

//Add comment
export function addComment(commentObj) {

    return (dispatch) => {
        dispatch({
            type: "ADD_COMMENT",
        })
        return firebase.database().ref('comments')
        .push(commentObj)
        .then(() => {
            dispatch({
                type: "ADD_COMMENT_SUCCESS",
            })
        })
        .catch(error => {
            dispatch({
                type: "ADD_COMMENT_ERROR",
                payload: error,
            })
        });
    }
}