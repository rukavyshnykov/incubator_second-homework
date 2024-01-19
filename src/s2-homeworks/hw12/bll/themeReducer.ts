const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): { themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            console.log('check')
            return {
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id })

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number
}
