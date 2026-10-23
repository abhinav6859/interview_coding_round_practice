const myurl = new Map<string, string>();

const base: string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function generateShort(url: string): string {
  let s: string = "";
  let s1: string = "";
  for (let i = 0; i < 6; i++) {
    const random: number = Math.floor(Math.random() * base.length);
    s += base[random];
    s1 = `https://short.ly/${s}`;
  }
  myurl.set(url, s1);
  const A = myurl.get(url);

  if (!A) {
    throw new Error("jj");
  }
  return A;
}

console.log(generateShort("https//heduheuh//ijij"));

