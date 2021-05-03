
const initialState = {
    searchQuery: ''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_SEARCH_INPUT":
            return { searchQuery: action.payload };

        default:
            return state;
    }
};
