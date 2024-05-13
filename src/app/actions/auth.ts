'use server'

import { FormState, SignupFormSchema } from "@/app/lib/definitions"
import { getUrqlClient } from "@/app/lib/urql";
import { SignupDocument, SignupMutation, SignupMutationVariables } from "../../../graphQL/operations";
import { redirect } from "next/navigation";
import 'server-only'
import { cookies } from 'next/headers'
 

import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
 
export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...
  console.log({
    email: validatedFields.data.email,
    name: validatedFields.data.name,
    password: validatedFields.data.password,
  });
  const log = await getAllFilms({
    email: validatedFields.data.email,
    fullName: validatedFields.data.name,
    password: validatedFields.data.password,
  })

  console.log(log);
  if(!log.data){
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  await createSession(validatedFields.data.name)
  // 5. Redirect user
  redirect('/')
  
}

async function getAllFilms({email, fullName, password}: any) {
  const { client } = getUrqlClient();
  const result = await client.mutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    {
      signupInput: {
        email,
        fullName,
        password
      },
    }
  );
  return result;
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ userId, expiresAt })
 
  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

