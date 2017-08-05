with open('stations.txt', 'r') as fh:
	stations = []
	data = fh.readlines()
	for station in data:
		station = station.strip()
		stations.append(station)
	with open('station.array', 'w') as f:

		f.write(repr(str(stations).replace("\'", '\"')))