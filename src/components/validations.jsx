import * as Yup from "yup";

export const loanValidate = Yup.object({
  firstname: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  gender: Yup.string().required("Required"),
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  phone_number: Yup.string()
    .max(11, "Must be 11 characters or less")
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  nok_firstname: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  nok_lastname: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  nok_relationship: Yup.string().required("Required"),
  nok_gender: Yup.string().required("Required"),
  nok_phone_number: Yup.string()
    .max(11, "Must be 11 characters or less")
    .required("Required"),
  nok_email: Yup.string()
    .email("Email is invalid")
    .required("Email is Required"),
  nok_address: Yup.string().required("Required"),
  nok_city: Yup.string().required("Required"),
  nok_state: Yup.string().required("Required"),
  // business_name: Yup.string().required("Required"),
  business_city: Yup.string().required("Required"),
  business_state: Yup.string().required("Required"),
  amount_requested: Yup.number().required(),
  amount_requested_words: Yup.string().required("Required"),
  loan_type: Yup.string().required("Required"),
  rc_number: Yup.string().required("Required"),
  working_status: Yup.string().required("Required"),
  monthly_income: Yup.string().required("Required"),
  business_address: Yup.string().required("Required"),
  duration_of_loan: Yup.string().required("Required"),
  // loan_purpose: Yup.string().required("Required"),
  referred_by: Yup.string().required("Required"),
  bvn: Yup.string().required("Required"),
  bank_name: Yup.string().required("Required"),
  bank_accountname: Yup.string().required("Required"),
  bank_accountnumber: Yup.string().required("Required"),
});

export const investorValidate = Yup.object({
  firstname: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  gender: Yup.string().required("Required"),
  investment_service: Yup.array().min(1, 'Select services to invest in'),
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  phone_number: Yup.string()
    .max(11, "Must be 11 characters or less")
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  // nok_firstname: Yup.string()
  //   .max(50, "Must be 50 characters or less")
  //   .required("Required"),
  // nok_lastname: Yup.string()
  //   .max(50, "Must be 50 characters or less")
  //   .required("Required"),
  // nok_relationship: Yup.string().required("Required"),
  // nok_gender: Yup.string().required("Required"),
  // nok_phone_number: Yup.string()
  //   .max(11, "Must be 11 characters or less")
  //   .required("Required"),
  // nok_email: Yup.string()
  //   .email("Email is invalid")
  //   .required("Email is Required"),
  // nok_address: Yup.string().required("Required"),
  // nok_city: Yup.string().required("Required"),
  // nok_state: Yup.string().required("Required"),
  business_name: Yup.string().required("Required"),
  business_sector: Yup.string().required("Required"),
  business_address: Yup.string().required("Required"),
  amount_invest: Yup.number().required(),
})