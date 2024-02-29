import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function AllUsers() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:5272/api/User/GetAllUsers')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);
  const handleDelete = (username) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
    fetch(`http://localhost:5272/api/User/DeleteUser?username=${username}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setUsers(users.filter((user) => user.username !== username));
          alert("Deleted Successfully")
        } else {
          console.error('Failed to delete user');
          alert("Failed to delete")
        }
      })
      .catch((error) => console.error('Error deleting user:', error));
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <div className="mt-5">
                <h4 className="card-title float-left mt-2">Users</h4>
              </div>
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
                        <th>User ID</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Role</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.userId}>
                          <td>{user.userId}</td>
                          <td>{user.username}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.contactNumber}</td>
                          <td>{user.role}</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link to="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                              <i className="fas fa-ellipsis-v ellipse_color" />
                              </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                            <Link to={`edit-user/${user.username}`} className="dropdown-item">
                                  <i className="fas fa-pencil-alt m-r-5" /> Edit
                            </Link>
                            <Link to="#" className="dropdown-item" onClick={() => handleDelete(user.username)}>
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

export default AllUsers;
