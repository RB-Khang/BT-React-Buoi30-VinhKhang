import React from 'react'

const Item = () => {
    return (
        <div className="col-3 mt-2">
            <div className="mb-3" style={{
                backgroundColor: '#F8F9FA',
                height: 200, 
                
            }}>
                <p className='text-center pt-5'>500 x 325</p>
            </div>
            <div className="card-body text-center px-4">
                <h2 className='pb-2'>Cart title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non assumenda veniam velit quia deserunt.</p>
            </div>
            <div className="cart-footer bg-light text-center py-3 border-top">
                <a className="btn btn-primary btn-lg" href="#!">Find out more!</a>
            </div>

        </div>

    )
}

export default Item
