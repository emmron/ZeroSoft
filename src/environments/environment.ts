// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyAf9dJFHKqzJb6kbdaEmeXYdThk_hAxGfQ ",
     authDomain: "AUTH-DOMAIN-HERE",
     databaseURL: "DATABASE-URL-HERE",
     projectId: " zerosoft-b3e7c",
     storageBucket: "STORAGE-BUCKET-HERE",
     messagingSenderId: "MESSAGING-SENDER-ID-HERE"
  };
};