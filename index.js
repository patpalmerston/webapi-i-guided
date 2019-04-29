const express = require('express'); // 1. add express functionality
// 1.a - download express package in terminal 'yarn add express'

const server = express();// 2.create an express server call it server(foobar"call it what you want")

// set up server to listen to localhost:4000
server.listen(4000, () => {
  console.log('\n***** Server running on localhos:4000 *****\n')
})
// start server in terminal 'yarn server'

//New Lines \n allows us to break up the code as it downloads

// commands - stop the server before we upload packages(cntrl 'C') and restart the server after package download with "yarn server".
