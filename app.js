function domainGenerator(minCharacter = 5, maxCharacter = 20) {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = ['.com', '.net', '.es']

  let name = "";
  let domain = 0;

  let pronounRandom = pronoun[Math.floor(Math.random() * pronoun.length)];
  name += pronounRandom;
  domain += pronounRandom.length;

  let adjRandom = adj[Math.floor(Math.random() * adj.length)];
  name += adjRandom;
  domain += adjRandom.length;

  let nounRandom = noun[Math.floor(Math.random() * noun.length)];
  name += nounRandom;
  domain += nounRandom.length;

  let extRandom = ext[Math.floor(Math.random() * ext.length)];
  name += extRandom;

  return name
}

let result = domainGenerator();
console.log(result);

