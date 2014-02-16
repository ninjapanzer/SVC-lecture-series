/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  // Project configuration

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-jade');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          pretty: true,
          port: port,
          base: '.'
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          src: [ '**/*.jade' ],
          ext: '.html'
        }]
      }
    },

    watch: {
      jade: {
        files: ['**/index.jade'],
        tasks: 'jade'
      }
    }

  });

  // Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

};