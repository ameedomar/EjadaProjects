function calculateCount() {
  if (document.getElementById("sentence").value.length > 0) {
    var sentence = document.getElementById("sentence").value;
    var words = sentence.split(" ").filter((item) => item.trim().length > 0);
    // 1. Hello
    // 2.evryone
    var countOfCharacters = 0;

    for (var i = 0; i < words.length; i++) {
      countOfCharacters += words[i].length;
    }

    document.getElementById("countW").innerHTML = words.length;
    document.getElementById("countC").innerHTML = countOfCharacters;
  } else {
    document.getElementById("countW").innerHTML = 0;
    document.getElementById("countC").innerHTML = 0;
  }
}
