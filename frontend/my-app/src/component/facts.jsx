import React from 'react';
import Link from 'next/link';

function facts() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/fact">
            fact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default facts;
