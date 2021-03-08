const axios = require("axios");
const cheerio = require("cheerio");

const metadata_scrapping = async (URL) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(URL);

      //create the cheerio object
      const resObj = {};

      //set a reference to the document that came back
      const $ = cheerio.load(data);

      //create a reference to the meta elements
      const $title = $("head title").text();
      const $desc = $('meta[name="description"]').attr("content");
      const $kwd = $('meta[name="keywords"]').attr("content");
      const $ogTitle = $('meta[property="og:title"]').attr("content");
      const $ogType = $('meta[property="og:type"]').attr("content");
      const $ogUrl = $('meta[property="og:url"]').attr("content");
      const $ogImage = $('meta[property="og:image"]').attr("content");
      const $ogkeywords = $('meta[property="og:keywords"]').attr("content");
      const $images = $("img");

      // conditionlly add datapoints to the response object
      if ($title) resObj.title = $title;
      if ($desc) resObj.description = $desc;
      if ($kwd) resObj.keywords = $kwd;
      if ($ogImage && $ogImage.length) resObj.ogImage = $ogImage;
      if ($ogTitle && $ogTitle.length) resObj.ogTitle = $ogTitle;
      if ($ogType && $ogType.length) resObj.ogType = $ogType;
      if ($ogUrl && $ogUrl.length) resObj.ogUrl = $ogUrl;
      if ($ogkeywords && $ogkeywords.length) resObj.ogkeywords = $ogkeywords;

      if ($images && $images.length) {
        resObj.images = [];
        for (var i = 0; i < $images.length; i++) {
          resObj.images.push($($images[i]).attr("src"));
        }
      }

      resolve(resObj);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  metadata_scrapping,
};
