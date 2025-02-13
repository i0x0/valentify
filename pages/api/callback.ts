import { CALLBACK, stateKey } from "@/lib/const";
import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { deleteCookie, getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import qs from "qs"
import axios, { AxiosError } from "axios"
import safeAwait from "safe-await";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const code = req.query.code || null
	const state = req.query.state || null
	const storedState = await getCookie(stateKey, { res, req })
	if (state === null || state !== storedState) {
		res.redirect('/#' +
			qs.stringify({
				error: 'state_mismatch'
			})
		);
	} else {
		deleteCookie(stateKey, { res, req })
		const [err, data] = await safeAwait(axios.post<AccessToken>(`https://accounts.spotify.com/api/token`, {
			code: code,
			redirect_uri: CALLBACK,
			grant_type: 'authorization_code'
		}, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': `Basic ${Buffer.from(`${process.env.SPOT_ID}:${process.env.SPOT_SECRET}`).toString('base64')}`,
			}
		}))
		if (err as AxiosError) {
			// @ts-expect-error bruh
			console.log(err?.response?.data)
			return console.log('something with wrong communicating with spotify', err)
		}
		console.log(data?.data)
		await res.redirect(307, "/generate")
		const sdk = SpotifyApi.withAccessToken(process.env.SPOT_ID as unknown as string, data?.data as AccessToken, {})


	}
	console.log(req.body)
}