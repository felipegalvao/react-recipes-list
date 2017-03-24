import React, { Component } from 'react';

class MainApp extends Component {
    render() {
        return (
            <div className="grid">
                <div className="container">
                    <div className="row">
                        <div className="col-2">Col 2</div>
                        <div className="col-10">Col 10</div>
                    </div>
                    <div className="row">
                        <div className="col-5">Col 5</div>
                        <div className="col-7">Col 7</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainApp;