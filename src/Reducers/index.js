const initState= {
    contacts: [],
    name: 'Biplav'
}

const reducer = (state=initState, action) => {
    let {type, payload} = action;

    switch (type) {
        case 'POST_CONTACT':
            return{
                ...state,
                contacts: [...state.contacts, payload]
            }
        default:
            return state;
    }
}

export default reducer