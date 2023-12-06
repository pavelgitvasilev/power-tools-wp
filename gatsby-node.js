// const createPaginatedPages = require(`gatsby-paginate`);
const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                context: path.resolve(__dirname, 'src/context'),
                constants: path.resolve(__dirname, 'src/constants'),
                hooks: path.resolve(__dirname, 'src/hooks'),
                utils: path.resolve(__dirname, 'src/utils'),
                assets: path.resolve(__dirname, 'src/assets'),
                static: path.resolve(__dirname, 'static'),
                api: path.resolve(__dirname, 'src/api'),
                layouts: path.resolve(__dirname, 'src/components/layouts'),
                helpers: path.resolve(__dirname, 'src/helpers'),
                pages: path.resolve(__dirname, 'src/pages'),
                templates: path.resolve(__dirname, 'src/templates'),
                store: path.resolve(__dirname, 'src/store'),
            },
        },
    });
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const errorMessage = 'Error: gatsby-node.js fail in GQL: ';

    const createAllWpPage = (nodes, templatePath) => {
        nodes.forEach((node) => {
            if (node.template.templateName === 'Default') {
                createPage({
                    path: node.uri,
                    component: path.resolve(templatePath),
                    context: {
                        id: node.id,
                    },
                });
            }
        });
    };

    const templatesRouter = (data) => {
        if (data.allWpPage && data.allWpPage.nodes) {
            createAllWpPage(data.allWpPage.nodes, './src/templates/page.jsx');
        } else {
            throw Error(`${errorMessage}fu:templatesRouter/data.allWpPage is null`);
        }
    };

    return graphql(`
        {
            allWpPage(sort: { date: ASC }) {
                nodes {
                    id
                    uri
                    databaseId
                    template {
                        templateName
                    }
                }
            }
        }
    `).then((result) => {
        if (result.data) {
            templatesRouter(result.data);
        } else {
            throw Error(`${errorMessage}result.data was failed`);
        }
    });
};
