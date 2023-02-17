import React from 'react';
import Siderbar from '../components/Sidebar/Siderbar';

const Layout = ({ children }) => {
  return (
    <main className="d-flex">
      <Siderbar />
      <section className="w-full">{children}</section>
    </main>
  );
};

export default Layout;
