import getData
#import spotipy
#from spotipy.oauth2 import SpotifyClientCredential

def createDailyPlaylist(toBeAdded):

    #needs to remove duplicates first

    user = 'id of the user'
    name = 'name of the playlist'
    description = 'description of the playlist'
    #spotipy.user_playlist_create(user, name, public=True, collaborative=False, description='')

    #playlist_id = spotipy.user_playlists(user, limit=1, offset=0)

    #spotipy.user_playlist_add_tracks(user, playlist_id, songs, position=None)
    print(toBeAdded[0])

getData.main()
songs = getData.songs
createDailyPlaylist(songs)