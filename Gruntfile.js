'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.css',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFile: {
                    src: [
                        'css/*.css',
                        '*.hmtl',
                        'JS/*.js'
                    ]
                },
                option: {
                    watchTasks: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
}