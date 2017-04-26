require "json"

json_text = File.read("mailtos.json")
mailtos = JSON.parse(json_text)

REGEX = /(.*[^\s*<])?\s*<(.*)>/

mailtos.each do |mailto|
  match_data = REGEX.match(mailto)
  _, name, email, *_ = *match_data
  puts "Name: #{name}  Email: #{email}"
end
