import React from "react";


const Acceuil = () => {
  return (
    <div className="Container">
        <div className="icon-home">
        <img src={`${process.env.PUBLIC_URL}/media/ic.png`} alt="log" />
      </div>
      <p className="acro">
        Etes-vous un vrai geek ? Mettez vos connaissances à l'epreuve !{" "}
      </p>
      <div>
        <section class="loader-container">
          <div class="animation-container">
            <div class="ghost-container red">
              <div class="ghost-body">
                <div class="eyes-container">
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                </div>
              </div>
              <div class="ghost-legs-container">
                <div class="ghost-leg leg-1"></div>
                <div class="ghost-leg leg-2"></div>
                <div class="ghost-leg leg-3"></div>
              </div>
            </div>
            <div class="ghost-container pink">
              <div class="ghost-body">
                <div class="eyes-container">
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                </div>
              </div>
              <div class="ghost-legs-container">
                <div class="ghost-leg leg-1"></div>
                <div class="ghost-leg leg-2"></div>
                <div class="ghost-leg leg-3"></div>
              </div>
            </div>
            <div class="ghost-container blue">
              <div class="ghost-body">
                <div class="eyes-container">
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                </div>
              </div>
              <div class="ghost-legs-container">
                <div class="ghost-leg leg-1"></div>
                <div class="ghost-leg leg-2"></div>
                <div class="ghost-leg leg-3"></div>
              </div>
            </div>
            <div class="ghost-container orange">
              <div class="ghost-body">
                <div class="eyes-container">
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                  <div class="eye">
                    <div class="pupil"></div>
                  </div>
                </div>
              </div>
              <div class="ghost-legs-container">
                <div class="ghost-leg leg-1"></div>
                <div class="ghost-leg leg-2"></div>
                <div class="ghost-leg leg-3"></div>
              </div>
            </div>
            <div class="pac-man-move-container">
              <div class="pac-man-container">
                <div class="pac-man-top"></div>
                <div class="pac-man-bottom"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Acceuil;
