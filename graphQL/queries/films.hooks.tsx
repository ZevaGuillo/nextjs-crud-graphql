import * as Types from '../../types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function usePersonQuery(options?: Omit<Urql.UseQueryArgs<Operations.PersonQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.PersonQuery, Operations.PersonQueryVariables>({ query: Operations.PersonDocument, ...options });
};

export function useFilmsQuery(options?: Omit<Urql.UseQueryArgs<Operations.FilmsQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.FilmsQuery, Operations.FilmsQueryVariables>({ query: Operations.FilmsDocument, ...options });
};