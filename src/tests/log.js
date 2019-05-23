const login = require('../functions/login');
const mongoose = require('mongoose')
const sleep = require('../helpers/sleep').sleep

async function main(){

    console.log("Running login tests");

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

    console.log('\n\n==================================')
    console.log('Test: Existent login, valid authentication')
    await login("smallneck@gmail.com", "1234567");
    console.log('\n\n==================================\n');

    await sleep(500);

    console.log('Test: Non existent login');
    await login("smseawefllneck1@gmail.com", "1234567");
    console.log('\n\n==================================\n')

    await sleep(500);

    console.log('Test: Existent login, wrong password');
    await login("smallneck@gmail", "as11dd");
    console.log('\n\n==================================\n');

    await sleep(500);

    console.log('Test: wrong email formation');
    await login("smallneck1@gmail", "1234567");
    console.log('\n\n==================================\n');

    await sleep(100);

    await mongoose.disconnect()

}



main()