import React from "react";

export default function FooterSection({data}) {
  const renderParagraph = (text) => {
    // Regex to find all links (text inside square brackets and URLs inside parentheses)
    const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  
    const parts = [];
    let lastIndex = 0;
    let match;
  
    while ((match = linkRegex.exec(text)) !== null) {
      // Push the text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
  
      // Push the anchor tag as a React element
      parts.push(
        <a
          key={match.index}
          href={match[2]} // Treat everything inside () as a link
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>
      );
  
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
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
      {renderParagraph(data.footer)}
      </p>
    </footer>
  );
}
