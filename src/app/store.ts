import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pokeReducer from '../features/pokeSlice'
import pokeCardReducer from '../features/pokeCardSlice'

export const store = configureStore({
    reducer: {
        pokeReducer,
        pokeCardReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
