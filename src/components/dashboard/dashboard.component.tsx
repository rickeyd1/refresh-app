import * as React from 'react';
import { Component } from 'react';

export interface IDashBoardProps {
    
}

 
class DashBoardComponent extends React.Component<IDashBoardProps> {
    
    render() { 
        return (
            <>
                <div className="tile-sizing">
                    <h1>DashBoardComponent works!!</h1> 
                </div> 
            </>
        );
    }
}
 
export default DashBoardComponent;