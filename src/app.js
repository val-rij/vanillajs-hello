// window.onload();
// {
//   const getRandomNumber = () => {
//     const random = Math.floor(Math.random() * 4);
//     return random;
//   };
//   const excuseGenerator = () => {
//     const who = ["The dog", "My grandma", "His turtle", "My bird"];
//     const action = ["ate", "peed", "crushed", "broke"];
//     const what = ["my homework", "the keys", "the car"];
//     const when = [
//       "before the class",
//       "right on time",
//       "when I finished",
//       "during my lunch",
//       "while I was praying"
//     ];
//     return `${who[getRandomNumber()]} ${action[getRandomNumber()]} ${
//       what[getRandomNumber()]
//     } ${when[getRandomNumber()]}`;
//   };
//   document.getElementById("excuse").innerHTML = excuseGenerator();
// }

window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });

  const getRandomNumber = () => {
    const random = Math.floor(Math.random() * 4);
    return random;
  };
  const excuseGenerator = () => {
    const who = ["The dog", "My grandma", "His turtle", "My bird"];
    const action = ["ate", "peed", "crushed", "broke"];
    const what = ["my homework", "the keys", "the car"];
    const when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    return `${who[getRandomNumber()]} ${action[getRandomNumber()]} ${
      what[getRandomNumber()]
    } ${when[getRandomNumber()]}`;
  };
};
