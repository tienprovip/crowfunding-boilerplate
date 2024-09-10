import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import { Link } from "react-router-dom";
import { ButtonGoogle } from "components/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormGroup from "components/common/FormGroup";
import Label from "components/label/Label";
import Input from "components/input/Input";
import { IconEyeToggle } from "components/icons";
import useToggleValues from "hooks/useToggleValue";
import Button from "components/button/Button";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignIn = (values) => {
    console.log(values);
  };

  const { value: showPassword, handleToggleValue: handleToggleShowPassword } =
    useToggleValues();

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal font-medium text-center md:text-sm text-text3 md:mb-8">
        Dont have an account?
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="text"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleToggleShowPassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="mb-5 text-right">
          <span className="text-sm font-medium text-right text-primary">
            Forgot password
          </span>
        </div>
        <Button className="w-full bg-primary" type="submit">
          Sign-in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
