export type Action = { type: string, payload: {message: string, type:string, isVisible: boolean, color?: string, values?:any} }

export const activateAlert = (message: {message: string, type:string, isVisible: boolean, color?: string, values?:any}): Action => ({
  type: "SHOW_ALERT",
  payload: message
})