import React from "react";


const Acceuil = () => {
  return (
    <div className="Container">
      {/* <div className="icon-home">
        <img src={`${process.env.PUBLIC_URL}/media/ic.png`} alt="log" />
      </div> */}
      <p className="acro">
        Etes-vous un vrai geek ? Mettez vos connaissances à l'epreuve !{" "}
      </p>
      <div>
        <section className="loader-container">
          <div className="animation-container">
            <div className="ghost-container red">
              <div className="ghost-body">
                <div className="eyes-container">
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                </div>
              </div>
              <div className="ghost-legs-container">
                <div className="ghost-leg leg-1"></div>
                <div className="ghost-leg leg-2"></div>
                <div className="ghost-leg leg-3"></div>
              </div>
            </div>
            <div className="ghost-container pink">
              <div className="ghost-body">
                <div className="eyes-container">
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                </div>
              </div>
              <div className="ghost-legs-container">
                <div className="ghost-leg leg-1"></div>
                <div className="ghost-leg leg-2"></div>
                <div className="ghost-leg leg-3"></div>
              </div>
            </div>
            <div className="ghost-container blue">
              <div className="ghost-body">
                <div className="eyes-container">
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                </div>
              </div>
              <div className="ghost-legs-container">
                <div className="ghost-leg leg-1"></div>
                <div className="ghost-leg leg-2"></div>
                <div className="ghost-leg leg-3"></div>
              </div>
            </div>
            <div className="ghost-container orange">
              <div className="ghost-body">
                <div className="eyes-container">
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                  <div className="eye">
                    <div className="pupil"></div>
                  </div>
                </div>
              </div>
              <div className="ghost-legs-container">
                <div className="ghost-leg leg-1"></div>
                <div className="ghost-leg leg-2"></div>
                <div className="ghost-leg leg-3"></div>
              </div>
            </div>
            <div className="pac-man-move-container">
              <div className="pac-man-container">
                <div className="pac-man-top"></div>
                <div className="pac-man-bottom"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Acceuil;
