const initState = {

}
export type initStateType = typeof initState
const SET_SOMETHING = "SET_SOMETHING"

export const HW14Reducer = (state: initStateType = initState, action: somethingACType): initStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export const somethingAC = (something: boolean) => {
    return {type: something, something} as const
}
export type somethingACType = ReturnType<typeof somethingAC>