export const AppConfig = {
    ENV: process.env.NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL
}

export const Env = {
    Production: 'production',
    Development: 'development'
}

export const GetContext = (context) => _contextMapping.filter(c => c.context === context)[0]


const _contextMapping = [
    { 'context': 'user', 'apiContext': 'users', 'actionContext': {'singular':'user', 'SINGULAR':'USER','plural':'users','PLURAL':'USERS'}},
    { 'context': 'item', 'apiContext': 'items', 'actionContext': {'singular':'item', 'SINGULAR':'ITEM','plural':'items','PLURAL':'ITEMS'}},
]

