const puppeteer = require('puppeteer');
const prompt = require('prompt-sync')();

(async () => {
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
  var str = JSON.stringify(cookies)

  var regex = /(?<="sp_dc","value":")([0-9A-Za-z_]+)/g
  var sp_dc = str.match(regex)
  sp_dc = sp_dc[0]

  console.log(sp_dc)
    
  await browser.close()

})();