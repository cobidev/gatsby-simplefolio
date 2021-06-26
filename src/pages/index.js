import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="FSdXU7kWqRAdcotPgSFEQ06Y7HJYFceFR8Q_HKDdcfg"
        />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'fr'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/di4iku1b9/image/upload/v1606300951/bg2_woyskl.png"
        />
      </Helmet>
      <App />
    </>
  );
};
