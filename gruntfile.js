// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    sass: { // Begin Sass Plugin
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'assets/sass/',
          src: ['**/*.scss'],
          dest: 'assets/css/',
          ext: '.css'
      }]
      }
    },
    postcss: { // Begin Post CSS Plugin
      options: {
        map: false,
        processors: [
      require('autoprefixer')({
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
          })
    ]
      },
      dist: {
        src: 'assets/css/style.css'
      }
    },
    cssmin: { // Begin CSS Minify Plugin
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: ['**/*.css', '!*.min.css'],
          dest: 'assets/css/',
          ext: '.min.css'
    }]
      }
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
        src: ['src/*.js'],
        dest: 'js/script.min.js'
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};