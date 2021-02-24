import React, { Component } from 'react';
import ToolBar from '../../Components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'
import classes from './Layout.module.css'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <ToolBar
                    clicked={this.sideDrawerOpenHandler}
                    isAuth={this.props.isAuth} isAdmin={this.props.isAdmin} /></div>
                <SideDrawer
                    isAuth={this.props.isAuth}
                    isAdmin={this.props.isAdmin}
                    closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
                <main className={classes.Content}> {this.props.children}</main>
            </React.Fragment>
        )

    }
}

export default Layout;