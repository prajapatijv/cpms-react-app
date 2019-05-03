export const Env = {
    Production: 'production',
    Development: 'development'
}

const _contextMappings = {
    'user' : { 'apiContext': 'users', 'actionContext': { 'singular': 'user', 'SINGULAR': 'USER', 'plural': 'users', 'PLURAL': 'USERS' } },
    'item' : { 'apiContext': 'items', 'actionContext': { 'singular': 'item', 'SINGULAR': 'ITEM', 'plural': 'items', 'PLURAL': 'ITEMS' } },
}

export const Config = {
    ENV: process.env.NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL,
    mappings : _contextMappings
}
