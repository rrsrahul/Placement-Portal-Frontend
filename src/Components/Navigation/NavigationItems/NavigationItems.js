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
              User Data 
           </NavigationItem>
           

        </ul>
    )
}

export default navigationItems;