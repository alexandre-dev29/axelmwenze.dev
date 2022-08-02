import { AppProps } from 'next/app';
import './styles.css';
import './generated.css';

import { UserContext } from '@next-template-nx/utils';
import { Toaster } from 'react-hot-toast';
import { AppWrapper, Layout } from '@next-template-nx/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <UserContext.Provider value={null}>
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </AppWrapper>
  );
}

export default CustomApp;
