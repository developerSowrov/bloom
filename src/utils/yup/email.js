import * as Yup from "yup";

/**
 * Schema for validating an email address.
//  * @type {Yup.ObjectSchema<{ email: string }>}
 */
// export const emailSchema = 




export default function email() {
  return Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .min(5, "Email must be at least 5 characters")
      .max(20, "Email must be at most 20 characters")
      .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "Email must be a valid format")
      .trim()
      .required("Email is required"),
  });
}
