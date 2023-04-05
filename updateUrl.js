// const submittedUrl = "figmatic.co";
// let crowlUrl = formatUrl(submittedUrl)
// console.log(crowlUrl);
 function formatUrl(inputUrl) {
  inputUrl = inputUrl.trim().replace(/\/+$/, '');
  if (inputUrl.startsWith('https://www.figmatic.co')) {
    return 'https://www.figmatic.co/';
  }
  if (inputUrl.startsWith('figmatic.co')) {
    inputUrl = 'https://' + inputUrl;
  } else if (inputUrl.startsWith('www.figmatic.co')) {
    inputUrl = 'https://' + inputUrl.replace('www.', '');
  }
  if (!inputUrl.endsWith('/')) {
    inputUrl += '/';
  }
  return inputUrl;
}


module.exports= formatUrl
