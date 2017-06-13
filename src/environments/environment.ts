// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDBRUWFzB0kevgdw1yfXYcehGVhqQNVpdg",
    authDomain: "marcellokabora-80ff9.firebaseapp.com",
    databaseURL: "https://marcellokabora-80ff9.firebaseio.com",
    projectId: "marcellokabora-80ff9",
    storageBucket: "marcellokabora-80ff9.appspot.com",
    messagingSenderId: "715645246518"
  },
  baseurl: 'https://firebasestorage.googleapis.com/v0/b/marcellokabora-80ff9.appspot.com/o/',
  worktype : ["website","design","logo","flayer","book"],
};
