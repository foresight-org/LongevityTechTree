require 'json'

files = [
	'ForesightTechTree/longevity.graph',
	'ForesightSpaceTree/spacetree.graph',
	'ForesightNeurotechTree/neurotech.graph',
	'ForesightNanotechTree/nanotech.graph',
	'ForesightIntcoopTree/intcoop.graph'
]

files.each do |filename|
	puts "\n\nprocessing #{filename}"
	
	text = File.read(filename)
	graph = JSON.parse(text, symbolize_names: true)

	puts "Found #{graph[:items].size} items"

	nodes = graph[:items].select { |i| i[:kind] == 'node'}
	puts "Found #{nodes.size} nodes"

	tag_vals = nodes.map { |n| n[:tags] }.uniq
	puts "Found #{tag_vals} unique tags"

	nodes.each do |n|
		next if n[:tags].intersection(['goal','project']).any?
		next if ["companies", "labs", "contributors"].include?(n[:label].downcase)
		
		parent = n[:parent] && nodes.find { |g| g[:id] == n[:parent] }
		next if parent && ["contributors"].include?(parent[:label].downcase)

		if parent && ["companies", "labs"].include?(parent[:label].downcase)
			n[:tags] << 'project'
		else
			n[:tags] << 'goal'
		end
	end

	File.write(filename, JSON.pretty_generate(graph))
end