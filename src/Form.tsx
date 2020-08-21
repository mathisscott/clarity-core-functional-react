import React from "react";
import useForm from "./useForm";
import { Values } from "./types";
import { CdsInput } from "@clr/react/input";
import { CdsPassword } from "@clr/react/password";
import { CdsButton } from "@clr/react/button";

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    login
  );

  function login() {
    console.log(values);
  }

  return (
    <form
      onSubmit={handleSubmit}
      cds-layout="vertical gap:lg p-t:xl align:horizontal-stretch"
    >
      <CdsInput layout="vertical">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="name@email.com"
          name="email"
          onChange={handleChange}
          value={(values as Values).email}
          required
        />
      </CdsInput>
      <CdsPassword layout="vertical">
        <label>Password</label>
        <input
          placeholder="abcd1234"
          type="password"
          name="password"
          onChange={handleChange}
          value={(values as Values).password}
          required
        />
      </CdsPassword>
      <CdsButton block={true} onClick={login}>
        Submit
      </CdsButton>
    </form>
  );
};

export default Form;
