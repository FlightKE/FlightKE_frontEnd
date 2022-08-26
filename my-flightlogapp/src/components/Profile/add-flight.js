import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./add-flight.css"
import { useState } from "react";






function AddFlight() {
const [departureLocation, setdepartureLocation] = useState("");
const [arrivalLocation,setarrivalLocation] = useState("");
const [ departureDate, setdepartureDate] = useState("");
const [arrivalDate, setarrivalDate] = useState("");
const [message, setMessage] = useState("");

   
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://localhost:3000/", {
            method: "POST",
            body: JSON.stringify({
              departureLocation: departureLocation,
              arrivalLocation: arrivalLocation,
              departureDate: departureDate,
              arrivalDate: arrivalDate,
              message: message

            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setdepartureLocation("");
            setarrivalLocation("");
            setdepartureDate("");
            setarrivalDate("")
            setMessage("User flight successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
    

    return(
        <div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="booking-cta">
							<h1>Book your flight today</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
						</div>
					</div>
					<div className="col-md-7 col-md-offset-1">
						<div className="booking-form">
							<form  onSubmit={handleSubmit}>
								<div className="form-group">
									<div className="form-checkbox">
										<label for="roundtrip">
											<input 
                                            type="radio" 
                                            id="roundtrip" 
                                            name="flight-type"
                                            />
											<span></span>Roundtrip
										</label>
										<label for="one-way">
											<input 
                                            type="radio" 
                                            id="one-way" 
                                            name="flight-type"/>
											<span></span>One way
										</label>
										<label for="multi-city">
											<input 
                                            type="radio" 
                                            id="multi-city" 
                                            name="flight-type"/>
											<span></span>Multi-City
										</label>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Flying from</span>
											<input 
                                            className="form-control" 
                                            type="text" 
                                            value={departureLocation}
                                            placeholder="City or airport"
                                            onChange={(e) => setdepartureLocation(e.target.value)}/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Flying to</span>
											<input 
                                            className="form-control" 
                                            type="text" 
                                            value={arrivalLocation}
                                            placeholder="City or airport"
                                            onChange={(e) => setarrivalLocation(e.target.value)} />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Departing</span>
											<input 
                                            className="form-control" 
                                            type="date" 
                                            value={departureDate}
                                            onChange={(e) => setdepartureDate(e.target.value) } />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Returning</span>
											<input 
                                            className="form-control" 
                                            type="date" 
                                            value={arrivalDate}
                                            onChange={(e) => setarrivalDate(e.target.value) } required/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4">
										<div className="form-group">
											<span className="form-label">Adults (18+)</span>
											<select className="form-control">
												<option>1</option>
												<option>2</option>
												<option>3</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group">
											<span className="form-label">Children (0-17)</span>
											<select className="form-control">
												<option>0</option>
												<option>1</option>
												<option>2</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group">
											<span className="form-label">Travel className</span>
											<select className="form-control">
												<option>Economy className</option>
												<option>Business className</option>
												<option>First className</option>
											</select>
											<span className="select-arrow"></span>
										</div>
									</div>
								</div>
								<div className="form-btn">
									<button className="submit-btn" type ="submit" >Add flight</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  };

  export default AddFlight;