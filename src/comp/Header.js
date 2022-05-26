import React from 'react';
export default function Header() {
  return (
    <header>
      <div className="logo">logoname</div>
      <div className="menu">
        <ul>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>services</a>
            <ul>
              <li>
                <a>services1</a>
              </li>
              <li>
                <a>services2</a>
              </li>
              <li>
                <a>services3</a>
              </li>
              <li>
                <a>services4</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
