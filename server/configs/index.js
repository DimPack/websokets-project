module.exports = {
    development:{
        hostName: 'localhost', // name docker container
        port: 27017,
        dbName: 'chat_dev',
    },
    test: {
        hostName: 'localhost',
        port: 27017,
        dbName: 'chat_test',
    },
    production: {

    }
}