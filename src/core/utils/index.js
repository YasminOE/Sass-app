const production = process.env.NODE_ENV === 'production'

export const SITE_URL = production ? "https://paperboy-newsletters.vercel.app/" : "http://localhost:3000";
// export const SITE_URL = production ? "prod-url" : "http://localhost:3000";