import React, { forwardRef } from "react";
import TextHoverAnimation from "./TextHoverAnimation";

const AboutSection = forwardRef(({ data }, ref) => {
  const renderParagraph = (text) => {
    // Regex to find all links, including TextHoverAnimation directives
    const linkRegex = /\[(.+?)\]\((.+?)\)/g;
    const textHoverRegex = /^TextHoverAnimation:(.+)$/;
  
    const parts = [];
    let lastIndex = 0;
    let match;
  
    while ((match = linkRegex.exec(text)) !== null) {
      // Push the text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
  
      const linkContent = match[2];
      const displayText = match[1];
  
      // Check if the linkContent matches the TextHoverAnimation directive
      const textHoverMatch = textHoverRegex.exec(linkContent);
      console.log(textHoverMatch);
      if (textHoverMatch) {
        const color = textHoverMatch[1];
        parts.push(
          <TextHoverAnimation
            key={match.index}
            text={displayText}
            color={color}
          />
        );
      } else {
        // Otherwise, treat it as a normal anchor tag
        parts.push(
          <a
            key={match.index}
            href={linkContent}
            className="font-medium text-primaryColorLight hover:text-secondaryColor focus-visible:text-secondaryColor"
            target="_blank"
            rel="noopener noreferrer"
          >
            {displayText}
          </a>
        );
      }
  
      // Update the last index to the end of the current match
      lastIndex = linkRegex.lastIndex;
    }
  
    // Push any remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
  
    return parts;
  };
  

  return (
    <section
      id="about"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-headingBackGround/15 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primaryColorLight lg:sr-only">
          About
        </h2>
      </div>
      <div>
        {data.about.map((item, index) => (
          <p className="mb-4" key={index}>
            {renderParagraph(item.paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
});

export default AboutSection;
