'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({

    // очистка дирректорий
    clean: {
      build: [
        'build/css',
        'build/img',
        'build/js',
        'build/fonts'
      ]
    },

    // копирование
    copy: {
      htm: {
        expand: true,
        cwd: 'src/',
        src: '*.html',
        dest: 'build/'
      },
      img: {
        expand: true,
        cwd: 'src/img/',
        src: ['**/*.{png,jpg,gif,svg}'],
        dest: 'build/img/'
      },
      fonts: {
        expand: true,
        cwd: 'src/fonts/',
        src: ['*.{eot,svg,woff,ttf}'],
        dest: 'build/fonts/'
      }
    },

    // scss > css
    sass: {
      dist: {
        options: {
          sourcemap: 'inline',
          style: 'expanded'
        },
        files: {
          'build/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    // автопрефиксер
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9'],
        map: true
      },
      style: {
        src: 'build/css/style.css'
      }
    },

    // объединение медиа выражений
    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    // сжатие css
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    // объединение файлов
    concat: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/js/script.js'
      }
    },

    // сжатие js
    uglify: {
      start: {
        files: {
          'build/js/script.min.js': ['build/js/script.js']
        }
      }
    },

    // оптимизация графики
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['build/img/*.{png,jpg,gif,svg}']
        }]
      }
    },

    // подключение *.min.* файлов
    processhtml: {
      options: {
        data: {
          message: 'Production distribution'
        }
      },
      dist: {
        files: {
          'build/index.html': ['build/index.html']
        }
      }
    },

    // отслеживаем изменений
    watch: {
      html: {
        files: ['src/**/*.html'],
        tasks: ['htm'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      style: {
        files: ['src/sass/**/*.scss'],
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      images: {
        files: ['src/img/**/*.{png,jpg,gif,svg}'],
        tasks: ['img'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['js'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    // автоперезагрузка
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'build/css/*.css',
            'build/js/*.js',
            'build/fonts/**',
            'build/img/**/*.{png,jpg,gif,svg}',
            'build/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: 'build/'
          },
          startPath: '/index.html',
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
          }
        }
      }
    }
  });

  // базовый таск
  grunt.registerTask('default', [
    'clean',
    'copy',
    'sass',
    'cmq',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'imagemin',
    'browserSync',
    'watch'
  ]);

  // билдовый таск
  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
    'cmq',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'imagemin',
    'processhtml'
  ]);

  // только стили
  grunt.registerTask('style', [
    'sass',
    'cmq',
    'autoprefixer',
    'cssmin'
  ]);

  // только js
  grunt.registerTask('js', [
    'concat',
    'uglify'
  ]);

  // только картики и стили
  grunt.registerTask('img', [
    'copy:img',
    'imagemin'
  ]);
};
