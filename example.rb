mailtos = [
  "Bill Gates <billg@microsoft.com>",
  "Tom Anderson<tom@myspace.com>",
  "<radavis@gmail.com>",
  "bob.dole@gmail.com",  # matching this email would be awesome
  "test post, please ignore"  # and ignoring this would be rad
]

mailtos.each do |mailto|
  match_data = /(.*[^\s*<])?\s*<(.*)>/.match(mailto)
  _, name, email, *_ = *match_data
  puts "Name: #{name}  Email: #{email}\n\n"
end
