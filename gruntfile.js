module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        },

        // Test.
        mochaTest:
        {
            test:
            {
                options:
                {
                    quiet: false,
                    reporter: 'spec',
                    require: 'specs/helpers/chai.js'
                },

                src: [ 'specs/game/**/*.js', 'specs/player/**/*.js' ]
            }
        }
    });

    //grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('test', 'mochaTest');
 }