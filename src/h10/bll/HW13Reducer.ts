const initState = {

}
export type initStateType = typeof initState
const SET_LOADING = "SET_LOADING"

export const HW13Reducer = (state: initStateType = initState, action: loadingACType): initStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: SET_LOADING, loading} as const
}
export type loadingACType = ReturnType<typeof loadingAC>