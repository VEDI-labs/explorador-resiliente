const functions = require('firebase-functions');
const { Nuxt } = require('nuxt-start');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const nuxtConfig = require('./nuxt.config.js');

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: '.nuxt',
  publicPath: 'public'
}

const nuxt = new Nuxt(config);

let isReady = false;

async function handleRequest(req, res) {
  if (!isReady) {
    try {
      isReady = await nuxt.ready();
    } catch (error) {
      console.error(error)
      process.exit(1);
    }
  }

  try {
    await nuxt.render(req, res);
  } catch (error) {
    console.error(error)
  }
}

exports.ssrapp = functions.https.onRequest(handleRequest);
