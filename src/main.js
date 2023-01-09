const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();
const buddyList = require('spotify-buddylist')

main()

async function main() {
    let friendData = songs()
    var tracks = (await friendData).songs
    var artists = (await friendData).singers
}

async function spdc()  {
    const browser = await puppeteer.launch();
    const url = 'https://open.spotify.com'
    const page = await browser.newPage();
    await page.goto(url);
  
    const username = prompt('what is your username? > ');
    const password = prompt('what is your password? > ')
  
    await page.waitForSelector('.Button-sc-qlcn5g-0.jsmWVV');
    await page.click('.Button-sc-qlcn5g-0.jsmWVV');
    await page.waitForSelector('#login-username');
    await page.type('#login-username', username)
    await page.type('#login-password', password)
    await page.click('.Button-qlcn5g-0.frUdWl');
    await page.waitForSelector('.link-subtle.ATUzFKub89lzvkmvhpyE')
    
    const client = await page.target().createCDPSession();
    const cookies = (await client.send('Network.getAllCookies')).cookies;
    await browser.close()
    var str = JSON.stringify(cookies)
  
    var regex = /(?<="sp_dc","value":")([0-9A-Za-z_-]+)/g
    var sp_dc = str.match(regex)
    sp_dc = sp_dc[0]
  
    return sp_dc;
      
}

async function songs () {
    const spDcCookie = await spdc()
   
    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
   
    const data = JSON.stringify(friendActivity)
   
    var str = data
    var regex = /(?<=spotify:artist:)([0-9A-Za-z]+)/g
    var artists = str.match(regex)
   
    var regexTwo = /(?<=spotify:track:)([0-9A-Za-z]+)/g
    var tracks = str.match(regexTwo)
   
    return {
        singers: artists,
        songs: tracks
    }
}