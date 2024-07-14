"use client";

import { LoginFormValues } from "@/constants/form-values";
import { LoginFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import ButtonSubmit from "../button-submit";
import CustomFormField, { FormFieldType } from "../custom-form-field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Form } from "../ui/form";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      ...LoginFormValues,
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormValidation>) => {
    try {
      setIsLoading(true);
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (response?.ok) {
        router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } finally {
      setIsLoading(false);
    }
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
              isLoading={isLoading}
            />
            <CustomFormField
              fieldType={FormFieldType.PASSWORD_INPUT}
              control={form.control}
              label="Password"
              name="password"
              placeholder="Enter your password..."
              iconSrc="/assets/icons/password.svg"
              iconAlt="password"
              isLoading={isLoading}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <ButtonSubmit
              isLoading={isLoading}
              type="submit"
              className="w-full"
            >
              Login
            </ButtonSubmit>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
