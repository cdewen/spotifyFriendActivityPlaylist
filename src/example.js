const buddyList = require('spotify-buddylist')

async function songs () {
 //const spDcCookie = 'AQCxQ5Xy5l8xjf64qhzQQtLRgpKncS8gx9XhkbgN9pI5X9coZxRIrmSoJpNWXq51x8Ua_64Z7J5HLqzbkwv4F_RO4y99KW8x41cChxUM5eUkNYmYRmMvPPEpryHIw5CwEotwikkytXIF2dedrJK-a5UdNIFoXufy'
const spDcCookie = 'AQA-t83zdzCIxjTmrS1BL8KLYIdXJkRcR5jsNB1P3o3E1XurfC3HT8h8A7ruFFB4SGxVjJfQDgLJ6cOfNtk5dozpOJUYBeU1U_mVeUOx4Owz--z2pPsZ4_ysx3ugcd4ilAPuyJsR41zCA-vSUckRA7LvAMNDRIbH'

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

songs()
//main()

// Run every minute
//setInterval(() => main(), 1000 * 60)

//save the playlist every 24 hours




