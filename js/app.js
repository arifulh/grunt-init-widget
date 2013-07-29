require.config({
    baseUrl: 'js',
    paths: {
        jquery: [
            '//code.jquery.com/jquery-1.9.1.min',
            '/openbox-us/global/js/libs/jquery.1.9.1.min'
        ],
        lodash: [
            '//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.underscore.min',
            '/openbox-us/global/js/libs/lodash.underscore.min'
        ],
        backbone: [
            '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
            '/openbox-us/global/js/libs/backbone-min'
        ],
        openbox: [
            '//zeebox.com/openbox/api/3.1/openbox.min',
            '/openbox-us/global/js/libs/openbox.min'
        ]
    },
    shim: {
        'openbox': {
            deps: ['jquery']
        },
         'lodash': {
            exports: '_'
        },
        backbone: {
            deps: [
                'lodash',
                'jquery'
            ],
            exports: 'Backbone'
        }
    }
});

require([
    'jquery',
    'lodash',
    'openbox',
    'events'
], function (
    $,
    _,
    openbox,
    events
) {

    var _init = function() {
        // setup app
    };

    openbox.setWidgetDetails({
        name: 'test1',
        version: '0.1.0',
        partner: 'zeebox',
        supplier: 'com.zeebox.uk'
    });

    openbox.ready(function (params) {
        // add country to body
        if (params.tvc) $('body').addClass(params.tvc);
        events.trigger('ready', params);
        _init();
    });


});
