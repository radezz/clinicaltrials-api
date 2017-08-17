'use strict';

let _ = require('lodash');
let ApiRequest = require('./apirequest');
let SearchResponse = require('./searchresponse');

const DEFAULT_SIZE = 10;
const MAX_SIZE = 50;

class TrialSearch extends ApiRequest {

    constructor() {
        super('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials');
        this.setParam('from', 0);
        this.setParam('size', DEFAULT_SIZE);
    }
    
    addInclude(include) {
        return this.addListParam('include', include);
    }

    addExclude(exclude) {
        return this.addListParam('exclude', exclude);
    }

    setFrom(from) {
        from = +from || 0;
        return this.setParam('from', Math.max(0, from));
    }

    setSize(size) {
        size = +size || DEFAULT_SIZE;
        return this.setParam('size', Math.max(0, Math.min(MAX_SIZE, size)));
    }

    setFullText(text) {
        return this.setParam('_fulltext', text);
    }

    setFieldFullText(fieldName, text) {
        return this.setParam(fieldName + '_fulltext', text);
    }

    setNciID(id) {
        return this.setParam('nci_id', text);
    }

    setNctID(id) {
        return this.setParam('nct_id', text);
    }

    addState(usStateCode) {
        return this.addListParam('sites.org_state_or_province', text);    
    }

    addCity(usCity) {
        return this.addListParam('sites.org_city', text);    
    }

    clone() {
        return (new TrialSearch()).setParams(_.clone(this.params, true));
    }

    request() {
        let promise = super.request();
        return new Promise((resolve, reject) => {
            promise.then((data) => {
                resolve(new SearchResponse(data, this));        
            }).catch(reject);
        });
    }
}

module.exports = TrialSearch;
