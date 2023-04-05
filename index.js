const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;
const app = express();
const crowlUrl = 'https://www.saaslandingpage.com/'
const domainUrl = crowlUrl.split("/").find((part) => part.startsWith("www.")).replace("www.", "");
console.log(domainUrl);

axios(crowlUrl)
  .then((response) => {
    const urlArray = [];
    const html = response.data;
    const $ = cheerio.load(html);
    $("a", html).each(function () {
      const url = $(this).attr("href");
      const pageName = url.split('/')[url.split('/').length-1]
      urlArray.push({
        url,
        pageName,
      });
    });

    const updatedUrls = urlArray.filter((obj) => {
      if (obj.url.startsWith("https:") && !obj.url.includes(`${domainUrl}`)) {
        return false;
      } else if (obj.url.includes("#")) {
        return false;
      } else {
        return true;
      }
    });
    console.log(updatedUrls);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});