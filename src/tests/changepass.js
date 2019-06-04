const changepass = require('../functions/changepass').change_password;
const mongoose = require('mongoose')
const sleep = require('../helpers/sleep').sleep

async function main(){

    console.log("Running CHANGE PASSWORD tests");

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

    console.log('\n\n==================================');
    console.log('Test: Existent login, VALID password, new_password EQUALS comfirm_password');
    await changepass("smallneck@gmail.com", "1234567", "789456", "789456");
    await changepass("smallneck@gmail.com", "789456", "1234567", "1234567");
    console.log('\n\n==================================\n');

    await sleep(500);

    console.log('Test: Existent login, VALID password, new_password NOT EQUAL comfirm_password');
    await changepass("smallneck@gmail.com", "1234567", "789456", "asfase");
    console.log('\n\n==================================\n');

    await sleep(500);

    console.log('Test: Existent login, WRONG password, new_password EQUALS comfirm_password');
    await changepass("smallneck@gmail.com", "as11dd", "789456", "789456");
    console.log('\n\n==================================\n');

    await sleep(500);

    console.log('Test: Non existent login');
    await changepass("smallneck1sadwq1@gmail", "1234567", "789456", "789456");
    console.log('\n\n==================================\n');

    await sleep(100);

    await mongoose.disconnect()

}



main()