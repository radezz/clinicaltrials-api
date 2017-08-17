'use strict';

class SearchResponse {

    constructor(data, trialSearch) {
        this.total = +data.total;
        this.trials = data.trials || [];
        this.trialSearch = trialSearch;
    }

    hasNext() {
        return this.total > this.trialSearch.params.from + this.trials.length;
    }

    loadNext() {
        let search = this.trialSearch.clone();
        return search.setParam('from', search.params.from + search.params.size).request();
    }
}

module.exports = SearchResponse;

