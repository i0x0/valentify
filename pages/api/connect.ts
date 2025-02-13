import { SCOPES, stateKey, URL } from '@/lib/const';
import qs from "qs"
import type { NextApiRequest, NextApiResponse } from 'next'
import c from "node:crypto"
import { setCookie } from 'cookies-next';

const generateRandomString = (length: number) => {
	return c
		.randomBytes(60)
		.toString('hex')
		.slice(0, length);
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const state = generateRandomString(16)
	await setCookie(stateKey, state, { res, req })
	//req.cookies.set(stateKey, state)
	res.redirect("https://accounts.spotify.com/authorize?" + qs.stringify({
		response_type: 'code',
		client_id: process.env.SPOT_ID,
		scope: SCOPES,
		redirect_uri: URL + '/api/callback',
		state: state
	}))
}