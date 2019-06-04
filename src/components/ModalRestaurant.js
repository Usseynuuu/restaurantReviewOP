import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';


export const ModalRestaurant = props => (

            <div className="card">
                    <h5 className="card-body">{props.restaurant.restaurantName}</h5>
                        <div className="modal-body">
                            <p>{props.restaurant.address}</p>
                        </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-dark">Stars : {props.restaurant.ratings[0].stars}</button>
                </div>
            </div>



);