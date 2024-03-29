const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();
const buddyList = require('spotify-buddylist')
let {PythonShell} = require('python-shell');
const fs = require('fs');

main()

async function main() {
    const spDcCookie = await spdc()
    await continuousFetch(spDcCookie)
    PythonShell.run('popular.py', null, function(err,results) {})
}

async function spdc()  {

    const username = prompt('what is your username? > ')
    const password = prompt('what is your password? > ')

    const browser = await puppeteer.launch({headless: false});
    const url = 'https://open.spotify.com'
    const page = await browser.newPage();
    await page.goto(url);

  
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

async function fetchData (spDcCookie) {

    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
   
    const data = JSON.stringify(friendActivity)
   
    fs.writeFile('Output.txt', data, (err) => {
       if (err) throw err;
    }) 
}

async function continuousFetch (spDcCookie) {

    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
   
    const data = JSON.stringify(friendActivity)
   
    fs.writeFile('Output.txt', data, (err) => {
       if (err) throw err;
    }) 
    PythonShell.run('collectData.py', null, function(err,results) {})
}