import * as React from 'react';
import { Component } from 'react';

export interface INavTileProps {
    
}
 
export interface INavTileState {
    
}
 
class NavTileComponent extends React.Component<INavTileProps, INavTileState> {
    
    render() { 
        return (
            <>
                <div className="tile-sizing">
                    <h1>Nav Tile</h1>
                </div>
            </>
        );
    }
}
 
export default NavTileComponent;