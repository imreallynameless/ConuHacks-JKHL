import json
import requests
import time


# JSON file
f = open ('TSXData.json', "r")
  
# Reading from file
data = json.loads(f.read())
  

url = 'http://localhost:3007/api/message'
# Iterating through the json
# list
ind = 0
for i in data:
    r = requests.post(url, data=i)
    print(r.text)
    time.sleep(0.0001)
  
# Closing file
f.close()