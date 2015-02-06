module.exports = function(grunt) {

	// Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var pkg = {
        app: '.',
        dist: 'dist',
        views: 'application/views',
        ext: 'php',
        js: 'assets/scripts',
        css: 'assets/styles',
        imgs: 'assets/images',
        fonts: 'assets/fonts'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        pkg: pkg,

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= pkg.dist %>/*'
                    ]
                }]
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= pkg.dist %>/<%= pkg.js %>/{,*/}*.js',
                        '<%= pkg.dist %>/<%= pkg.css %>/{,*/}*.css'
                    ]
                }
            }
        },

        useminPrepare: {
            options: {
                dest: '<%= pkg.dist %>'
            },
            html: [
                '<%= pkg.views %>/**/*.<%= pkg.ext %>'
            ]
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= pkg.dist %>'
                ]
            },
            html: [
                '<%= pkg.dist %>/<%= pkg.views %>/{,*/}*.<%= pkg.ext %>'
            ],
            css: [
                '<%= pkg.dist %>/<%= pkg.css %>/{,*/}*.css'
            ]
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= pkg.app %>',
                    dest: '<%= pkg.dist %>',
                    src: [
                        '**/*',
                        '!**.git**',
                        '!**.bat**',
                        '!**Gruntfile.js**',
                        '!**package.json**',
                        '!**/node_modules/**',
                        '!**composer.**',
                        '!**/dist/**',
                        '!**/.tmp/**'
                    ]
                }]
            }
        }

    });

    // Build Front
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);

};