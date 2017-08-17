let TrialSearch = require('../trialsearch');

let search = new TrialSearch();
search.setFullText('Breast Cancer Her2 positive')
    .addInclude('nct_id')
    .request()
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });


