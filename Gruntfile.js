module.exports = function (grunt) {  
grunt.initConfig({  
    concat: {  
      options: { 
        stripBanners: 'all'
      },  
      dist: {  
        src: ['app/scripts/**/*.js'],//src文件夹下包括子文件夹下的所有文件  
        dest: 'app/bundles/built.js'//合并文件在dist下名为built.js的文件  
      }  
    }
});  
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-concat');  
    
  grunt.registerTask('default', ['concat']);  
}  