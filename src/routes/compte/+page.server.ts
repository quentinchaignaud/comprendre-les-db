import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { LayoutServerLoad } from '../$types';

export const load = (({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/auth/connexion')
    }
}) satisfies LayoutServerLoad

export const actions = {
    updateEmail: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').requestEmailChange(body.email);
        } catch(err : any) {
            throw error(err.status, err.message);
        }

        return {
            success: true
        }
    }
}  satisfies Actions;
