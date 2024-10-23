export default function AppReducer(state, action){
    switch(action.type){
        case "edit":
            return state;
        case "rate":{
            const newRating = (state.i === 0)
            ? 10
            : (state.i === 1)
                ? 0
                : (state.rating + 1) % 11;

            return {
                ...state,
                rating: newRating,
                i: state.i < 2 ? state.i + 1 : state.i
            };
        }
        case "delete":
            return null;
    }
}