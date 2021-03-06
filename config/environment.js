/* jshint node: true */

module.exports = function(environment) {

  var ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    firebase: {
      apiKey: "AIzaSyByw-9I7lQpdRsxFxJZre_Nt-S_rz_tM9o",
      authDomain: "library-app-8a79d.firebaseapp.com",
      databaseURL: "https://library-app-8a79d.firebaseio.com",
      storageBucket: "library-app-8a79d.appspot.com",
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "''self' 'unsafe-eval' apis.google.com'",
      'frame-src': "''self' https://*.firebaseapp.com'",
      'connect-src': "''self' wss://*.firebaseio.com https://*.googleapis.com'"
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
