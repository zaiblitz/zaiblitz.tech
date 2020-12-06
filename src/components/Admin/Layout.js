import React from 'react';
import Sidebar from './Sidebar';

import { Redirect } from 'react-router-dom';
import { getToken } from '../../contexts/API';

function Layout(props) {
  return (
    <div className="md-admin">
      {!getToken() ? <Redirect from="/" to="signin" /> : ""}

      <div className="md-admin-header">Casino Admin</div>
      <Sidebar />
      {props.children}
    </div>
  )
}

export default Layout;