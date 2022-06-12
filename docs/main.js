const codeInput = document.getElementsByName("ascii-code")[0];
const characterPara = document.getElementById("character");
const characterGroupPara = document.getElementById("character-group");
const commentPara = document.getElementById("comment");
const commentSourcePara = document.getElementById("comment-source");

let asciiData = null;
async function getAsciiCharacter(code) {
  if (!asciiData) {
    asciiData = await fetch("data.json").then(r => r.json());
  }
  return asciiData[code];
}

async function displayInfo(code) {
  const asciiCharacter = await getAsciiCharacter(code);
  if (asciiCharacter) {
    characterPara.innerText = asciiCharacter.value;
    characterGroupPara.innerText = asciiCharacter.group;
    commentPara.innerText = asciiCharacter.comment.text;

    const source = asciiCharacter.comment.source || "https://en.wikipedia.org/wiki/ASCII#Printable_characters";
    commentSourcePara.href = asciiCharacter.comment.source;
  }
}

codeInput.addEventListener("input", (e) => {
  displayInfo(e.target.value);
});

displayInfo(codeInput.value || 0);
