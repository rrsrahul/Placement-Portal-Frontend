import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = (props)=>
{
    return (
        <ul className={classes.NavigationItems}>
           <NavigationItem link="/" >
               Schedule
           </NavigationItem>
          <NavigationItem link="/auth">
              Login
           </NavigationItem>
           <NavigationItem link="/company">
              Add Company
           </NavigationItem>
           <NavigationItem link="/user">
              Add User
           </NavigationItem>

        </ul>
    )
}

export default navigationItems;