import React from "react";

export default function Header() {
  return (
    <>
      <div className="h-16 w-[100%] bg-white flex justify-between items-center p-8">
        <div>
          <img alt="bookmark-logo" src="images/logo-bookmark.svg " />
        </div>
        <div>
          <img alt="hamburger-icon" src="images/icon-hamburger.svg" />
        </div>
      </div>
    </>
  );
}
