// import React from "react";
// import "./Header.css";
//
// export const Header = ()=>{
//     return (
//         <header className="App-header">
//             <div className="logo-container">
//                 <img src={'https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png'} className="App-logo" alt="logo" /><span
//                 className="keep">Keep</span>
//             </div>
//         </header>
//     );
// }

import React from 'react';

import { styled } from '@mui/material/styles';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';

import { useLocation } from 'react-router-dom';

const Navbar = styled(AppBar)`
    z-index: ${(props: { theme: { zIndex: { drawer: number; }; }; }) => props.theme.zIndex.drawer + 1};
    background-color: #fff;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
    color : #5f6368;
    font-size: 22px;
    padding: 0 0 0 15px;
`;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const Header = () => {

    const location = useLocation();
    const pathName = capitalize(location.pathname.substring(1));
    const handleRefreshIconClick = () =>{
        window.location.href="/";
    }

    return (
        <Navbar >
            <Toolbar>
                {/*<div >*/}
                    <IconButton
                        // onClick={handleDrawer}
                        edge="start"
                        sx={{ marginRight: 5 }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {
                            pathName ? "" : <img src={'https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png'} alt="logo" style={{ width: 30 }} />
                        }
                        <Heading>{pathName || 'Keep'}</Heading>
                    </Box>
                {/*</div>*/}
                {/*<div>*/}
                    <IconButton
                        onClick={handleRefreshIconClick}
                        sx={{ marginRight: 5 }}>
                        <RefreshIcon />
                    </IconButton>

                {/*</div>*/}


            </Toolbar>
        </Navbar>
    )
}

export default Header;