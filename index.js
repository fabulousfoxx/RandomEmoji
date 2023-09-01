const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
  let response = await fetch("https://emoji-api.com/emojis?access_key=75fbe390f6d941ce72df86a4c2fc6d0dc7a1dd44");

  data = await response.json();

  for(let i=0; i<2000; i++){
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    })
  }
}

getEmoji();


btnEl.addEventListener("click", ()=>{
  const randomNum = Math.floor(Math.random()*emoji.length);
  console.log(randomNum);
  btnEl.innerText = emoji[randomNum].emojiName; //emoji picture

  const wholeString = emoji[randomNum].emojiCode;
  emojiNameEl.innerText = wholeString.substring(5);
});