import json
with open('stations.txt', 'r') as fh:
	stations = []
	data = fh.readlines()
	for station in data:
		station = station.strip()
		station_dict = {'name': station}
		json_station = json.loads(station_dict)
		stations.append(json_station)
	print('finished parsing')
	with open('station.json', 'w') as f:
		f.write(repr(str(stations).replace("\'", '\"')))
		print('finished writing')