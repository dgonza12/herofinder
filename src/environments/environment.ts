// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyAxq1Ujw_iAgBgrKRaIAsJcueYWjcK-vrI",
      authDomain: "herorecall-d9d6c.firebaseapp.com",
      databaseURL: "https://herorecall-d9d6c.firebaseio.com",
      projectId: "herorecall-d9d6c",
      storageBucket: "herorecall-d9d6c.appspot.com",
      messagingSenderId: "515562150038"
  }
};
