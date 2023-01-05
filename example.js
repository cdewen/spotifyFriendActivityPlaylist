const buddyList = require('spotify-buddylist')

async function main () {
 const spDcCookie = 'AQCxQ5Xy5l8xjf64qhzQQtLRgpKncS8gx9XhkbgN9pI5X9coZxRIrmSoJpNWXq51x8Ua_64Z7J5HLqzbkwv4F_RO4y99KW8x41cChxUM5eUkNYmYRmMvPPEpryHIw5CwEotwikkytXIF2dedrJK-a5UdNIFoXufy'

 const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
 const friendActivity = await buddyList.getFriendActivity(accessToken)

 const data = JSON.stringify(friendActivity)

 var str = data
 var regex = /(?<=spotify:artist:)([0-9A-Za-z]+)/g
 var artists = str.match(regex)

 var regexTwo = /(?<=spotify:track:)([0-9A-Za-z]+)/g
 var tracks = str.match(regexTwo)

 console.log(tracks[tracks.length - 1].concat(" ", artists[artists.length - 1]))

}


main()

// Run every minute
//setInterval(() => main(), 1000 * 60)

//save the playlist every 24 hours




