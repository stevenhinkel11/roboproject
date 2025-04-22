function talkToFredBot() {
  const phrase = prompt("What do you want to say to FredBot?");
  if (!phrase) return;

  const msg = phrase.toLowerCase();
  let response = "";

  if (msg.includes("joke")) {
    response = "Why don't robots ever get scared? Because they have nerves of steel!";
    changeExpression('laughing');
  } else if (msg.includes("believe")) {
    response = "I believe in you too!";
    changeExpression('smiling');
  } else if (msg.includes("mean")) {
    response = "That hurt my feelings... 😢";
    changeExpression('crying');
  } else if (msg.includes("cute")) {
    response = "How cute!";
    changeExpression('smiling');
  } else if (msg.includes("gross")) {
    response = "Gross.";
    changeExpression('sneering');
  } else if (msg.includes("great job")) {
    response = "Great job!";
    changeExpression('smiling');
  } else if (msg.includes("oh yeah")) {
    response = "Oh yeah!";
    changeExpression('smiling');
  } else if (msg.includes("scared")) {
    response = "I'm scared! 😱";
    changeExpression('scared');
  } else {
    response = "I don't understand that command. Can I help with something else?";
    changeExpression('neutral');
  }

  // Use SpeechSynthesis to make FredBot talk
  const speech = new SpeechSynthesisUtterance(response);
  speechSynthesis.speak(speech);
}

function changeExpression(expression) {
  const face = document.getElementById('face');
  face.className = expression;
}
