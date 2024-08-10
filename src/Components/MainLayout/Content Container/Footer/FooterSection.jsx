import React from "react";

export default function FooterSection() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
      Loosely designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Figma
        </a>{" "}
        and brought to life in {" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly, this masterpiece was built with {" "}
        <a
          href="https://react.dev/"
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="React.js (opens in a new tab)"
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , and launched into the digital stratosphere via{" "}
        <a
          href="https://pages.github.com/"
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub Pages (opens in a new tab)"
        >
          GitHub Pages
        </a>
        . All text is dressed in the ever-dapper{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-secondaryColor focus-visible:text-secondaryColor"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </a>{" "}
        typeface—because even code deserves to look good!
      </p>
    </footer>
  );
}
