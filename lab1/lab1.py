import requests

print(requests.__version__)

print(requests.get("http://www.google.com/"))

github_request = requests.get('https://raw.githubusercontent.com/sankalpsaini/lab1/master/lab1.py')

print(github_request.text)