module.exports = function(grunt) {
    grunt.initConfig({
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerHelper('default', ['nodemon']);
}