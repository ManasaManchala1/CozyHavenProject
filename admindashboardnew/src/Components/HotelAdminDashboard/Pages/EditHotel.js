import React, { useState, useEffect } from "react";

const EditHotel = ({ match }) => {
  const [hotelData, setHotelData] = useState({
    destinationId: "",
    ownerId: "",
    name: "",
    address: "",
    description: ""
  });

  useEffect(() => {
    fetch("http://localhost:5272/api/Hotel/GetHotelById/")
      .then((response) => response.json())
      .then((data) => setHotelData(data))
      .catch((error) => console.error("Error fetching hotel:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData({
      ...hotelData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5272/api/Hotel/UpdateHotel`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(hotelData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, redirect to a different page after successful update
      })
      .catch((error) => {
        console.error("Error updating hotel:", error);
      });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Edit Hotel</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="row formtype">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Destination ID</label>
                    <input
                      className="form-control"
                      type="text"
                      name="destinationId"
                      value={hotelData.destinationId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Owner ID</label>
                    <input
                      className="form-control"
                      type="text"
                      name="ownerId"
                      value={hotelData.ownerId}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={hotelData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      value={hotelData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={hotelData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary buttonedit1">
                Update Hotel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
