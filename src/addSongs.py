import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
import datetime

scope = 'playlist-modify-public'

CID = os.environ['SPOTIPY_CLIENT_ID']='7a9d5a0dc0c6450d8657a492cb01f712'
CS = os.environ['SPOTIPY_CLIENT_SECRET']='39dcbe49605047db82b5f4d1cf1d0ad5'
URI = os.environ['SPOTIPY_REDIRECT_URI']='http://localhost:3000/callback/'

sp = spotipy.Spotify(
    auth_manager=SpotifyOAuth(
        scope=scope,
        redirect_uri=URI,
        client_id=CID,
        client_secret=CS,
        cache_path="token.txt"
    )
)

date = datetime.date.today()
p_name = "friend's activity"
desc = str(date.month) + " - " + str(date.day) + " - " + str(date.year)

results = sp.current_user()
user_id = results['id']

def createDailyPlaylist(toBeAdded):
    my_playlist = sp.user_playlist_create(user=user_id, name=p_name, public=True,   
                                      description=desc)
    p_id = my_playlist['id']

    sp.playlist_add_items(p_id, toBeAdded)