import React from 'react';
import ContentSection from './ContentSection';
import ButtonAppBar from './NavBar';
// import SideBar from './SideBar';

const MainHomePage = () => {
  return (
    <div>
      <ButtonAppBar />
      {/* <SideBar /> */}
      <ContentSection />
    </div>
  );
};

export default MainHomePage;
