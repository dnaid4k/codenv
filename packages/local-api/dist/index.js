"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var serve = function (port, filename, dir) {
    var app = express_1.default();
    var packagePath = require.resolve('coen2/build/index.html');
    app.use(express_1.default.static(path_1.default.dirname(packagePath)));
    // app.use(
    //   '/',
    //   createProxyMiddleware({
    //     target: 'http://127.0.0.1:3000',
    //     ws: true,
    //     logLevel: 'silent',
    //   })
    // );
    return new Promise(function (resolve, reject) {
        app.listen(port, resolve).on('error', reject);
    });
};
exports.serve = serve;
