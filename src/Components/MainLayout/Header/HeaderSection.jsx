import React, { useState } from "react";

export const HeaderSection = ({ currentSection, data }) => {
  const [links, setLinks] = useState(data.Links);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-primaryColorLight sm:text-5xl">
          <a href="/">{data.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primaryColorLight sm:text-xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {data.subtitle}
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className={`${'nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-secondaryColor group-focus-visible:w-16 group-focus-visible:bg-secondaryColor motion-reduce:transition-none'} ${currentSection === 'about' ? 'w-16 bg-primaryColorLight ' : 'w-8 bg-primaryColor '}`}></span>
                <span className={`${'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-secondaryColor group-focus-visible:text-secondaryColor'} ${currentSection === 'about' ? 'text-primaryColorLight': 'text-slate-500'}`}>
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className={`${'nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-secondaryColor group-focus-visible:w-16 group-focus-visible:bg-secondaryColor motion-reduce:transition-none'} ${currentSection === 'experience' ? 'w-16 bg-primaryColorLight ' : 'w-8 bg-primaryColor '}`}></span>
                <span className={`${'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-secondaryColor group-focus-visible:text-secondaryColor'} ${currentSection === 'experience' ? 'text-primaryColorLight': 'text-slate-500'}`}>
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className={`${'nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-secondaryColor group-focus-visible:w-16 group-focus-visible:bg-secondaryColor motion-reduce:transition-none'} ${currentSection === 'projects' ? 'w-16 bg-primaryColorLight ' : 'w-8 bg-primaryColor '}`}></span>
                <span className={`${'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-secondaryColor group-focus-visible:text-secondaryColor'} ${currentSection === 'projects' ? 'text-primaryColorLight': 'text-slate-500'}`}>
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#skills">
                <span className={`${'nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-secondaryColor group-focus-visible:w-16 group-focus-visible:bg-secondaryColor motion-reduce:transition-none'} ${currentSection === 'skills' ? 'w-16 bg-primaryColorLight ' : 'w-8 bg-primaryColor '}`}></span>
                <span className={`${'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-secondaryColor group-focus-visible:text-secondaryColor'} ${currentSection === 'skills' ? 'text-primaryColorLight': 'text-slate-500'}`}>
                  Skills
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {
          links.mail.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.mail.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.mail.title} (opens in a new tab)`}
              title={`${links.mail.title}`}
            >
              <span className="sr-only">{links.mail.title}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.tel.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.tel.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.tel.title} (opens in a new tab)`}
              title={`${links.tel.title}`}
            >
              <span className="sr-only">{links.tel.title}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.github.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.github.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.github.title} (opens in a new tab)`}
              title={`${links.github.title}`}
            >
              <span className="sr-only">{links.github.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.linkedin.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.linkedin.title} (opens in a new tab)`}
              title={`${links.linkedin.title}`}
            >
              <span className="sr-only">{links.linkedin.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.instagram.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.instagram.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.instagram.title} (opens in a new tab)`}
              title={`${links.instagram.title}`}
            >
              <span className="sr-only">{links.instagram.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.twitter.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.twitter.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.twitter.title} (opens in a new tab)`}
              title={`${links.twitter.title}`}
            >
              <span className="sr-only">{links.twitter.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.leetcode.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.leetcode.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.leetcode.title} (opens in a new tab)`}
              title={`${links.leetcode.title}`}
            >
              <span className="sr-only">{links.leetcode.title}</span>
              <svg viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 max-w-none">
                <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
        )}
        {
          links.codePen.display && (
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-secondaryColor"
              href={links.codePen.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${links.codePen.title} (opens in a new tab)`}
              title={`${links.codePen.title}`}
            >
              <span className="sr-only">{links.codePen.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                  strokeWidth="5"
                ></path>
              </svg>
            </a>
          </li>
        )}
      </ul>
    </header>
  );
};
