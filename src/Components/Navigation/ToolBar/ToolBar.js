import React from 'react';
import classes from './ToolBar.module.css'
const toolbar= (props)=>
{
    return (
        <header className={classes.ToolBar}>
          <nav className={classes.DesktopOnly} >
            
          </nav>
        </header>
    )
}

export default toolbar;