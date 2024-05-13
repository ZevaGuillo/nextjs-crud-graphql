import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SignupMutationVariables = Types.Exact<{
  signupInput: Types.SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', email: string } } };

export const SignupDocument = gql`
    mutation Signup($signupInput: SignupInput!) {
  signup(signupInput: $signupInput) {
    user {
      email
    }
    token
  }
}
    `;