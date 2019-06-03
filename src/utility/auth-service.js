import { GetCookie, SetCookie, RemoveCookie } from './cookie'

const THISUSERNAME = 'THISUSERNAME'
const AUTHTOKEN ='AUTHTOKEN_'

export const GetAuth = () => {
    const thisUser = GetCookie(THISUSERNAME)
    return GetCookie(`${AUTHTOKEN}${thisUser}`)
}

export const SetAuth = (authResponse) => {
    const userName = authResponse.userName.toUpperCase()
    SetCookie(THISUSERNAME, userName)
    SetCookie(`${AUTHTOKEN}${userName}`, authResponse.authToken)
}

export const RemoveAuth = (userName) => {
    RemoveCookie(`${AUTHTOKEN}${userName.toUpperCase()}`)
}