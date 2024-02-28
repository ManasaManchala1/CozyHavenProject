import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5272/api/Hotel/GetAllHotels")
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5272/api/Hotel/DeleteHotel?id=${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setHotels(hotels.filter((hotel) => hotel.hotelId !== id));
          alert("Deleted Successfully")
        } else {
          console.error('Failed to delete hotel');
          alert("Failed to delete")
        }
      })
      .catch((error) => console.error('Error deleting hotel:', error));
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title mt-5">Hotels</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body booking_card">
                <div className="table-responsive">
                  <table className="datatable table table-stripped table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Hotel ID</th>
                        <th>Destination ID</th>
                        <th>Owner ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotels.map((hotel) => (
                        <tr key={hotel.hotelId}>
                          <td>{hotel.hotelId}</td>
                          <td>{hotel.destinationId}</td>
                          <td>{hotel.ownerId}</td>
                          <td>{hotel.name}</td>
                          <td>{hotel.address}</td>
                          <td>{hotel.description}</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-ellipsis-v ellipse_color" />
                              </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                            <Link to="/edit-hotel" className="dropdown-item"><i className="fas fa-pencil-alt m-r-5" /> Edit</Link>
                            <Link to="#" className="dropdown-item" onClick={() => handleDelete(hotel.hotelId)}>
                            <i className="fas fa-trash-alt m-r-5" /> Delete
                            </Link>
                            </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllHotels;
