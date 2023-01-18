import re

def getSongs():
    f = open("total_songs.txt", "r")
    Finfo = f.read()

    Fsongs = re.findall("[0-9A-Za-z]+", Finfo)
    Fsongs = list(dict.fromkeys(Fsongs))
    return Fsongs

def getArtists():
    g = open("total_artists.txt", "r")
    Fdata = g.read()

    Fartists = re.findall("[0-9A-Za-z]+", Fdata)
    Fartists = list(dict.fromkeys(Fartists))
    return Fartists



    
