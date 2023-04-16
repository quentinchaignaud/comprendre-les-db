import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { LayoutServerLoad } from '../$types';

export const load = (({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/auth/connexion');
	}
}) satisfies LayoutServerLoad;

export const actions = {
	updateUsername: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			const { username } = await locals.pb
				.collection('users')
				.update(locals.user.id, { username: body.username });
			locals.user.username = username;
			return {
				success: true
			};
		} catch (err: any) {
			throw error(err.status, err.message);
		}
	},
	updateEmail: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').requestEmailChange(body.email);
			return {
				success: true
			};
		} catch (err: any) {
			throw error(err.status, err.message);
		}
	},
	updatePassword: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, body);
			locals.pb.authStore.clear()
		} catch (err: any) {
			console.log('Error ', err);
			throw error(err.status, err.message);
		}

        throw redirect(303, '/auth/connexion')
	}
} satisfies Actions;
