import { Action } from '../../store/action'

type GlobalState = {
    sayMyName?: string
    congrats?: string
    submitError?: any
    dispatch: React.Dispatch<Action>
}

export default GlobalState
