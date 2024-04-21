export default function parseRss(content: string) {
  const MAX_CHAR_COUNT = 250;
  let charCount = 0;
  const regEx = new RegExp(/|^\w\s]l_/g);
  const contentBlurb = content
    .split("<p>")[1]
    .split(" ")
    .map((word) => {
      if (charCount < MAX_CHAR_COUNT) {
        charCount += word.length;
        return word;
      } else if (charCount === MAX_CHAR_COUNT) {
        charCount += 1;
        // adding the ellipsis to the end.
        if (regEx.test(word[word.length - 1])) {
          return `${word.split("").slice(0, -1).join("")}...`;
          // Otherwise, if the last character is not found in the regular
          // expression, we'll simply return the word with the ellipsis
          // attached.
        } else {
          return `${word}...`;
        }
      } else {
        return null;
      }
    })
    .join(" ");

  return contentBlurb.replace(/<[^>]*>?/gm, "");
}
