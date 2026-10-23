const urlMap = new Map<string,string>();

 
function generateShortCode() {
  const characters : string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code:string = "";

  for (let i:number = 0; i < 6; i++) {
    const randomIndex:number = Math.floor(
      Math.random() * characters.length
    );

    code += characters[randomIndex];
  }

  return code;
}

function shortenUrl(originalUrl:string) {
  let shortCode;

  // Keep generating until we find an unused code
  do {
    shortCode = generateShortCode();
  } while (urlMap.has(shortCode));

  // Store short code as key and original URL as value
  urlMap.set(shortCode, originalUrl);

  return `https://short.ly/${shortCode}`;
}

function getOriginalUrl(shortCode:any) {
  return urlMap.get(shortCode) ?? null;
}

// Example
const shortUrl = shortenUrl("https://google.com");

console.log(shortUrl);

const code = shortUrl.split("/").pop();
console.log(code)
console.log(getOriginalUrl(code));