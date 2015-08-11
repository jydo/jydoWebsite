
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
       concat: {
          main: {
             src: [
                'bower_components/materialize/dist/js/materialize.min.js',
                'bower_components/fullpage.js/jquery.fullPage.min.js',
                 'bower_components/Easey/jquery.easing.1.3.js'
             ],
             dest: 'production.js'
          }
       },
       uglify: {
          build: {
             files: {
                'production.min.js': 'production.js',
             }
          }
       },
       jshint: {
          files: ['Gruntfile.js', 'src/*.js'],
          options: {
             globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true
             }
          }
       },
       watch: {
          files: ['src/*.js'],
          tasks: ['concat', 'jshint', 'uglify']
       },
       bower_concat: {
         main: {
           dest: 'js/jydo.js',
           cssDest: 'css/jydo.css',
             exclude: [
               'jquery'
             ]
         }

       },
       less: {
        development: {
          options: {
            paths: ["css"]
          },
          files: {
            "css/custom.css": "less/jydo.less"
          }
        }
      }
  });

  grunt.registerTask('default', ['bower_concat', 'less']);
};
