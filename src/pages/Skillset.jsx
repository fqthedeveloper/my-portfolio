import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Certfication from "../components/Skillset/Certfication";
import Github from "../components/Skillset/Github";
import Badges from "../components/Skillset/Badges";
const Skillset = () => {
  useEffect(() => {
    document.title = "Skillset";
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          I have <strong className="yellow">Earned Badges</strong> <small style={{textAlign: 'right'}}><a href="https://www.credly.com/users/thequreshi">Verify</a></small>
        </h1>
        <Badges />

        <h1 className="project-heading">
          I have <strong className="yellow">Earned Certfication</strong>
        </h1>
        <Certfication />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
};

export default Skillset;
