// libraries
import React from 'react';
// components
// import { SEO } from 'components/SEO';
import { Content404 } from 'components/Content404';
import { GlobalStyles } from 'components/UI/GlobalStyles';
import { GlobalGridVars } from 'components/UI/Grid';
import { Layout } from 'components/Layout';

const NotFoundPage = () => (
    <Layout>
        <GlobalStyles />
        <GlobalGridVars />
        <Content404 />
    </Layout>
);

export default NotFoundPage;

// export const Head = () => {
//     const seoData = {
//         title: 'Página no encontrada - Plazo.es',
//         metaRobotsNofollow: 'follow',
//         metaRobotsNoindex: 'index',
//     };
//     return <SEO data={seoData} />;
// };
