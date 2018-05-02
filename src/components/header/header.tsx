import * as React from 'react';
import Link from 'gatsby-link';
import './styles.scss';

let Header = ({ siteTitle }) => (
  <div className='background_header'>
    <div className='box_title'>
      <h1 className='title_header'>
        <Link className='title_header' to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
