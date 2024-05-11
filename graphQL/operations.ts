import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PersonQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PersonQuery = { __typename?: 'Root', allPeople?: { __typename?: 'PeopleConnection', people?: Array<{ __typename?: 'Person', id: string, name?: string | null } | null> | null } | null };

export type FilmsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type FilmsQuery = { __typename?: 'Root', allFilms?: { __typename?: 'FilmsConnection', films?: Array<{ __typename?: 'Film', id: string, title?: string | null } | null> | null } | null };


export const PersonDocument = gql`
    query Person {
  allPeople {
    people {
      id
      name
    }
  }
}
    `;
export const FilmsDocument = gql`
    query Films {
  allFilms {
    films {
      id
      title
    }
  }
}
    `;