import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Main.css";

const goToProfile = (profile) => {
  window.open(profile, "_blank");
};

const goToRepo = (repo) => {
  window.open(repo, "_blank");
};

const Main = (props) => {
  return (
    <div className="main__container">
      <div className="main__authors">
        <Typography variant="h1" component="h3" gutterBottom>
          Desarrollado por:
        </Typography>
        <div>
          <Typography variant="h3" component="p" gutterBottom>
            Diego Fernando Ruíz
          </Typography>

          <Typography
            variant="h3"
            component="p"
            gutterBottom
            onClick={() => {
              goToProfile(
                "https://www.linkedin.com/in/juan-david-murillo-giraldo-0a0b72169"
              );
            }}
          >
            Juan David Murillo
          </Typography>
        </div>
      </div>

      <div>
        <Typography variant="h2" component="h3" gutterBottom>
          Tecnologías:
        </Typography>

        <div>
          <div className="backend">
            <Typography variant="h4" component="h4" gutterBottom>
              Backend:
            </Typography>

            <ul>
              <li>
                <Typography variant="h6" component="p" gutterBottom>
                  Flask
                </Typography>
              </li>
              <li>
                <Typography
                  variant="button"
                  component="a"
                  gutterBottom
                  onClick={() => {
                    goToRepo(
                      "https://github.com/juancho20sp/final-ayed-backend"
                    );
                  }}
                >
                  Click aquí para ir al repositorio
                </Typography>
              </li>
            </ul>
          </div>

          <div className="frontend">
            <Typography variant="h4" component="h4" gutterBottom>
              Frontend:
            </Typography>

            <ul>
              <li>
                <Typography variant="h6" component="p" gutterBottom>
                  React.js
                </Typography>
              </li>
              <li>
                <Typography
                  variant="button"
                  component="a"
                  gutterBottom
                  onClick={() => {
                    goToRepo(
                      "https://github.com/juancho20sp/final-ayed-frontend"
                    );
                  }}
                >
                  Click aquí para ir al repositorio
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
