import z from "zod";

export const userPasswordRequirementes = z 
.string()
.min(8)
.max(30)
.regex(/[A-Z]/, { message: ('validation.invalid_password_uppercase') })
.regex(/[0-9]/, {message: ('validation.invalid_password_number')})
.regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/, {message: ('validation.invalid_password_special_char')})













