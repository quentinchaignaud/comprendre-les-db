import { z } from 'zod';

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Une adresse mail est requise' })
		.email({ message: `L'adresse mail doit être valide.` }),
	password: z.string({ required_error: 'Un mot de passe est requis' })
});
