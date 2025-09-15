import { z } from "zod"

export const signupSchema = z.object({
  firstName: z.string().min(2, "Enter at least 2 letters"),
  lastName: z.string().min(2, "Enter at least 2 letters"),
  countryCode: z.string().min(1, "Code required"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  terms: z.boolean().refine((val) => val === true, { message: "You must accept terms", }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords must match",
});
export type SignupFormData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  countryCode: z.string().min(1, "Code required"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
export type LoginFormData = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  })
  .refine((data) => data.password !== data.newPassword, {
    path: ["newPassword"],
    message: "New password must be different from old password",
  });
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;



export const editUserSchema = z
  .object({
    firstName: z.string().min(2, "Enter at least 2 letters"),
    lastName: z.string().min(2, "Enter at least 2 letters"),
    countryCode: z.string().min(1, "Code required"),
    phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  })