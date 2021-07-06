import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="body-wrap">
        <div className="row justify-content-center align-items-center">
          <div
            className="card window"
            style={{ backgroundColor: "#282A36", width: "40rem" }}
          >
            <div className="window-header">
              <div className="window-buttons"></div>
              <div className="window-content">
                <p>
                  <span style={{ color: "#FF79C6" }}>const</span>{" "}
                  <span style={{ color: "#fff" }}>userName</span> ={" "}
                  <span style={{ color: "#2d9f8e" }}>"frznDev"</span>;
                </p>
                <p>
                  <span style={{ color: "#FF79C6" }}>const</span>{" "}
                  <span style={{ color: "#fff" }}>email</span> ={" "}
                  <span style={{ color: "#2d9f8e" }}>"fryzenn@gmail.com"</span>;
                  <br />
                  <span style={{ color: "#FF79C6" }}>const</span>{" "}
                  <span style={{ color: "#fff" }}>github</span> ={" "}
                  <span style={{ color: "#2d9f8e" }}>`https://github.com/</span>
                  <span style={{ color: "#ce9d64" }}>
                    $&#123;userName&#125;
                  </span>
                  <span style={{ color: "#2d9f8e" }}>`</span>;
                </p>
                <p>
                  <span style={{ color: "#FF79C6" }}>function</span>{" "}
                  <span style={{ color: "#48c963" }}>callMe() </span>
                  <span style={{ color: "fff" }}>&#123;</span>
                  <br />{" "}
                  <span style={{ color: "#FF79C6", marginLeft: 20 }}>
                    {" "}
                    return
                  </span>{" "}
                  <span style={{ color: "#2d9f8e" }}>`Send me Email for: </span>
                  <span style={{ color: "#ce9d64" }}>$&#123;</span>
                  <span style={{ color: "#ce9d64" }}>email&#125;</span>
                  <span style={{ color: "#2d9f8e" }}>`</span>;
                  <br />
                  <span style={{ color: "#fff" }}>&#125;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
