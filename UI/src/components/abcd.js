import React, { Component } from 'react'

class abcd extends Component {
    render() {
        const arr = [1,2,3,4]
        let train = JSON.parse(localStorage.getItem("train"));
        return (
            <div>
                <div>
                    {
                        
                            <div >
                                <p>{arr}</p>
                            </div>
                    
                    }
                </div>
            </div>
        )
    }
}

export default abcd
