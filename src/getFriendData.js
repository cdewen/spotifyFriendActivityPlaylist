const buddyList = require('spotify-buddylist')
const fs = require('fs')

async function fetchData () {
 //const spDcCookie = 'AQCxQ5Xy5l8xjf64qhzQQtLRgpKncS8gx9XhkbgN9pI5X9coZxRIrmSoJpNWXq51x8Ua_64Z7J5HLqzbkwv4F_RO4y99KW8x41cChxUM5eUkNYmYRmMvPPEpryHIw5CwEotwikkytXIF2dedrJK-a5UdNIFoXufy'
const spDcCookie = getSPDC()

 const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
 const friendActivity = await buddyList.getFriendActivity(accessToken)

 const data = JSON.stringify(friendActivity)

 fs.writeFile('Output.txt', data, (err) => {
          
    // In case of a error throw err.
    if (err) throw err;
})

}

fetchData()






