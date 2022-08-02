import { onError } from '@apollo/client/link/error';
import { ErrorTypeGraphQl } from '@next-template-nx/data';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';

export const ErrorLinkHandler = (
  setErrorType: (Request: ErrorTypeGraphQl) => void,
  setIsOpen: (stat: boolean) => void,
  setMessagesError: (messages: Array<string>) => void
) =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      setMessagesError(graphQLErrors.map((a) => a.message));
      setErrorType(ErrorTypeGraphQl.Request);
      setIsOpen(true);
    }
    if (networkError) {
      setErrorType(ErrorTypeGraphQl.Network);
      setMessagesError([
        'Connection Issue Please check Your internet connection and try again',
      ]);
      setIsOpen(true);
    }
  });

export const authLinkApp = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('accessToken');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_ACCESS_TOKEN}`,
    },
  };
});

export const httpLinkApp = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});
