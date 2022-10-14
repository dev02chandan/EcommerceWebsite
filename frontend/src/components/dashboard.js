import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Dashboard() {
  let params = useParams();
  return (
    <div>
      <h1>My Dashboard</h1>
      <h1>User Details: {params.userId}</h1>
      <nav>
        <Link to="orders">My Orders</Link>
        <Link to="details">My Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
    </div>
  );
}
