const register = require('../functions/register');
const mongoose = require('mongoose')

async function main(){

    console.log("Running registering new user tests");

    await mongoose.connect('mongodb://localhost/ihc', {useNewUrlParser: true});

    console.log('\n\n==================================')
    console.log('Test: new login')
    await register("Smallneck", "smallneck9852@gmail.com", "1234567");
    console.log('\n\n==================================\n');
    await setTimeout(()=>{},100)
    console.log('Test: repeated login')
    await register("Smallneck", "smallneck1@gmail.com", "1234567");
    console.log('\n\n==================================\n')
    await setTimeout(()=>{},100)
    console.log('Test: new login AND wrong email formation')
    await register("Smallneck", "smallneck5169@gmail", "1234567");
    console.log('\n\n==================================\n');
    await setTimeout(()=>{},100)
    console.log('Test: repeated login AND wrong email formation')
    await register("Smallneck", "smallneck1@gmail", "1234567");
    console.log('\n\n==================================\n')

    await mongoose.disconnect()
}

main()