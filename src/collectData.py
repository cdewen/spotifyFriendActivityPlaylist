import re

file = open("output.txt", "r")
data = file.read()

songs = re.findall("(?<=spotify:track:)([0-9A-Za-z]+)", data)
artists = re.findall("(?<=spotify:track:)([0-9A-Za-z]+)", data)

try:
    create = open('total_songs.txt', 'x')
    writer = open('total_songs.txt', 'w')
    writer.write(str(songs))   
except FileExistsError:
    exists = open('total_songs.txt', 'a')
    exists.write(str(songs))   

try:
    generate = open('total_artists.txt', 'x')
    ex = open('total_artists.txt', 'w')
    ex.write(str(songs))   
except FileExistsError:
    real = open('total_artists.txt', 'a')
    real.write(str(songs))  