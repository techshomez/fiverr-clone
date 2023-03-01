import { Link } from "react-router-dom";
import "./MyGigs.scss";

const MyGigs = () => {
  return (
    <div className="mygigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">Add New Gig</Link>
        </div>
        <table>
          <tr>Image</tr>
          <tr>Title</tr>
          <tr>Price</tr>
          <tr>Orders</tr>
          <tr>Action</tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
