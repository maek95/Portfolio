import ThemeButton from "./ThemeButton";

export default function Header({ children }) {
  return (
    <header className="fixed top-0 left-0 right-0 p-5 flex justify-between bg-white dark:bg-[#23272F]">
      <div className="flex flex-row items-center justify-center gap-4">
        {/*profile picture + name */}
        <div className="flex">
          <a
            className=""
            href="https://github.com/maek95"
            data-hotkey="g d"
            aria-label="Homepage"
            data-turbo="false"
            data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
          >
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="fill-black dark:fill-white"
            > {/* // ändrar fill beroende på dark/light mode! */}
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        </div>
        <div>
          <h4 className="">Marcus Ekström</h4> 
        </div>
      </div>

      <div className="flex flex-row gap-4 sm:gap-0 ">
        {" "}
        {/* // contact info */}
        {/* <img
          className="flex sm:hidden text-white fill-black dark:fill-white"
          src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
          alt="hamburger menu"
        /> */}
         <div className="flex items-center">
          <svg
          height="32px"
          id="Layer_1"
          style={{ enableBackground: 'new 0 0 32 32' }}
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="dark:fill-white flex sm:hidden" 
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
          </svg>
        </div>
        <ul className=" hidden sm:flex flex-row sm:gap-4 items-center justify-center font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li className="hidden sm:flex items-center justify-center">{children}</li> {/* // ThemeButton.jsx */}
        </ul>
        <li className="flex sm:hidden items-center justify-center">{children}</li> {/* // ThemeButton.jsx */}
      </div>
    </header>
  );
}
