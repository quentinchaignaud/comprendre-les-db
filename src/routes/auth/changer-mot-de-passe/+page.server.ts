import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    resetPassword: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').requestPasswordReset(body.email)
            return {
                success: true
            }
        } catch(err) {
            throw error(500, 'Something went wrong')
        }
    }
}  satisfies Actions;