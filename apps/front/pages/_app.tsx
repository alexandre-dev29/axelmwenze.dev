import { AppProps } from 'next/app';
import './styles.css';
import './generated.css';

import { UserContext } from '@next-template-nx/utils';
import { Toaster } from 'react-hot-toast';
import { AppWrapper, Layout } from '@next-template-nx/ui';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <UserContext.Provider value={null}>
        <Head>
          <script
            data-host="https://onduis.com"
            data-dnt="true"
            src="https://onduis.com/js/script.js"
            id="ZwSg9rf6GA"
            async
            defer
          ></script>
        </Head>
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </AppWrapper>
  );
}

export default CustomApp;
