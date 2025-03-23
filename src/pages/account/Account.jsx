import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
function Account() {
  return (
    <div className="accountPage">
      <div className="container">
        <div className="pageTop">
          <div className="pageWay">
            <p>Home</p>
            <p>/</p>
            <p className="activePage">My Account</p>
          </div>
          <p className="welcomeLink">
            Welcome! <Link>Md Rimel</Link>
          </p>
        </div>
        <div className="mainContent">
          <div className="leftData">
            <h2>Manage My Account</h2>
            <div className="leftDataLinks">
              <Link>My Profile</Link>
              <Link>Address Book</Link>
              <Link>My Payment Options</Link>
            </div>
            <h2>My Orders</h2>
            <div className="leftDataLinks">
              <Link>My Returns</Link>
              <Link>My Cancellations</Link>
            </div>
          </div>
          <div className="rightForm">
            <form action="#">
             <h2>Edit Your Profile</h2>
             <div className="row">
              <div className="rowItem">
                <label>First Name</label>
                <input type="text" placeholder="Md" />
              </div>
              <div className="rowItem">
                <label>Last Name</label>
                <input type="text" placeholder="Rimel" />
              </div>
             </div>
             <div className="row">
              <div className="rowItem">
                <label>First Name</label>
                <input type="text" placeholder="Md" />
              </div>
              <div className="rowItem">
                <label>Last Name</label>
                <input type="text" placeholder="Rimel" />
              </div>
             </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
