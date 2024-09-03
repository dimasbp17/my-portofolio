import { useEffect, useState } from 'react';

const Typewriter = ({ texts, speed, loop }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (textIndex < texts.length - 1) {
      // Reset to start typing the next text
      const nextTextTimeoutId = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => prev + 1);
      }, speed * 10);

      return () => clearTimeout(nextTextTimeoutId);
    } else if (loop) {
      // Loop back to the first text
      const resetTimeoutId = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex(0);
      }, speed * 10);

      return () => clearTimeout(resetTimeoutId);
    }
  }, [charIndex, textIndex, texts, speed, loop]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
