import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const SingleVehicleView = props => {

    const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(() => {
        actions.getSingleVehicle(params.theid)
    }, []);

    return (
    <>
    <div className="container-fluid bg-dark bgimage">
		<div className="container text-light pt-5 pb-5">
            <div className="pt-3 pb-3 d-flex justify-content-around">
                <div className="col-5">
                    <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + params.theid + ".jpg"} className="card-img-top border border-danger" alt="..." ></img>
                </div>
                <div className="col-7">
                    <div className="fs-3 ms-5 fw-bold mb-3 text-danger border-bottom border-danger border-5">{store.singleVehicle.name}</div>
                    <div className="fs-5 ms-5 text-light">Model: {store.singleVehicle.model}</div>
                    <div className="fs-5 ms-5 text-light">Manufacturer: {store.singleVehicle.manufacturer}</div>
                    <div className="fs-5 ms-5 text-light">Class: {store.singleVehicle.vehicle_class}</div>
                    <div className="fs-5 ms-5 text-light">Cost: {store.singleVehicle.cost_in_credits}</div>
                    <div className="fs-5 ms-5 text-light">Speed: {store.singleVehicle.max_atmosphering_speed}</div>
                    <div className="fs-5 ms-5 text-light">Length: {store.singleVehicle.length}</div>
                    <div className="fs-5 ms-5 text-light">Cargo Capacity: {store.singleVehicle.cargo_capacity}</div>
                    <div className="fs-5 ms-5 text-light">Crew: {store.singleVehicle.crew}</div>
                    <div className="fs-5 ms-5 text-light">Passengers: {store.singleVehicle.passengers}</div>
                    <div className="fs-5 ms-5 text-light">Consumables: {store.singleVehicle.consumables}</div>
                    <Link to="/">
                        <button className="fs-5 ms-5 mt-5 text-light btn btn-danger">Return Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default SingleVehicleView