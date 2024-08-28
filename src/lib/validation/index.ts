import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name must be atleast 2 charactors' }),
    username: z.string().min(2, { message: 'Username must be atleast 2 charactors' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be atleast 8 charactors' }),

})