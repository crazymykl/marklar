require 'marklar'

static = Rack::Static.new nil, urls: ['/assets/'], root: 'lib', index: 'assets/index.html'
run Rack::Cascade.new [static, Marklar]
