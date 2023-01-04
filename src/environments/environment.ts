// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  databaseServer: "https://633a602a-ccca-4540-afcf-d278a10e0251-europe-west1.apps.astra.datastax.com/api/rest/v1/keyspaces/lifemanagement/tables",
  databaseTokenValue: "AstraCS:NFpEYRLXcgDbnvCnuQUUCHRv:eefe24ffd24b48f9a7ea7ac6162b07561c18539f0fdfcebb577130f4db46c4cb"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
