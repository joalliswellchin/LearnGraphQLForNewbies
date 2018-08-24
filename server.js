"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var schema = graphql_1.buildSchema("\n    type Query {\n        hello: String \n    }\n");
var root = {
    hello: function () {
        return 'Hello world!';
    },
};
graphql_1.graphql(schema, '{hello}', root).then(function (response) {
    console.log(response);
});
