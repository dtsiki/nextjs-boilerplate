import React, { ReactElement } from 'react';
import Button from 'src/components/common/Button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { i18n } from '../../../next-i18next.config';

const Page = (): ReactElement => {
  const { t } = useTranslation('page-page');

  const onButtonClick = (): void => {
    console.log('Yay!')
  };

  return (
    <>
      <section className='section'>
        <h1>
          {t('PAGE.TEXT_TITLE')}
        </h1>
        <p>
          {t('PAGE.TEXT_P')}
        </p>
      </section>
      <section className='section'>
        <h2>
          {t('COMPONENT.TEXT_TITLE')}
        </h2>
        <p>
          {t('COMPONENT.TEXT_P')}
        </p>
        <Button onClick={() => onButtonClick()}>
          <span>💜</span>
        </Button>
      </section>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? i18n.defaultLocale, ['common', 'page-page']))
    }
  };
}
