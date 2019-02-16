import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';

import * as actions from '../actions/Shell';

import NavMenu from '../components/NavMenu';
import LibraryNavigator from '../components/Libraries/LibraryNavigator'


const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButtonLeft: {
        marginLeft: 12,
        marginRight: 20,
    },
    menuButtonRight: {
        marginLeft: 20,
        marginRight: 12,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    leftDrawerHeader: {
        justifyContent: 'flex-end',
    },
    rightDrawerHeader: {
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        marginRight: -drawerWidth,
    },
    contentShiftLeft: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    contentShiftRight: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    grow: {
        flexGrow: 1,
    },
});

class Shell extends React.Component {

    render() {
        const { classes, theme, children } = this.props;
        const {
            toogleLeftNavigator,
            toogleRightNavigator,
            leftNavigatorOpen, 
            rightNavigatorOpen
        } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    className={classes.appBar}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={toogleLeftNavigator}
                            className={classNames(classes.menuButtonLeft, leftNavigatorOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.grow}>
                            <NavMenu />
                        </div>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={toogleRightNavigator}
                            className={classNames(classes.menuButtonRight, rightNavigatorOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={leftNavigatorOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader} />
                    <LibraryNavigator />
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShiftLeft]: leftNavigatorOpen,
                        [classes.contentShiftRight]: rightNavigatorOpen,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <Container>
                        {children}
                    </Container>
                </main>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={rightNavigatorOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    right drawer goes here
                </Drawer>
            </div>
        );
    }
}

Shell.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect(
    state => state.shell,
    dispatch => bindActionCreators(actions, dispatch)
)(withStyles(styles, { withTheme: true })(withRouter((Shell))));
