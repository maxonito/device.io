module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      all: {
        options: {
        outputStyle: 'compressed',
        sourceMap: true
        },
        files: {
          'assets/css/app.css': 'assets/scss/app.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({
            browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >6']
          })
        ]
      },
      all: {
        src: 'assets/css/app.css'
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      vendor: {
        files: {
          'js/vendor.min.js': [
            'js/vendor/jquery-3.1.0.min.js',
            'js/vendor/foundation/*.js'
          ]
        }
      },
      custom: {
        files: {
          'js/script.min.js': [
            'js/custom/svgdefs.js',
            'js/custom/script.js'
          ]
        }
      }
    },

    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/img/'
        }]
      }
    },

    svgstore: {
      options: {
        cleanupdefs: true
      },
      default: {
        files: {
          'assets/img/defs.svg': ['assets/img/svg/*.svg']
        }
      }
    },

    svginjector: {
      svgdefs: {
        options: {
          container: '#svgPlaceholder'
        },
        files: {
          'assets/js/svgdefs.js': 'assets/img/defs.svg'
        }
      }
    },

    watch: {
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass', 'postcss']
      },

      svg: {
        files: 'assets/img/svg/*.svg',
        tasks: ['svgstore', 'svginjector']
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-svginjector');

  grunt.registerTask('default', ['sass', 'postcss', 'imagemin', 'svgstore', 'svginjector', 'uglify']);

};
