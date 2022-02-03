import { Action } from './action'
import GlobalState from '../shared/type/GlobalState'

export const initialState: GlobalState = {
    sayMyName: 'Scott Ogilvie',
    congrats: 'You are one lamport richer!',
    dispatch: (() => null) as React.Dispatch<Action>
}