#Encoding.default_external = "utf-8"

http_path = "/"
css_dir = "css"
css_path = "css"
sass_dir = "sass"
fonts_dir = "fonts"
javascripts_dir = "js"
images_dir = "img"

line_comments = false
output_style = :expanded
#:compressed :expanded

# This line tells compass to look at the Upbase styles in your bower_components dir
add_import_path "bower_components/Upbase/components"

# Add Autoprefixer Support
# https://github.com/ai/autoprefixer#usage
require 'autoprefixer-rails'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css)
  end
end
