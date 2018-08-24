import { buildSchema, graphql } from "graphql";

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
   hello: () => {
      return "Hello world!";
   },
};

graphql(schema, "{hello}", root).then((response) => {
   console.log(response);
});
