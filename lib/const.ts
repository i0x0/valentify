import { Scopes } from "@spotify/web-api-ts-sdk"

export const stateKey = "dumb_key"

export const SCOPES = "user-library-read user-read-private user-read-email user-top-read"

export const __IS_DEV__ = process.env.NODE_ENV === "development";

export const CALLBACK = __IS_DEV__ ? "http://localhost:3000/api/callback" : ""