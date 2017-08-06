import re

RE_STATION_MATCH = '\">(\w+\s\w+|\w+|\w+\s\w+\s\w+)</a>'

s = set()

with open('all_train_stations.html', 'r') as fh:
	stations = []
	html_data = fh.read()
	print(html_data)
	station_matches = re.findall(RE_STATION_MATCH, html_data)

	print(station_matches) 
	print(len(station_matches))
	for station in station_matches:
		station = station.strip()
		if station in s:
			print('duplicate station: ' + str(station))
			continue
		s.add(station)
		station_dict = {"name": station}
		stations.append(station_dict)
	print('finished parsing')
	print("unique stations: " + str(len(s)))
	stations.sort(key = lambda d:d['name'])
	with open('station.json', 'w') as f:
		f.write("[\n")
		for i in range(len(stations)):
			station_dict = stations[i]
			if i == len(stations) -1:
				f.write("\t" + str(station_dict).replace("\'", '\"') + "\n")
			else:
				f.write("\t" + str(station_dict).replace("\'", '\"') + ",\n")
		f.write("]")
		# f.write(str(stations).replace("\'", '\"'))
		print('finished writing')