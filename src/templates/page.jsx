// libraries
import React from 'react';
import 'normalize.css';
import { graphql } from 'gatsby';
// components
import { SEO } from 'components/SEO';
import { GlobalGridVars } from 'components/UI/Grid';
import { GlobalStyles } from 'components/UI/GlobalStyles';
import { Layout } from 'components/Layout';
// helpers
import { renderBlock } from 'helpers/renderBlock';

const Page = ({ data }) => {
    const { layouts } = data.page.layouts;
    const { isFrontPage } = data.page;

    return (
        <Layout data={data.page}>
            <GlobalStyles />
            <GlobalGridVars />
            {layouts ? (
                layouts.map((item, index) => (
                    <React.Fragment key={item.fieldGroupName + index}>{renderBlock(item, isFrontPage)}</React.Fragment>
                ))
            ) : null}
        </Layout>
    );
};
export default Page;

export const Head = ({ data }) => {
    return <SEO data={data.page.seo} />;
};

export const query = graphql`
    query ($id: String!) {
        page: wpPage(id: { eq: $id }) {
            isFrontPage
            databaseId
            title
            link
            seo {
                canonical
                metaDesc
                metaRobotsNofollow
                metaRobotsNoindex
                title
            }
            layouts {
                layouts {
                    ... on WpPage_Layouts_Layouts_Promo {
                        fieldGroupName
                        ...Promo
                    }
                }
            }
        }
    }
`;
