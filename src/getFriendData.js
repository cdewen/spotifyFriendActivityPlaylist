const buddyList = require('spotify-buddylist')
const fs = require('fs')

async function fetchData () {
 //const spDcCookie = 'AQCxQ5Xy5l8xjf64qhzQQtLRgpKncS8gx9XhkbgN9pI5X9coZxRIrmSoJpNWXq51x8Ua_64Z7J5HLqzbkwv4F_RO4y99KW8x41cChxUM5eUkNYmYRmMvPPEpryHIw5CwEotwikkytXIF2dedrJK-a5UdNIFoXufy'
const spDcCookie = 'AQA-t83zdzCIxjTmrS1BL8KLYIdXJkRcR5jsNB1P3o3E1XurfC3HT8h8A7ruFFB4SGxVjJfQDgLJ6cOfNtk5dozpOJUYBeU1U_mVeUOx4Owz--z2pPsZ4_ysx3ugcd4ilAPuyJsR41zCA-vSUckRA7LvAMNDRIbH'

 const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
 const friendActivity = await buddyList.getFriendActivity(accessToken)

 const data = JSON.stringify(friendActivity)

 fs.writeFile('Output.txt', data, (err) => {
          
    // In case of a error throw err.
    if (err) throw err;
})

}

fetchData()






