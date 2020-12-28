import React, { Component } from 'react';
import Toolbar from '../../Components/Navigation/ToolBar/ToolBar';
import classes from './Layout.module.css'

class Layout extends Component{

    render()
    {
        return (
            <React.Fragment>
                <Toolbar isAuth={this.props.isAuth}/>
                <main className={classes.Content}> {this.props.children}</main>
             </React.Fragment>
        )

    }
}

export default Layout;