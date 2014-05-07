module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      demo: {
        options:{
          port: 3001,
          base: '',
          keepalive: true
        }
      }
    },
    jshint:{
      options:{
        jshintrc: true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    'smush-components': {
      options: {
        fileMap: {
          js: 'demo/dependencies.js',
          css: 'demo/dependencies.css'
        }
      }
    },
    bumpup: ['bower.json', 'package.json', 'xtag.json'],
    tagrelease: {
      file: 'package.json',
      prefix: '',
      commit: true
    },
    concat:{
      dist: {
        src: [
          'src/bootstrap.js',
          'CustomElements/src/Observer.js',
          'CustomElements/src/CustomElements.js',
          'CustomElements/src/Parser.js',
          'CustomElements/src/boot.js'
          ],
       dest: 'src/custom-elements.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-smush-components');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');

  grunt.registerTask('build', ['smush-components','concat:dist']);

};
