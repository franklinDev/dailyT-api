"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var graphqlHttp = require("express-graphql");
var schema_1 = require("./graphql/schema");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
    }
    App.prototype.middleware = function () {
        this.express.use('/graphql', graphqlHttp({
            schema: schema_1.default
        }));
    };
    return App;
}());
exports.default = new App().express;
