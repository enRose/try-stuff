export const CONGRATS = 'CONGRATS'
export const SUBMIT = 'SUBMIT'

export type Action =
    | { type: typeof CONGRATS; congrats?: string }
    | { type: typeof SUBMIT; submitError?: any }