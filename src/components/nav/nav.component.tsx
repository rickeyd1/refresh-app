import * as React from 'react';
import { Link } from 'react-router-dom';
import { IChuckNorrisState, IState } from '../../reducers';
import { connect } from 'react-redux';
import NavTileComponent from './nav-tile';

export interface INavProps {
    norris: IChuckNorrisState,
    currentUser?: any
}
 
export class NavComponent extends React.Component<INavProps> {
    render() { 
        return (
            <nav>
                <span>
                    <ul className="nav-list">
                        <li className="nav-tile">
                            <NavTileComponent />
                        </li>
                        <li className="nav-tile">
                            <NavTileComponent />
                        </li>
                    </ul>
                </span>
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

/* Important tags and stuff for reference */
/*
    <Link to="/home" className="unset-anchor">
        <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
    </Link>
*/

/*
    <ul className="navbar-nav ml-auto margin-nav">
        <li className="nav-item active">
            <Link to="/chuck-norris" className="unset-anchor nav-link">Norris</Link>
        </li>
        <li className="nav-item active">
            <Link to="/dashboard" className="unset-anchor nav-link">DashBoard</Link>
        </li>
    </ul>
*/