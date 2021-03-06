import React from 'react'
import {Spinner} from 'react-bootstrap'

function LoadingSpinner() {
    return (
        <div className="d-flex w-100 justify-content-center" data-testid="spinner">
            <div className="d-flex">
                {
                    [1,2,3].map(x => 
                        <Spinner key={x} animation="grow" variant="primary" size="lg" style={{ height: '60px', width: '60px'}} />
                    )
                }
            </div>
        </div>
    );
}

export default LoadingSpinner