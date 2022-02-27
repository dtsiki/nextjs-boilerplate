import React, { ReactElement } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from 'src/components/layout/Layout';
import { appWithTranslation, useTranslation } from 'next-i18next';

import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>
          {t('HEAD.TEXT_TITLE')}
        </title>
        <meta
          name='description'
          content={t('HEAD.TEXT_DESCRIPTION')} />
        <meta
          name='keywords'
          content={t('HEAD.TEXT_KEYWORDS')} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
