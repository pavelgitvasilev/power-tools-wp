// libraries
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({
    data: {
        title: seoTitle,
        metaDesc: seoDesc,
        canonical: seoCanonical,
        metaRobotsNofollow,
        metaRobotsNoindex,
    },
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );
    const hostname = typeof window !== 'undefined' ? window.location.hostname : null;
    const isNoIndex = [
        'plazo-es.frm-qa.idfaws.com',
        'qa-delivery-solva-es-release.moneyman.ru',
    ].includes(hostname);
    let headTitle = seoTitle || `${site.siteMetadata.title} - Plazo`;
    const description = seoDesc || site.siteMetadata.description;
    let canonical = seoCanonical;
    let indexMetatag = '';

    if (!canonical && typeof window !== 'undefined') {
        canonical = window.location.origin + window.location.pathname;
    }

    if (isNoIndex) {
        indexMetatag = <meta name="robots" content="noindex, nofollow" />;
    } else if (metaRobotsNoindex !== 'index' || metaRobotsNofollow !== 'follow') {
        indexMetatag = <meta name="robots" content={`${metaRobotsNoindex}, ${metaRobotsNofollow}`} />;
    } else {
        indexMetatag = null;
    }

    return (
        <>
            <title>{headTitle}</title>
            {indexMetatag}
            {description ? <meta name="description" content={description} /> : null}
            <link rel="canonical" href={canonical} />
            <meta property="og:title" content={headTitle} />
            <meta property="og:type" content="website" />
            {description ? <meta property="og:description" content={description} /> : null}
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content="Power Tools" />
            <meta name="twitter:title" content={headTitle} />
            {description ? <meta property="twitter:description" content={description} /> : null}
            <link rel="preconnect" href="//www.google.com" />
            <link rel="preconnect" href="//www.google-analytics.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap"
                rel="stylesheet"
            />
        </>
    );
};
