"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { signup } from "@/app/actions/auth";
import { useSignupMutation } from "../../../graphQL/queries.hooks";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const [res, executeMutation] = useSignupMutation();

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    executeMutation({
      signupInput:{...values}
    })
  }

  return (
    <Form {...form}>
      <form
        color="black"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-mg"
                    placeholder="exampple@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button
          type="submit"
          className="rounded-xl">
          Login
        </Button>
      </form>
    </Form>
  );
}
