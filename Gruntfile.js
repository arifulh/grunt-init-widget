module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        linter: {
            files: [
                'js/**/*.js'
            ],
            exclude: [
                'js/**/*min.js',
                'js/vendor/**/*.js',
                'js/text.js',
                'js/templates/*.js'
            ],
            directives: {
                browser: true
            },
            globals: {
                jQuery: true
            },
            options: {
                log: 'js/out/lint.log',
                errorsOnly: true // only display errors
            }
        },

        jst: {
          compile: {
                options: {
                    prettify: false,                
                    amd: true       
            },
            files: {
              "js/templates/compiled.js": ["js/templates/*.html"]
            }
          }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js',
                    mainConfigFile: './js/app.js',
                    name: 'app',
                    optimize: 'uglify2',
                    generateSourceMaps: false,
                    preserveLicenseComments: false,

                    // exclude from the build, load at runtime
                    paths: {
                        'jquery': 'empty:',
                        'jquery-ui-1.10.3.custom': 'empty:',
                        'jquery-ui-touch-punch': 'empty:',
                        'lodash': 'empty:',
                        'openbox': 'empty:',
                        'backbone': 'empty:'
                    },

                    out: 'js/app.min.js'
                }
            }
        },

        less: {
            css: {
                files: {
                    'css/style.css': 'css/less/style.less'
                }
            }
        },

        watch: {
            jst: {
                files: ['js/templates/*.html'],
                tasks: ['jst']
            },
            less: {
                files: ['css/less/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-linter');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['linter', 'less', 'jst', 'requirejs']);

};
