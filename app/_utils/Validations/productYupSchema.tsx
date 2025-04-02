import * as yup from "yup";

export const productYupSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Min. length 3"),
  description: yup
    .string()
    .required("Description is required")
    .min(3, "Min. length 3"),
  image: yup
    .string()
    .matches(/https?:\/\//, "Image URL is invalid")
    .required("Image is required"),
  price: yup
    .number()
    .required("Price is required")
    .min(0, "Price must be a positive number"),
  category: yup.string().required("Category is required"),
});
