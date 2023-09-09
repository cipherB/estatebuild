import React, { useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import states from "../data/states.json";
import emailjs from "@emailjs/browser";
import axios from 'axios';
import {
  TextField,
  CustomSelect,
  TextArea,
  UploadComponent,
} from "../components/inputFields";
import { loanValidate } from "../components/validations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Loan = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const env = import.meta.env;

  //title options
  const titleOptions = [
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
    { value: "miss", label: "Miss." },
    { value: "dr", label: "Dr." },
    { value: "prof", label: "Prof." },
    { value: "chief", label: "Chief." },
  ];

  // month options
  // const monthOptions = [
  //   { value: "january", label: "January" },
  //   { value: "february", label: "February" },
  //   { value: "march", label: "March" },
  //   { value: "april", label: "April" },
  //   { value: "may", label: "May" },
  //   { value: "june", label: "June" },
  //   { value: "july", label: "July" },
  //   { value: "august", label: "August" },
  //   { value: "september", label: "September" },
  //   { value: "october", label: "October" },
  //   { value: "november", label: "November" },
  //   { value: "december", label: "December" },
  // ];

  // gender options
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  // state options
  const stateOptions = states.map((item) => {
    return {
      value: item.name,
      label: item.name,
    };
  });

  // loan options
  const durationOptions = [
    { value: "1 month", label: "1 Month" },
    { value: "2 month", label: "2 Month" },
    { value: "3 month", label: "3 Month" },
    { value: "4 month", label: "4 Month" },
    { value: "5 month", label: "5 Month" },
    { value: "6 month", label: "6 Month" },
  ];

  // loan type
  const loanTypeOptions = [
    {
      value: "Business Loans",
      label: "Business Loans"
    },
    {
      value: "Personal Loans",
      label: "Personal Loans"
    },
    {
      value: "Import/Export Facilitation",
      label: "Import/Export Facilitation"
    },
    {
      value: "Purchase Order Financing",
      label: "Purchase Order Financing"
    },
    {
      value: "Contract Financing",
      label: "Contract Financing"
    },
    {
      value: "Foreign Exchange Management",
      label: "Foreign Exchange Management"
    },
  ];

  const onSubmit = (values) => {
    setLoading(true);
    emailjs
      .send(
        env.VITE_SERVICE_ID,
        env.VITE_TEMPLATE_ID_LOAN,
        values,
        env.VITE_EMAILJS_API_ID
      )
      .then(() => {
        setLoading(false);
        navigate("/");
        toast.success('Form Data Sent', {position: 'top-center'});
      })
      .catch(()=> {
        setLoading(false);
        toast.error('Unable to send', {position: 'top-center'});
      });
  };
  return (
    <div className="flex justify-center">
      <div className="px-6 md:px-[8%] py-[8%] max-w-[1600px] w-full">
        <p className="mb-2">Please fill in the details carefully.</p>
        <Formik
          initialValues={{
            title: "",
            firstname: "",
            middlename: "",
            lastname: "",
            gender: "",
            email: "",
            phone_number: "",
            address: "",
            city: "",
            state: "",
            nok_title: "",
            nok_firstname: "",
            nok_middlename: "",
            nok_lastname: "",
            nok_relationship: "",
            nok_gender: "",
            nok_phone_number: "",
            nok_email: "",
            nok_address: "",
            nok_city: "",
            nok_state: "",
            business_name: "",
            loan_type: "",
            rc_number: "",
            working_status: "",
            monthly_income: "",
            business_address: "",
            business_city: "",
            business_state: "",
            amount_requested: 0,
            amount_requested_words: "",
            duration_of_loan: "",
            loan_purpose: "",
            referred_by: "",
            bvn: "",
            bank_name: "",
            bank_accountname: "",
            bank_accountnumber: "",
            userId: [],
            utility_bill: [],
            bank_statement: [],
            passport_photo: [],
          }}
          validationSchema={loanValidate}
          validateOnBlur
          onSubmit={(values) => onSubmit(values)}
        >
          {(formik) => {console.log("form",formik);return(
            <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <div
                className="flex items-center w-full gap-3 p-4 md:text-xl text-palette-two"
              >
                <div className="text-white flex justify-center items-center w-[36px] h-[36px] rounded-full bg-palette-two md:text-2xl md:w-[56px] md:h-[56px]" >
                  1
                </div>
                Personal Information
              </div>
              {/* Personal Information Form Section */}
              <section className="border rounded md:p-3">
                <div className="grid grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <CustomSelect
                    onChange={(value) =>{
                      formik.setFieldValue("title", value.value)
                      formik.setFieldTouched("title",true)
                    }}
                    error={formik.errors.title}
                    value={formik.values.title}
                    label="Title (optional)"
                    options={titleOptions}
                  />
                  <TextField
                    label="First Name"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <TextField
                    label="Middle Name (Optional)"
                    name="middlename"
                    type="text"
                    placeholder="Middle Name"
                    required={false}
                  />
                  <TextField
                    label="Last Name"
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <div>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      inputType="email"
                      placeholder="Please enter a valid email address"
                      required
                    />
                  </div>
                  <CustomSelect
                    onChange={(value) =>{
                      formik.setFieldValue("gender", value.value);
                      formik.setFieldTouched("gender", true)
                    }}
                    error={formik.errors.gender}
                    value={formik.values.gender}
                    touched={formik.touched?.gender}
                    label="Gender"
                    options={genderOptions}
                    required={true}
                  />
                </div>
                <div className="py-3">
                  <TextField
                    label="Phone Number"
                    name="phone_number"
                    type="tel"
                    inputType="tel"
                    placeholder="E.g 8112345678"
                    required
                  />
                </div>
                <div className="py-3">
                  <TextField
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Include street name"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <TextField
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City/Town"
                    required
                  />
                  <CustomSelect
                    onChange={(value) =>{
                      formik.setFieldValue("state", value.value);
                      formik.setFieldValue("state", true)
                    }}
                    error={formik.errors.state}
                    touched={formik.touched?.state}
                    value={formik.values.state}
                    label="State"
                    options={stateOptions}
                    required={true}
                  />
                </div>
                <div className="border rounded">
                  <div className="p-3 bg-gray-200 border-b rounded">
                    <p className="m-0">Next Of Kin</p>
                  </div>
                  <div className="p-3">
                    <div className="grid grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                      <CustomSelect
                        onChange={(value) =>{
                          formik.setFieldValue("nok_title", value.value);
                          formik.setFieldTouched("nok_title",true);
                        }}
                        touched={formik.touched?.nok_title}
                        error={formik.errors.nok_title}
                        value={formik.values.nok_title}
                        label="Title (optional)"
                        options={titleOptions}
                      />
                      <TextField
                        label="First Name"
                        name="nok_firstname"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                      <TextField
                        label="Middle Name (Optional)"
                        name="nok_middlename"
                        type="text"
                        placeholder="Middle Name"
                        required={false}
                      />
                      <TextField
                        label="Last Name"
                        name="nok_lastname"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                      <TextField
                        label="Relationship"
                        name="nok_relationship"
                        type="text"
                        placeholder="Example: Brother, Mother etc."
                        required
                      />
                      <CustomSelect
                        onChange={(value) =>{
                          formik.setFieldValue("nok_gender", value.value);
                          formik.setFieldTouched("nok_gender",true);
                        }}
                        touched={formik.touched?.nok_gender}
                        error={formik.errors.nok_gender}
                        value={formik.values.nok_gender}
                        label="Gender"
                        options={genderOptions}
                        required={true}
                      />
                    </div>
                    <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                      <TextField
                        label="Phone Number"
                        name="nok_phone_number"
                        type="tel"
                        inputType="tel"
                        placeholder="E.g 8112345678"
                        required
                      />
                      <TextField
                        label="Email"
                        name="nok_email"
                        type="email"
                        inputType="email"
                        placeholder="Please enter a valid email address"
                        required
                      />
                    </div>
                    <div className="grid items-center grid-cols-1 py-3 gap-y-3 gap-x-6 md:grid-cols-3">
                      <TextField
                        label="Address"
                        name="nok_address"
                        type="text"
                        placeholder="Include street name"
                        required
                      />
                      <TextField
                        label="City"
                        name="nok_city"
                        type="text"
                        placeholder="City/Town"
                        required
                      />
                      <CustomSelect
                        onChange={(value) =>{
                          formik.setFieldValue("nok_state", value.value);
                          formik.setFieldTouched("nok_state",true);
                        }}
                        error={formik.errors.nok_state}
                        touched={formik.touched?.nok_state}
                        value={formik.values.nok_state}
                        label="State"
                        options={stateOptions}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="flex items-center w-full gap-3 p-4 md:text-xl text-palette-two"
              >
                <div className="text-white flex justify-center items-center w-[36px] h-[36px] rounded-full bg-palette-two md:text-2xl md:w-[56px] md:h-[56px]" >
                  2
                </div>
                Loan Information
              </div>
              {/* Loan Information Form Section */}
              <section className="border rounded md:p-3">
                <div className="py-3">
                  <TextField
                    label="Business Name"
                    name="business_name"
                    type="text"
                    placeholder="Company's Name/ Employer's Name"
                    required={false}
                  />
                </div>
                <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <CustomSelect
                    onChange={(value) =>{
                      formik.setFieldValue("loan_type", value.value);
                      formik.setFieldTouched("loan_type",true);
                    }}
                    error={formik.errors.loan_type}
                    touched={formik.touched?.loan_type}
                    value={formik.values.loan_type}
                    label="Loan Type"
                    options={loanTypeOptions}
                    required={true}
                  />
                  <TextField
                    label="RC Number"
                    name="rc_number"
                    type="text"
                    placeholder="RC100000"
                  />
                </div>
                <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <TextField
                    label="Working Status"
                    name="working_status"
                    type="text"
                    placeholder="What do you do at the moment"
                  />
                  <TextField
                    label="Monthly Income"
                    name="monthly_income"
                    type="text"
                    placeholder="E.g 1000000"
                    required
                  />
                </div>
                <div className="grid items-center grid-cols-1 py-3 gap-y-3 gap-x-6 md:grid-cols-3">
                  <TextField
                    label="Address"
                    name="business_address"
                    type="text"
                    placeholder="Include street name"
                    required
                  />
                  <TextField
                    label="City"
                    name="business_city"
                    type="text"
                    placeholder="City/Town"
                    required
                  />
                  <CustomSelect
                    onChange={(value) =>{
                      formik.setFieldValue("business_state", value.value);
                      formik.setFieldTouched("business_state",true);
                    }}
                    error={formik.errors.business_state}
                    touched={formik.touched?.business_state}
                    value={formik.values.business_state}
                    label="State"
                    options={stateOptions}
                    required={true}
                  />
                </div>
                <div className="grid grid-cols-1 py-3 gap-x-6 md:grid-cols-3 gap-y-3">
                  <TextField
                    label="Amount Required"
                    name="amount_requested"
                    type="number"
                    inputType="number"
                    placeholder="E.g 10000000"
                    required
                  />
                  <TextField
                    label="Amount Requested in Words"
                    name="amount_requested_words"
                    type="text"
                    placeholder="E.g Ten Million Naira"
                    required
                  />
                  <div>
                    <CustomSelect
                      onChange={(value) =>{
                        formik.setFieldValue("duration_of_loan", value.value);
                        formik.setFieldTouched("duration_of_loan",true)
                      }}
                      error={formik.errors.duration_of_loan}
                      touched={formik.touched?.duration_of_loan}
                      value={formik.values.duration_of_loan}
                      label="Duration of Loan"
                      options={durationOptions}
                      required={true}
                    />
                    <small
                      htmlFor="Duration of Loan"
                      className="text-gray-400"
                    >
                      Select the tenor to complete loan
                    </small>
                  </div>
                </div>
                <div className="py-3">
                  <TextArea
                    placeholder="Please provide a brief; Why do you need this loan?"
                    label="Loan Purpose"
                    name="loan_purpose"
                  />
                </div>
                <div className="py-3">
                  <TextField
                    label="Referred by "
                    name="referred_by"
                    type="text"
                    placeholder="E.g John Smith"
                    required
                  />
                </div>
              </section>
              <div
                className="flex items-center w-full gap-3 p-4 md:text-xl text-palette-two"
              >
                <div className="text-white flex justify-center items-center w-[36px] h-[36px] rounded-full bg-palette-two md:text-2xl md:w-[56px] md:h-[56px]" >
                  3
                </div>
                Bank Information
              </div>
              {/* Bank Information Form Section */}
              <section className="border rounded md:p-3">
                <div className="py-3">
                  <TextField
                    label="BVN"
                    name="bvn"
                    type="text"
                    placeholder="Please provide your Bank Verification Number"
                    required
                  />
                </div>
                <div className="py-3">
                  <TextField
                    label="Bank Account Name"
                    name="bank_accountname"
                    type="text"
                    placeholder="E.g Joe Smith"
                    required
                  />
                </div>
                <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                  <TextField
                    label="Bank Name"
                    name="bank_name"
                    type="text"
                    placeholder="E.g First Bank"
                  />
                  <TextField
                    label="Bank Account Number"
                    name="bank_accountnumber"
                    type="text"
                    placeholder="Enter Bank Account Number"
                    required
                  />
                </div>
              </section>
              {/* <div className="border rounded">
                <div className="p-3 bg-gray-200 border-b rounded">
                  <p className="m-0">Document Uploads</p>
                </div>
                <div className="p-3">
                  <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                    <div>
                      <label htmlFor={"userId"} className="md:text-sm">
                        <span style={{ color: "red" }}>*</span> {"Upload ID"}
                      </label>
                      <UploadComponent
                        name="userId"
                        setFieldValue={formik.setFieldValue}
                        validate={formik.touched.userId}
                        onBlur={formik.handleBlur}
                      />
                      <small htmlFor="userId" className="text-gray-400">
                        File must not be more than 5mb
                      </small>
                    </div>
                    <div>
                      <label htmlFor={"utility_bill"} className="md:text-sm">
                        {"Upload Utility Bill"}
                      </label>
                      <UploadComponent
                        name="utility_bill"
                        setFieldValue={formik.setFieldValue}
                        validate={formik.touched.utility_bill}
                        onBlur={formik.handleBlur}
                      />
                      <small htmlFor="utility_bill" className="text-gray-400">
                        File must not be more than 5mb
                      </small>
                    </div>
                  </div>
                  <div className="grid items-center grid-cols-1 py-3 gap-x-6 md:grid-cols-2 gap-y-3">
                    <div>
                      <label htmlFor={"bank_statement"} className="md:text-sm">
                        {"Upload Bank Statement"}
                      </label>
                      <UploadComponent
                        name="bank_statement"
                        setFieldValue={formik.setFieldValue}
                        validate={formik.touched.bank_statement}
                        onBlur={formik.handleBlur}
                      />
                      <small htmlFor="bank_statement" className="text-gray-400">
                        File must not be more than 5mb
                      </small>
                    </div>
                    <div>
                      <label htmlFor={"passport_photo"} className="md:text-sm">
                        {"Upload Passport Photo"}
                      </label>
                      <UploadComponent
                        name="passport_photo"
                        setFieldValue={formik.setFieldValue}
                        validate={formik.touched.passport_photo}
                        onBlur={formik.handleBlur}
                      />
                      <small htmlFor="passport_photo" className="text-gray-400">
                        File must not be more than 5mb
                      </small>
                    </div>
                  </div>
                </div>
              </div> */}
              <button
                className="w-full mt-2 font-bold text-white border-none rounded bg-palette-two"
                type="submit"
              >
                {
                  loading ? (
                    <div role="status">
                      <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : "Submit Form"
                }
              </button>
            </Form>
          )}}
        </Formik>
      </div>
    </div>
  );
};

export default Loan;
