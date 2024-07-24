// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  externalPaymentApiUrl: 'http://localhost:3200',
  externalApiUrl: 'http://localhost:3000',
  stripeKey: 'sk_test_51MrpURF8rc9zGLvBcFORK62SwLs87hB5gY0L8f2GdVIhALXz6tyL7yZlriuoUX2yZ3f3QaU0vQD5aQ7W8GGYb4Ft002tsmZwZq',
  firebase: {
    apiKey: 'AIzaSyD06Q84o9cL1lAbi7E3VXvc4tJuUdvoKbI',
    authDomain: 'saude-quest.firebaseapp.com',
    projectId: 'saude-quest',
    storageBucket: 'saude-quest.appspot.com',
    messagingSenderId: '426744409202',
    appId: '1:426744409202:web:a50788338a2a2bedf8a6eb',
    measurementId: 'G-29KM4K2H9E'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
