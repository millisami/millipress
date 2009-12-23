require "rack/jekyll"

run Rack::Jekyll.new(:path => "site")

