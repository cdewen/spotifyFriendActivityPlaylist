import re

def run():
    f = open("output.txt", "r")
    data = f.read()

    global artists
    artists = re.findall("(?<=spotify:artist:)([0-9A-Za-z]+)", data)
    global songs
    songs = re.findall("(?<=spotify:track:)([0-9A-Za-z]+)", data)
    return songs