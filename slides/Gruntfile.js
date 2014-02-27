/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  // Project configuration

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: port,
          base: '.',
          debug: true
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          src: [ '**/*.jade', '!shared/**' ],
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          src: ['**/*.scss', '!bower_components/**/*.scss'],
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['**/*.scss'],
        tasks: 'sass',
        options:{
          livereload: 35729
        }
      },
      jade: {
        files: ['**/*.jade'],
        tasks: 'jade',
        options:{
          livereload: 35729
        }
      }
    }

  });

  // Serve presentation locally
  grunt.registerTask( 'serve', ['jade', 'connect', 'watch' ] );

};