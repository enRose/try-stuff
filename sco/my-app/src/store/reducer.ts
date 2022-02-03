import produce from 'immer'
import GlobalState from '../shared/type/GlobalState'
import { logGif, Gifs } from '../shared/util/logger'
import { Action, SUBMIT, CONGRATS  } from './action'

export const Reducer = produce((draft: GlobalState, action: Action) => {
    logGif(draft, 'reducer', Gifs.LongHairCow)

    switch (action.type) {
        case CONGRATS:
            draft.congrats = action.congrats
            break

        case SUBMIT:
            draft.submitError = action.submitError
            break
        default:
            return draft
    }
})