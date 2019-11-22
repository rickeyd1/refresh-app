import { IChuckNorrisState } from '.';
import { chuckNorrisTypes } from '../actions/chuck-norris.actions';

const initialState: IChuckNorrisState = {
    joke: `Chuck Norris doesn't save his programs, his computer is too afraid to forget them`,
    processingNewJoke: false
}

export const chuckNorrisReducer = (state = initialState, action:any) => {

    switch (action.type){
        case chuckNorrisTypes.JOKE_UPDATE:
            return {
                ...state,
                joke: action.payload.joke,
                processingNewJoke: false
            }
        case chuckNorrisTypes.PROCESSING_NEW_JOKE:
            return {
                ...state,
                processingNewJoke: true
            }
        default:
            break;
    }

    return state;
}