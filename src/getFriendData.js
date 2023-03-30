const buddyList = require('spotify-buddylist')
const fs = require('fs')

async function fetchData () {
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






