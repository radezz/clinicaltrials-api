'use strict';

let ApiRequest = require('./apirequest');

class TrialSearch extends ApiRequest {

    constructor() {
        super('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials');
        this.setParam('from', 0);
        this.setParam('size', 10);
    }
    
    addInclude(include) {
        return this.addListParam('include', include);
    }

    addExclude(exclude) {
        return this.addListParam('exclude', exclude);
    }

    setSize(size) {
        return this.setParam('size', size);
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
}

module.exports = TrialSearch;
