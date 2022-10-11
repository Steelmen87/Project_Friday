import {combineReducers, createStore} from 'redux'
import {HW14Reducer} from './HW14Reducer'

const reducers = combineReducers({
    somethingAC: HW14Reducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
