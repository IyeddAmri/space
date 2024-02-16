import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/Quiz">
            Quiz
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
