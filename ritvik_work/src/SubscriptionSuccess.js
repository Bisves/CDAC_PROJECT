import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function SubscriptionSuccess() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 text-center" style={{ width: "400px" }}>
        <div className="card-body">
          <h2 className="text-success fw-bold">🎉 Subscription Successful!</h2>
          <p className="mt-3 text-muted">
            Thank you for subscribing! You now have full access to our premium features.
          </p>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionSuccess;
