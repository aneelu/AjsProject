module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: [{
                    expand: true,
                    src: '*.js',
                    dest: 'build/scripts',
                    cwd: 'public_html/app',
                    ext: '.min.js'
                }]
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};