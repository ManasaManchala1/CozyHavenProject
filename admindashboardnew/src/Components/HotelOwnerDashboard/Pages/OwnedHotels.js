import React from 'react';

function OwnedHotels() {
  const hotels = JSON.parse(sessionStorage.getItem('hotels')) || [];

  const handleHotelSelection = (hotelId,name) => {
    sessionStorage.setItem('selectedHotelId', hotelId);
    sessionStorage.setItem('name',name);
    // Redirect to the owner dashboard for the selected hotel
    window.location.href = '/owner-dashboard';
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <h3 className="page-title">Owned Hotels</h3>
        </div>
        <div className="row">
          {hotels.map((hotel) => (
            <div key={hotel.hotelId} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">{hotel.address}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleHotelSelection(hotel.hotelId,hotel.name)}
                  >
                    Select Hotel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OwnedHotels;
