import React from 'react'
import {SidebarContainer , Icon ,CloseIcon , SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './sidebarElementor';

const sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">pizza</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
export default sidebar;
