const iniState = {
    Users: [
        {id: 2, name: 'bang',},
        {id: 1, name: 'bang',}
    ]
}
const rootReducer = (state = iniState, action) => {
    switch (action.type){
        case'Delete_User' :{
            console.log('run into delete',action)
        }
        break;
    }
    return state;
}
export default rootReducer;