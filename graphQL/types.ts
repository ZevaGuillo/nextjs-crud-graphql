export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type CreateItemInput = {
  name: Scalars['String']['input'];
  quantityUnits?: InputMaybe<Scalars['String']['input']>;
};

export type CreateListInput = {
  name: Scalars['String']['input'];
};

export type CreateListItemInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  itemId: Scalars['ID']['input'];
  listId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID']['output'];
  listItem: Array<ListItem>;
  name: Scalars['String']['output'];
  quantityUnits?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type List = {
  __typename?: 'List';
  id: Scalars['ID']['output'];
  items: Array<ListItem>;
  name: Scalars['String']['output'];
  totalItems: Scalars['Float']['output'];
  user: User;
};


export type ListItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ListItem = {
  __typename?: 'ListItem';
  completed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  item: Item;
  list: List;
  quantity: Scalars['Float']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  blockUser: User;
  createItem: Item;
  createList: List;
  createListItem: ListItem;
  /** Ejecuta la construcción de la base de datos */
  executeSeed: Scalars['Boolean']['output'];
  login: AuthResponse;
  removeItem: Item;
  removeList: List;
  signup: AuthResponse;
  updateItem: Item;
  updateList: List;
  updateListItem: ListItem;
  updateUser: User;
};


export type MutationBlockUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};


export type MutationCreateListArgs = {
  createListInput: CreateListInput;
};


export type MutationCreateListItemArgs = {
  createListItemInput: CreateListItemInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemInput;
};


export type MutationUpdateListArgs = {
  updateListInput: UpdateListInput;
};


export type MutationUpdateListItemArgs = {
  updateListItemInput: UpdateListItemInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  item: Item;
  items: Array<Item>;
  list: List;
  listItem: ListItem;
  lists: Array<List>;
  revalite: AuthResponse;
  user: User;
  users: Array<User>;
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  roles?: InputMaybe<Array<ValidRoles>>;
};

export type SignupInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateItemInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  quantityUnits?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateListInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateListItemInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  itemId?: InputMaybe<Scalars['ID']['input']>;
  listId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<ValidRoles>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  itemCount: Scalars['Int']['output'];
  items: Array<Item>;
  lastUpdateBy?: Maybe<User>;
  listCount: Scalars['Int']['output'];
  lists: Array<List>;
  roles: Array<Scalars['String']['output']>;
};


export type UserItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type UserListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Ullamco labore ut ut adipisicing commodo sit elit ullamco eiusmod ut mollit sint. */
export enum ValidRoles {
  Admin = 'admin',
  SuperUser = 'superUser',
  User = 'user'
}
