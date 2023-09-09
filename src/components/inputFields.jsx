import React, { useState } from "react";
import { useField, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Select from "react-select";
import { BsCloudArrowUp } from "react-icons/bs";
import { useDropzone } from "react-dropzone";

export const styles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    height: "50px",
    outline: isFocused ? "3px solid rgba(102, 198, 236, 0.897)" : "none",
    border: isFocused ? "none" : undefined,
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    fontWeight: isSelected ? "bold" : "normal",
    color: "black",
    backgroundColor: isSelected ? "rgba(102, 198, 236, 0.897)" : "white",
    fontSize: "14px",
  }),
};

export const TextField = ({
  label,
  inputType = "text",
  placeholder,
  required = true,
  ...props
}) => {
  const [field, meta] = useField(props);
  const { extraLabel } = props;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={field.name}
        className="inline mb-1.5 text-umcolor-tertiary md:text-sm"
      >
        {required && <span style={{ color: "red" }}>*</span>} {label}{" "}
        <span className="hidden text-xs opacity-50 md:inline text-umcolor-tertiary">
          {extraLabel}{" "}
        </span>
      </label>
      <input
        className={` px-3 m text-sm rounded-md border-[#ced4da] py-3
        border focus:outline-none ${meta.error && "outline-red-600"}`}
        placeholder={`   ${placeholder}`}
        type={inputType}
        {...field}
        {...props}
      />
      <div style={{ color: "red" }} className="text-xs md:text-tiny">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export const CustomSelect = ({
  onChange,
  error,
  required,
  label,
  options,
  value,
  touched,
}) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div className="input-margin">
      <label className="md:text-sm">
        {" "}
        {required && <span style={{ color: "red" }}>*</span>} {label}
      </label>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
        styles={styles}
      />
      {
        touched && (
          <div style={{ color: "red" }} className="text-xs md:text-tiny">
            {error}
          </div>
        )
      }
    </div>
  );
};

export const TextArea = ({ label, placeholder, ...props }) => {
  const [field] = useField(props);
  return (
    <div class="flex flex-wrap input-margin">
      <label htmlFor={field.name} className="md:text-sm">
        {label}
      </label>
      <textarea
        className="block w-full px-4 pt-4 mb-3 leading-relaxed tracking-wide rounded-md appearance-none resize-none focus:outline-none autoexpand h-1/4 "
        id="message"
        style={{ height: "82px", border: "1px solid #D9D9D9" }}
        {...field}
        {...props}
        type="text"
        placeholder={placeholder}
      ></textarea>
      <div style={{ color: "red" }} className="text-xs md:text-tiny">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export const Input = ({
  placeholder = "",
  type = "text",
  name = "",
  value,
  onChange,
  required,
}) => {
  return (
    <input
      type={type}
      className="py-2.5 px-6 outline-none w-full
            border border-[#dbdbdb] rounded focus:outline-none"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export const UploadComponent = (props) => {
  const { setFieldValue, name, validate } = props;
  const [field, meta, form] = useField(props);
  const [imgName, setImgName] = useState([]);
  // const [imgTest, setImgTest] = useState([])

  const dropItem = (accept) => {
    setFieldValue(name, accept);
    // setFieldValue(name, URL.createObjectURL(accept));
    form.setTouched(true);
    setImgName(accept);
  };

  const onDrop = React.useCallback((acceptedFiles) => {
    // acceptedFiles.map((file, index) => {
    //   const reader = new FileReader();
    //   reader.onload = function (e) {
    //     setImgTest((prevState) => [
    //       ...prevState,
    //       {id:index, src: e.target.result},
    //     ])
    //   }
    //   reader.readAsBinaryString(file);
    //   return file;
    // })
    //  setImgTest({
    //    preview: URL.createObjectURL(acceptedFiles)
    //  })
    // setImgTest(Object.assign(acceptedFiles, {
    //   preview: URL.createObjectURL(acceptedFiles)
    // }))
    // setImgTest(acceptedFiles)

    //  setImgTest({
    //    preview: URL.createObjectURL(acceptedFiles)
    //  })

    dropItem(acceptedFiles);
    setImgName(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 3145728,
    accept: "image/*",
  });
  // console.log("err>", validate)
  // console.log("newer", imgTest)
  const imageItem = imgName[0] === undefined ? [] : imgName[0].path;
  // console.log("drop stuff", imageItem)
  return (
    <div
      {...getRootProps({
        className:
          " dropzone flex items-center justify-end w-full gap-10 p-2 mt-2 border-2 border-gray-200 rounded bg-gray-50 md:border md:border-gray-300",
      })}
    >
      <input
        {...getInputProps()}
        accept="image/png, image/jpeg, application/pdf"
      />
      <div className="flex flex-col text-sm md:w-full md:items-center">
        <BsCloudArrowUp className="m-auto text-gray-600 cloud" />
        <span className="text-sm text-center md:text-tiny text-umcolor-primary uploadlabel">
          {" "}
          {imageItem.length === 0 ? (
            <p
              className={`${isDragActive && "text-umcolor-tertiary font-bold"}`}
            >
              {" "}
              <span className="md:hidden">Drag and drop or </span>browse a file
            </p>
          ) : (
            <p>{imageItem} </p>
          )}
        </span>
      </div>
      <div class="flex items-center justify-center bg-grey-lighter">
        <label
          class={`w-36 md:w-20 md:h-9 md:justify-center h-16 flex flex-col items-center px-4 py-6 bg-umcolor-primary text-umcolor-secondary rounded-lg shadow-lg tracking-wide opacity-50 uppercase border border-blue cursor-pointer ${
            validate && "opacity-100"
          } `}
        >
          <span class="md:text-tiny leading-normal text-sm">Upload</span>
        </label>
      </div>
    </div>
  );
};
