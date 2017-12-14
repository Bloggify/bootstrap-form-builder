require.config({
    baseUrl: "assets/js/lib/",
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'popper': {
            exports: 'Popper'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: '$.fn.popover'
        }
    },
    paths: {
        app: "..",
        collections: "../collections",
        data: "../data",
        models: "../models",
        helper: "../helper",
        templates: "../templates",
        views: "../views"
    }
});

require(["popper.min", 'app/app'], function(popper, app) {
    app.initialize();
});
