import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// import  Footer  from '../Footer';
import { Box, Container } from '@mui/material';
import MainNavbar from './main-navbar';


interface MainLayoutProps {
  children?: ReactNode;
}


export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  //const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <Box sx={{
      minHeight:'100vh',
      display:'flex',
      flexDirection:'column'
    }}>
     <Box><MainNavbar/></Box> 
     <Box sx={{flexGrow:1}}/>
      <Container sx={{py:20}}>{children}</Container>
      <Box sx={{flexGrow:1}}/>
      {/* <Box><Footer /></Box> */}
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};