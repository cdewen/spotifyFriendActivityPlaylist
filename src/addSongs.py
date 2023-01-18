import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
import datetime
import getData

scope = 'playlist-modify-public'

CID = '7a9d5a0dc0c6450d8657a492cb01f712'
CS = '39dcbe49605047db82b5f4d1cf1d0ad5'
URI = 'http://localhost:3000/callback/'

sp = spotipy.Spotify(
    auth_manager=SpotifyOAuth(
        scope=scope,
        redirect_uri=URI,
        client_id=CID,
        client_secret=CS
    )
)

def addFull():
    date = datetime.date.today()
    p_name = "friend's activity"
    desc = str(date.month) + " - " + str(date.day) + " - " + str(date.year)

    results = sp.current_user()
    user_id = results['id']


    my_playlist = sp.user_playlist_create(user=user_id, name=p_name, public=True,   
                                        description=desc)
    p_id = my_playlist['id']

    print(type(getData.getSongs()))

    sp.playlist_add_items(p_id, getData.getSongs())

def addFromList(songs):
    date = datetime.date.today()
    p_name = "friend's most popular"
    desc = str(date.month) + " - " + str(date.day) + " - " + str(date.year)

    results = sp.current_user()
    user_id = results['id']


    my_playlist = sp.user_playlist_create(user=user_id, name=p_name, public=True,   
                                        description=desc)
    p_id = my_playlist['id']

    sp.playlist_add_items(p_id, songs)