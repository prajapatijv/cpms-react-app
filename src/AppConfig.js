const API_ROOT_URL = () => process.env.REACT_APP_API_URL

export const AppConfig = {
    UserApiUrl : `${API_ROOT_URL()}/users` 
} 
