import { combineReducers } from "redux";
import { chuckNorrisReducer } from "./chuck-norris.reducer";

export interface IChuckNorrisState {
    joke: string,
    processingNewJoke: boolean
}

export interface IState {
    chuckNorris: IChuckNorrisState
}

export const state = combineReducers<IState>({
    chuckNorris: chuckNorrisReducer
})