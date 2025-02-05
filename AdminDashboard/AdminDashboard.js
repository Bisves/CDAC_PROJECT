import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  // Sample users and vendors
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", deleted: false },
    { id: 2, name: "Jane Smith", email: "jane@example.com", deleted: false },
  ]);

  const [vendors, setVendors] = useState([
    { id: 1, name: "Vendor A", service: "Gas Supply", deleted: false },
    { id: 2, name: "Vendor B", service: "Maintenance", deleted: false },
  ]);

  // Soft delete user
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.map((user) => (user.id === id ? { ...user, deleted: true } : user)));
    }
  };

  // Soft delete vendor
  const handleDeleteVendor = (id) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      setVendors(vendors.map((vendor) => (vendor.id === id ? { ...vendor, deleted: true } : vendor)));
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="text-center text-white py-3">Admin Panel</h2>
        <ul className="nav flex-column">
          <li className={`nav-item ${activeTab === "users" ? "active" : ""}`} onClick={() => setActiveTab("users")}>
            <i className="bi bi-people"></i> Users List
          </li>
          <br/>
          <li className={`nav-item ${activeTab === "vendors" ? "active" : ""}`} onClick={() => setActiveTab("vendors")}>
            <i className="bi bi-building"></i> Vendors List
          </li>
          <br/>
          <li className={`nav-item ${activeTab === "Statistics" ? "active" : ""}`} onClick={() => setActiveTab("Statistics")}>
            <i className="bi bi-building"></i> Statistics 
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content p-4">
        <h2 className="mb-4">{activeTab === "users" ? "Users List" : " "}</h2>
        <h2 className="mb-4">{activeTab === "vendors" ? "Vendors List" : " "}</h2>
        <h2 className="mb-4">{activeTab === "Statistics" ? "Statistics Report" : " "}</h2>

        {/* Users Table */}
        {activeTab === "users" && (
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => !user.deleted)
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}

        {/* Vendors Table */}
        {activeTab === "vendors" && (
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Service</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors
                .filter((vendor) => !vendor.deleted)
                .map((vendor) => (
                  <tr key={vendor.id}>
                    <td>{vendor.id}</td>
                    <td>{vendor.name}</td>
                    <td>{vendor.service}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteVendor(vendor.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
