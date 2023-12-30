import React from 'react';
import { Wrapper } from './styles';

import Link from 'next/link';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Wrapper>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <nav>
        <ul>
          <li>
            <Link href="/">
            
            </Link>
          </li>
          <li>
            <Link href="/contact">
            
            </Link>
          </li>
          <li>
            <Link href="/about">

            </Link>
          </li>
          <li>
            <Link href="/process">
            
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </Wrapper>
  );
};

export default Sidebar;



