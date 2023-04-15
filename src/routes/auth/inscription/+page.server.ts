import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())
        const username = body.name.toString().split(" ").join("")
        try {
            await locals.pb.collection('users').create({ username, ...body })
            await locals.pb.collection('users').requestVerification(body.email)
        } catch (err) {
            console.log('Error ', err);
            throw error(500, 'Something went wrong')
        }

        throw redirect(303, '/')
    }
} satisfies Actions;