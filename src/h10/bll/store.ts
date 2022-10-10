import {combineReducers, createStore} from 'redux'
import {HW13Reducer} from './HW13Reducer'

const reducers = combineReducers({
    loading: HW13Reducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
