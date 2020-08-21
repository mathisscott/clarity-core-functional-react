import { Values } from "./types";
import { useState, FormEvent, ChangeEvent } from "react";

const useForm = (initialValues: Values, callback: any) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
