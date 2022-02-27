import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { i18n } from '../../next-i18next.config';

const Home = (): JSX.Element => {
  const { t } = useTranslation('page-index');

  return (
    <section className='section'>
      <h1>
        {t('TEXT_TITLE')}
      </h1>
      <p>
        {t('TEXT_P1')}{' '}
        <a
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer'>
          Vercel
        </a>
        .
      </p>
      <p>
        {t('TEXT_P2')}
      </p>
    </section>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, ['common', 'page-index']))
    }
  };
}
