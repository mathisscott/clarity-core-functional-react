import React, { useState } from "react";
import useForm from "./useForm";
import { Values } from "./types";
import { CdsInput } from "@clr/react/input";
import { CdsPassword } from "@clr/react/password";
import { CdsButton } from "@clr/react/button";
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from "@clr/react/modal";

const Form = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalReady, setModalReady] = useState(false);

  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    login
  );

  function login() {
    console.log(values);
  }

  function showModal() {
    setModalReady(true);
    const timer = setTimeout(() => {
      setModalOpen(true);
      clearTimeout(timer);
    }, 25);
  }

  function hideModal() {
    const timer = setTimeout(() => {
      setModalOpen(false);
      clearTimeout(timer);
    }, 25);
  }

  // function modalAnimationDone(evt: any) {
  //   const motionMsg = (evt as CustomEvent).detail;
  //   if (motionMsg === 'cds-modal-enter-reverse animation done') {
  //     setModalReady(false);
  //   }
  // }

  return (
    <div>
      <div
        className="form-container"
        cds-layout="vertical align:horizontal-stretch p-x:lg p-y:xl"
      >
        <h1 cds-text="heading center">Ohai</h1>
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
        <div cds-layout="vertical p-t:md align:horizontal-stretch">
          <CdsButton block={true} action="outline" onClick={showModal}>
            Open Modal
          </CdsButton>
        </div>
    </div>
    {modalReady ? (
      <div>
        <CdsModal
          hidden={!modalOpen}
          onCloseChange={hideModal}
        >
          <CdsModalHeader>
            <h3 cds-text="title" cds-first-focus="">
              My Modal
            </h3>
          </CdsModalHeader>
          <CdsModalContent>
            <div cds-layout="vertical gap:md p-y:xs">
              <p cds-text="body">Lorem Ipsum</p>
            </div>
          </CdsModalContent>
          <CdsModalActions>
            <div cds-layout="horizontal gap:sm align:right">
              <CdsButton onClick={hideModal} action="outline">
                Cancel
              </CdsButton>
              <CdsButton onClick={hideModal}>Ok</CdsButton>
            </div>
          </CdsModalActions>
        </CdsModal>
      </div>
    ) : (
      <br />
    )};
    </div>
  );
};

export default Form;
