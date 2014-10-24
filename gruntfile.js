module.exports = function(grunt) {
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
        mocha:
        {
            test:
            {
                options:
                {
                    run: true,
                    debug: true,
                    reporter: 'Spec'
                },

                src: [ 'specs' ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-mocha');
    //grunt.registerHelper('default', ['nodemon']);
    grunt.registerTask('test', ['mocha']);
}