import jwt from 'jsonwebtoken';
import { getServerSession } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from './auth/[...nextauth]';

const CKBOX_ENVIRONMENT_ID = process.env.CKBOX_ENVIRONMENT_ID;
const CKBOX_ACCESS_KEY = process.env.CKBOX_ACCESS_KEY;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions);

    if (session && CKBOX_ACCESS_KEY && CKBOX_ENVIRONMENT_ID) {
        const user = session.user;

        const payload = {
            aud: CKBOX_ENVIRONMENT_ID,
            sub: user.id,
            auth: {
                ckbox: {
                    role: user.role
                }
            }
        };

        res.send(
            jwt.sign(payload, CKBOX_ACCESS_KEY, {
                algorithm: 'HS256',
                expiresIn: '1h'
            })
        );
    } else {
        res.status(401);
    }

    res.end();
}
