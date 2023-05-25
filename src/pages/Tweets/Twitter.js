const fetch = require('node-fetch');
const qs = require('qs');

const consumer_key = 'NCq1jnTPCfOpu9I4PdI4iUsua';
const consumer_secret = '2Ltf3KxQKBSyIGPdlaOOoBPaoHZIlQjLT7IcwSzblQsLbhHE6w';
const access_token = '1656295967782498320-xr8TIRPc85g4ykUrwX5OHPNVWkPdf2';
const access_token_secret = '4SiMG7EwoM73LvILcsrurfcHsRRXRJcLw2cIqHD40vKyx';

const searchHashtag = async (hashtag) => {
  // Autenticación de la API
  const auth = Buffer.from(`${consumer_key}:${consumer_secret}`).toString('base64');
  const response = await fetch('https://api.twitter.com/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  });
  const json = await response.json();
  const accessToken = json.access_token;

  // Obtener los tweets que contienen el hashtag específico
  const query = qs.stringify({
    q: `#${hashtag}`,
    result_type: 'recent',
    count: 10,
  });
  const searchResponse = await fetch(`https://api.twitter.com/1.1/search/tweets.json?${query}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const searchJson = await searchResponse.json();
  const tweets = searchJson.statuses.map((status) => status.text);
  return tweets;
};

module.exports = {
  searchHashtag,
};
