export const stateKey = "dumb_key"

export const SCOPES = "user-library-read user-read-private user-read-email user-top-read"

export const __IS_DEV__ = process.env.NODE_ENV === "development";

export const URL = __IS_DEV__ ? "http://localhost:3000/" : process.env.NEXT_PUBLIC_URL