import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div>
            <button
              class="btn btn-primary"
              onClick={() => {
                navigate("/info");
              }}
            >
              Proceed
            </button>
            {/* <a href="#" class="btn btn-primary" style={{marginLeft: "200px"}}>
              Leave
            </a> */}
            <button
              class="btn btn-primary"
              onClick={() => {
                window.location.reload();
              }}
              style={{ marginLeft: "200px" }}
            >
              Leave
            </button>
          </div>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Main;
