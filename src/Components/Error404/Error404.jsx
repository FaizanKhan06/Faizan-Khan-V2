import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <div>
          <h1
            class="next-error-h1"
            style={{
              display: "inline-block",
              margin: "0 20px 0 0",
              paddingRight: "23px",
              fontSize: "24px",
              fontWeight: "500",
              verticalAlign: "top",
              lineHeight: "49px",
            }}
          >
            404
          </h1>
          <div style={{ display: "inline-block", textAlign: "left" }}>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "49px",
                margin: "0",
              }}
            >
              This page could not be found.
            </h2>
          </div>
        </div>
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-secondaryColor"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Faizan Khan
        </Link>
      </div>
    </>
  );
}
