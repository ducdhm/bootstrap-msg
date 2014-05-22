module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            options: {
                keepSpecialComments: '1'
            },
            main: {
                src: 'bootstrap-msg.css',
                dest: 'bootstrap-msg.min.css'
            }
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            main: {
                src: 'bootstrap-msg.js',
                dest: 'bootstrap-msg.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};