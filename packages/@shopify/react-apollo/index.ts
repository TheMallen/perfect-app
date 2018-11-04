import * as React from 'react';
import {Query as ApolloQuery, QueryResult, Mutation} from 'react-apollo';
import {
  FetchPolicy,
  ErrorPolicy,
  OperationVariables,
  ApolloError,
  ApolloClient,
} from 'apollo-client';
import {DocumentNode} from 'graphql-typed';

export interface QueryProps<Data = any, Variables = OperationVariables> {
  children: (result: QueryResult<Data, Variables>) => React.ReactNode;
  fetchPolicy?: FetchPolicy;
  errorPolicy?: ErrorPolicy;
  notifyOnNetworkStatusChange?: boolean;
  pollInterval?: number;
  query: DocumentNode<Data, Variables>;
  variables?: Variables;
  ssr?: boolean;
  displayName?: string;
  skip?: boolean;
  client?: ApolloClient<Object>;
  context?: Record<string, any>;
  partialRefetch?: boolean;
  onCompleted?: (data: Data | {}) => void;
  onError?: (error: ApolloError) => void;
}

// eslint-disable-next-line react/prefer-stateless-function
class QueryTypeClass<
  Data = any,
  Variables = OperationVariables
> extends React.Component<QueryProps<Data, Variables>> {}

export const Query: typeof QueryTypeClass = ApolloQuery as any;

export {Mutation};