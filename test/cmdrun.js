let TrialSearch = require('../trialsearch');

let count = 0;

function processResponse(response) {
    count += response.trials.length;
    if (response.hasNext()) {
        response.loadNext().then(processResponse).catch((err) => {
            console.log(err);
        })
    }
} 


let search = new TrialSearch();
search.setFullText('Breast Cancer Her2 positive')
    .addInclude('nct_id')
    .addInclude('current_trial_status')
    .addInclude('amendment_date')
    .addInclude('record_verification_date')
    .addInclude('current_trial_status_date')
    .setSize(50)
    .request()
    .then(processResponse).catch((err) => {
        console.log(err);
    });


