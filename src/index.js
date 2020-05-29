import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import routes from './routes';
import Schema from './graphql/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema: Schema,
    // schema: buildSchema(`type Query { msg: String }`),
    // rootValue: { msg: () => 'Hello World!' },
    graphiql: true,
    pretty: true
}));

mongoose.connect('mongodb+srv://pedro:luao9673@cluster0-exkvv.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'graphql' });

routes(app);

app.listen(3000, () => console.log('Express has been started'));