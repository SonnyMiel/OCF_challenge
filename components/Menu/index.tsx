import { useState } from 'react';

import styles from './index.module.scss';

export interface MenuProps {
}

export const Menu: React.FC<MenuProps>  = (props: MenuProps) => {
  return (
    <div className="container">
      <a>Logo</a>
      <div className="links">
        <div className="innerLinks">
          <span>Browse</span>
          <span>Social</span>
          <span>Forum</span>
        </div>
        <div className="actions">
          <button>Login</button>
          <button className="btn-secondary">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
