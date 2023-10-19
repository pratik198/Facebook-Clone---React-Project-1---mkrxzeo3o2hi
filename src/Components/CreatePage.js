import React from "react";
import "../Styles/CreatePage.css";
import { useState } from "react";
function CreatePage() {
  return (
    <div className="CreatePage">
      <div className="page__container">
        <h5>Pages - Create a Page</h5>
        <h2>Create a Page</h2>
        <p>
          Your Page is where people go to learn <br />
          more about you.Make sure that yours has <br />
          all of the information they may need
        </p>

        <div className="page-name">
          <form>
            <input
              className="page-name-required"
              type="text"
              placeholder="Page name(required)"
            />
            <p>Use the name of your business.brand or organisation or a <br/> name that helps explain your Page.<span>Learn more</span></p>
            <input
              className="page-name-required"
              type="text"
              placeholder="Catagory(required)"
            />
            <p>Enter a catagory that beest describes you.</p>
            <input
              className="page-bio"
              type="text"
              placeholder="Bio(optional)"
            />
            <p>Tell people a little about what you do.</p>
            <div className="Create-btn">
              <button type="submit" className="Create-page-btn">
                  Create page
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
