// import React from 'react'
// import SocialLink from './SocialLink';
// import PageLinks from './PageLinks';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-menu">
//         <PageLinks groupName='meun-list' itemName='menu-item' />
//       </div>
//       <div className="footer-icon-menu">
//         <SocialLink/>
//       </div>
//       <p>Copyright &copy; <span id="date">{new Date().getFullYear()}</span> All Rights Reserved
//       </p>
//     </footer>
//   )
// };

// export default Footer;

import SocialLink from "./SocialLink";
import PageLinks from "./PageLinks";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-menu'>
        <PageLinks groupName='menu-list' itemName='menu-item' />
      </div>
      <div className='footer-icon-menu'>
        <SocialLink />
      </div>
      <p>
        Copyright &copy; <span id='date'>{new Date().getFullYear()}</span> All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
