require "marklar/version"
require "rack"
require "redcarpet"

module Marklar

  @markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML.new, fenced_code_blocks: true)

  class << self
    def call env
      req = Rack::Request.new(env)
      [200, {'Content-Type' => "text/html" }, [@markdown.render(req[:data].to_s)]] if req.post?
    end
  end
end
