import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Sixth from "../assets/projects/Sixth.png";
import Fifth from "../assets/projects/Fifth.png";
import Forth from "../assets/projects/Forth.png";
import Thard from "../assets/projects/Thard.png";
import Second from "../assets/projects/Second.png";
import First from "../assets/projects/First.png";

const Projects = () => {

  useEffect(() => {
    document.title = 'Project';
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sixth}
              isBlog={false}
              title="Lift-Buddy"
              description="This A Fullstack Website in Django (Python) & React JS (javascripth) For Blog"
              ghLink="https://github.com/fqthedeveloper/Adil-Iqbal-Blog-Frontend"
              demoLink="https://testing.thequreshi.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fifth}
              isBlog={false}
              title="IRT Static Website"
              description="This is A Static Website"
              ghLink="https://github.com/fqthedeveloper/irt-static-website"
              demoLink="https://irttechnalogies.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Forth}
              isBlog={false}
              title="Email Sender Website"
              description="This Django Email Sender Using Gmail & Link Urls"
              ghLink="https://github.com/fqthedeveloper/emailsender"
              demoLink="https://demoserver.pythonanywhere.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Thard}
              isBlog={false}
              title="SK.Managment Website"
              description="This Website Are Created in ReactJS & Django for Contact US in Background"
              ghLink="https://github.com/fqthedeveloper/SKManagment"
              demoLink="https://skmanagment.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Second}
              isBlog={false}
              title="Camera Selling"
              description="This A FullStack Website Django And React"
              ghLink="https://github.com/fqthedeveloper/FullStackDjangoReact"
              demoLink="https://eagleeye92.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={First}
              isBlog={false}
              title="NFCMMA Django"
              description="This My First Django Website"
              ghLink="https://github.com/fqthedeveloper/NFCMMAClub-Live"
              demoLink="https://fqthedeveloper.pythonanywhere.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects