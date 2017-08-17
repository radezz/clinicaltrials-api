'use strict';

let request = require('request');
let querystring = require('querystring');
let _ = require('lodash');

class ApiRequest {

    constructor(apiEndpoint) {
        this.endpoint = apiEndpoint;
        this.params = {};
    }

    setParams(params) {
        _.extend(this.params, params);
        return this;
    }

    setParam(name, value) {
        this.params[name] = value;    
        return this;
    }

    addListParam(name, value) {
        if (!Array.isArray(this.params[name])) {
            if (this.params[name]) {
                throw new Error('You are trying to override existing non list param with list');
            } else {
                this.params[name] = [];
            }
        }

        if (this.params[name].indexOf(value) == -1) {
            this.params[name].push(value);
        }

        return this;
    }

    request() {
        return new Promise((resolve, reject) => {
            let uri = this.endpoint;
            if (this.params) {
                uri += '?' + querystring.stringify(this.params);
            }
            request.get(uri, (err, httpResponse, responseBody) => {
                if (err) {
                    reject(err);
                }

                resolve(responseBody);
            })
        });
    }
}

module.exports = ApiRequest;
