module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*uglify: {
            build: {
                files: [{
                    expand: true,
                    src: '*.js',
                    dest: 'build/scripts',
                    cwd: 'public_html/app',
                    ext: '.min.js'
                }]
            }
        }*/
        minified : {
            dev: {
                files: {
                    src: [
                        'controllers/**/*.js'
                    ],
                    dest: 'deploy'
                },
                options : {
                    sourcemap: false,
                    allinone: false,
                    mirrorSource: {
                        path: 'source/js/'
                    },
                    ext: '.min.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};