const makepost = require('../functions/content/make_post').make_post
const mongoose = require('mongoose')
const sleep = require('../helpers/sleep').sleep

async function main(){

    console.log("Running login tests");

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

    console.log('\n\n==================================')
    console.log('Test: Registering post');
    await makepost("smallneck1@gmail.com", "Kappa 3.0", "fsdg dsg #enois #teste #vamboraaa");
    console.log('\n\n==================================\n');

    await sleep(500);

}

main()