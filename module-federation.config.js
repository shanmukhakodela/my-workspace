// Core libraries such as reat, angular,redux,ngrx etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set(['@angular/core',
     '@angular/common',
     '@angular/platform-browser',
     '@angular/platform-browser-dynamic',
     '@ngrx/store',
    '@ngrx/effects',
    '@ngrx/entity',
    '@ngrx/devtools',
    '@angular/flexLayout'
]);

module.exports = {
    // share core libraries, and avoid everything else
    shared: (libraryName, defaultConfig) => {
        if(coreLibraries.has(libraryName)) {
            return {
                ...defaultConfig,
                singleton: true, // only a single version of the library should be loaded
                strictVersion: true
            }
        }
        // Returning false means the library not shared.
        return false;
    }
};