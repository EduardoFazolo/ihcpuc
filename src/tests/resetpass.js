const resetpass = require('../functions/resetpass').reset_password;
const mongoose = require('mongoose')
const sleep = require('../helpers/sleep').sleep

async function main(){

    console.log("Running login tests");

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

    console.log('\n\n==================================')
    console.log('Test: Existent login');
    await resetpass("smallneck@gmail.com");
    console.log('\n\n==================================\n');

    await sleep(500);

}

main()