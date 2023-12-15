import React, { useEffect } from "react";
import "../Styles/CreatePage.css";
import { getBearerToken } from "./Datastore";
function CreatePage() {
  async function CreatePageApi() {
    const token = getBearerToken();    
    console.log(token);
    try {
      console.log("xxxx");
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/facebook/channel/",
        {
          method: "POST",
          headers: {
            Authorization: token,
            projectID: "f104bi07c490",
          },
          body:{
            "name": "postTitle",
            "title":"title",
            "description": "postDescription",
            "images": "postImage"
          },
        }
      );
      console.log(response);
      let json = await response.json();
      console.log(json);
      if (response.ok) {
        console.log("Successfully logged in");

        let json = await response.json();

        console.log(json);
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(()=>{CreatePageApi()},[]);
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
            <p>
              Use the name of your business.brand or organisation or a <br />{" "}
              name that helps explain your Page.<span>Learn more</span>
            </p>
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
