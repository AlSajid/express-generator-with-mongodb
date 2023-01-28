const getPackages = (appName) => {
    const dependencies = {
        name: appName,
        version: "0.0.0",
        type: "module",
        scripts: {
            start: "node ./bin/www",
            "start-dev": "nodemon ./bin/www"
        },
        dependencies: {
            "cookie-parser": "^1.4.4",
            "cors": "^2.8.5",
            "express-validator": "^6.14.3",
            debug: "^2.6.9",
            dotenv: "^16.0.3",
            express: "^4.16.1",
            mongodb: "^4.13.0",
            morgan: "^1.9.1"
            
        },
        devDependencies: {
            "nodemon": "^2.0.20"
        }
    }
    return dependencies;
}

export default getPackages;