import React from "react";

let Home = () => {
  return (
    <div className="container">
      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner carousel-cycle">
            <div className="carousel-item aactive">
              <img className="d-block w-100" src="" alt="Third slide" />
            </div>
          </div>
        </div>
      </div>

      <div className="container testcontainer">
        <div className=" row testrow">
          <div className="col-md-3 mt-2"></div>
          <div className="col-md-9 mt-2">
            (Space for text)
            <div className="col-md-4 mt-5 ">
              <form>
                <div className="col-md-6 mt-5">
                  Search:
                  <input type="text" id="search" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row submitRow">
          <div className="col-md-6 mt-4" id="submitRecipe">
            Submit
            <div>
              <img
                className="img-fluid rounded float-start"
                id="testSubmitImage"
                src=""
                alt="..."
              />
            </div>
          </div>

          <div className="col-md-6 mt-4" id="submitRecipe">
            (new column)
            <form>
              <button type="button" id="submitButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="newRecipes" className="row mt-4">
        New Recipes
        <div className="col-md-3 mt-4"></div>
        <div className="col-md-3 mt-4"></div>
        <div className="col-md-3 mt-4"></div>
        <div className="col-md-12 mt-4"></div>
        <div className="col-md-3 mt-4">(Text goes here)</div>
        <div className="col-md-3 mt-4">(Text goes here)</div>
        <div className="col-md-3 mt-4">(Text goes here)</div>
        <div className="col-md-12 mt-4"></div>
      </div>
    </div>
  );
};

export default Home;
