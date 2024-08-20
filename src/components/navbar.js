// src/components/navbar.js

import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/kali-tools">Kali Tools</a>
        </li>
        <li>
          <a href="/dorkscanner">Dork Scanner</a>
        </li>
        <li>
          <a href="/gpt-jailbreak">GPT Jailbreak</a>
        </li>
        <li>
          <a href="/naabu">Naabu Scanner</a>
        </li>
        <li>
          <a href="/hackingtool">Hacking Tools</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
