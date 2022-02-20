import React from "react";
import { useLoginStore, useRegisterStore } from "../../store/store";
import RegisterForm from "./loginRegister/Register";
import { LoginForm } from "./loginRegister/Login";


export default function LoginRegister() {
  const isLoginForm = useLoginStore((state) => state.isLoginForm);
  const isRegisterForm = useRegisterStore((state) => state.isRegisterForm);
  return <>
    <LoginForm isLoginForm={isLoginForm} />
    <RegisterForm isRegisterForm={isRegisterForm} />
  </>;
}