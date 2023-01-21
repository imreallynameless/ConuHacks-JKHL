import json
import requests
import time


# JSON file
f = open('raw/TSXData.json', "r")

# Reading from file
data = json.loads(f.read())


url = 'http://conuhacks.ravenjs.net/api/message'
# Iterating through the json
# list
ind = 0
for i in data:
    r = requests.post(url, data=i)
    print(r.text)
    time.sleep(1)

# Closing file
f.close()
