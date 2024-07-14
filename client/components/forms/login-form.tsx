"use client";

import { LoginFormValues } from "@/constants/form-values";
import { LoginFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import CustomFormField, { FormFieldType } from "../custom-form-field";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Form } from "../ui/form";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      ...LoginFormValues,
    },
  });

  const onSubmit = (values: z.infer<typeof LoginFormValidation>) => {
    console.log(values);
  };
  return (
    <Card className="w-[400px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Please enter your username and password to login.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email..."
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              label="Password"
              name="password"
              placeholder="Enter your password..."
              iconSrc="/assets/icons/password.svg"
              iconAlt="password"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
