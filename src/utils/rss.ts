export default function parseRss(content: string) {
  let counter = 0;
  const regEx = new RegExp(/|^\w\s]l_/g);
  const contentBlurb = content
    .split("<p>")[1]
    .split(" ")
    .map((word) => {
      if (counter < 30) {
        counter += 1;
        return word;
      } else if (counter === 30) {
        counter += 1;
        // adding the ellipsis to the end.
        if (regEx.test(word[word.length - 1])) {
          return `${word.split("").slice(0, -1).join("")}...`;
          // Otherwise, if the last character is not found in the regular
          // expression, we'll simply return the word with the ellipsis
          // attached.
        } else {
          return "${word}...";
        }
      } else {
        return null;
      }
    })
    .join(" ");

  return contentBlurb;
}
