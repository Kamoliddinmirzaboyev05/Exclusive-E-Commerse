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
          <div className="leftLinks">
            <h2>Manage My Account</h2>
            <div className="leftDataLinks">
              <Link className="active">My Profile</Link>
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
              <h2 className="formTitle">Edit Your Profile</h2>
              <div className="row">
                <div className="rowItem">
                  <label>First Name</label>
                  <input required type="text" placeholder="Md" />
                </div>
                <div className="rowItem">
                  <label>Last Name</label>
                  <input required type="text" placeholder="Rimel" />
                </div>
              </div>
              <div className="row">
                <div className="rowItem">
                  <label>Email</label>
                  <input required type="text" placeholder="rimel1111@gmail.com" />
                </div>
                <div className="rowItem">
                  <label>Address</label>
                  <input required type="text" placeholder="Kingston, 5236, United State" />
                </div>
              </div>
              <div className="passwordChanges">
                <h2>Password Changes</h2>
                <input required type="password" placeholder="Current Password" />
                <input required type="password" placeholder="New Password" />
                <input required type="password" placeholder="Confirim New Password" />
                <div className="formBtns">
                  <button className="cancelBtn">Cancel</button>
                  <button className="viewBtn">Save Changes</button>
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
