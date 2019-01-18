const express = require('express');
const express_graphql = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', express_graphql({
    schema,
    pretty: true,
    graphiql: true
}))

app.listen(8888, () => {
    console.log('Server is running at 8888...');
})