import { AppProps } from 'next/app';
import './styles.css';
import { UserContext } from '@next-template-nx/utils';
import { Toaster } from 'react-hot-toast';
import { AppWrapper } from '@next-template-nx/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <UserContext.Provider value={null}>
        <Toaster />
        <Component {...pageProps} />
      </UserContext.Provider>
    </AppWrapper>
  );
}

export default CustomApp;
