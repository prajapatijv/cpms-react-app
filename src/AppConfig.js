export const AppConfig = {
    ENV:process.env.NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL
} 

export const GetContext = (context) => _contextMapping.filter(c => c.context === context)[0]


const _contextMapping = [
    {'context':'user', 'apiContext':'users', 'actionContextPlural':'USERS', 'actionContextSingular':'USER'},
]

