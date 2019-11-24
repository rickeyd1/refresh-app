import React from 'react';
import { IChuckNorrisState, IState } from '../../reducers';
import { buyJoke } from '../../actions/chuck-norris.actions';
import { connect } from 'react-redux';

export interface IChuckNorrisProps {
    norris: IChuckNorrisState
    buyJoke: () => void
}
 
export class ChuckNorrisComponent extends React.Component<IChuckNorrisProps> {
    render() {
        const {norris} = this.props;
        return (
            <div className="tile-sizing">
                <h1> {norris.joke} </h1>
                <button onClick={this.props.buyJoke}
                    className="btn btn-success"> New Joke </button>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        norris: state.chuckNorris,
    }
}

const mapDispatchToProps = {
    buyJoke: buyJoke
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisComponent);