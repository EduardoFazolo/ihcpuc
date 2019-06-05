const register = require('../functions/register');
const mongoose = require('mongoose')
const sleep = require('../helpers/sleep').sleep

async function main(){

    console.log("Running registering new user tests");

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

    console.log('\n\n==================================')
    console.log('Test: new login')
    await register("Smallneck1", "smallneck1@gmail.com", "1234567");
    await register("Smallneck2", "smallneck2@gmail.com", "1234567");
    await register("Smallneck3", "smallneck3@gmail.com", "1234567");
    await register("Smallneck4", "smallneck4@gmail.com", "1234567");
    console.log('\n\n==================================\n');

    await sleep(500)

    console.log('Test: repeated login')
    await register("Smallneck", "smallneck1@gmail.com", "1234567");
    console.log('\n\n==================================\n')

    await sleep(500)

    console.log('Test: new login AND wrong email formation')
    await register("Smallneck", "smallneck5169@gmail", "1234567");
    console.log('\n\n==================================\n');

    await sleep(500)

    console.log('Test: repeated login AND wrong email formation')
    await register("Smallneck", "smallneck1@gmail", "1234567");
    console.log('\n\n==================================\n')

    await mongoose.disconnect()
}

main()