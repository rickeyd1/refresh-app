import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../../assets/rev-logo.png';
import { IChuckNorrisState, IState } from '../../reducers';
import { connect } from 'react-redux';

export interface INavProps {
    norris: IChuckNorrisState,
    currentUser?: any
}
 
export class NavComponent extends React.Component<INavProps> {
    render() { 
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-dark bg-dark display-front nav-pad">
            <div className="navbar-header c-pointer shift-left">
              <Link to="/home" className="unset-anchor">
                <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
              </Link>
            </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        norris: state.chuckNorris
    }
}
 
export default connect(mapStateToProps)(NavComponent);