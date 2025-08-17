import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload, AiOutlineUser } from "react-icons/ai";

function HomeIntro() {
  const handleViewCV = () => {
    window.open("/CV-Adam-Eng-2025.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <Container fluid className="home-intro-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ paddingBottom: "50px" }}>
            <h1 className="project-heading">
              LET ME <strong className="purple">INTRODUCE</strong> MYSELF <br />
            </h1>
            <blockquote className="blockquote mb-0" style={{ color: "white" }}>
              <p style={{ textAlign: "justify", fontSize: "1.1em" }}>
                <br />
                I'm a Fresh Graduate of <strong className="purple">Informatics Engineering</strong>, passionate about building impactful digital solutions. 
                With hands-on experience in <strong className="purple">data analysis and AI development</strong>, I've led and contributed to various projects ranging from 
                mental health prediction systems.
                <br />
                <br />
                I enjoy uncovering meaningful insights from <strong className="purple">data</strong>, transforming complex information into clear stories 
                that support better decision-making. My approach focuses on combining <strong className="purple">analytical thinking</strong> with 
                practical applications, ensuring every dataset speaks with clarity.
                <br />
                <br />
                My field of interests lies in exploring patterns through <strong className="purple">Data Analysis</strong>, presenting them with impactful <strong className="purple">Data Visualization</strong>, 
                and designing <strong className="purple">AI/ML models</strong> to tackle complex challenges.
              </p>
            </blockquote>

            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <Col md={6} style={{ textAlign: "center", marginBottom: "10px" }}>
                <Button 
                  as={Link} 
                  to="/about" 
                  variant="primary" 
                  size="lg"
                  style={{ 
                    backgroundColor: "#623686", 
                    borderColor: "#623686",
                    padding: "10px 30px"
                  }}
                >
                  <AiOutlineUser style={{ marginRight: "8px" }} />
                  About Me
                </Button>
              </Col>
              <Col md={6} style={{ textAlign: "center", marginBottom: "10px" }}>
                <Button 
                  onClick={handleViewCV}
                  variant="outline-primary" 
                  size="lg"
                  style={{ 
                    borderColor: "#cd5ff8", 
                    color: "#cd5ff8",
                    padding: "10px 30px"
                  }}
                >
                  <AiOutlineDownload style={{ marginRight: "8px" }} />
                  View CV
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeIntro;
