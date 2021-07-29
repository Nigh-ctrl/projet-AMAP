//This middleware is to provide the API design and documentation
const options = {
    swaggerDefinition: {
        info: {
            description: 'AMAP API',
            title: 'AMAP la seyne',
            version: '1.0.0',
        },
        host: `localhost:${process.env.PORT}`,
        basePath: '/',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['../../app/**/*.js'] //Path to the API handle folder
};

module.exports = options;