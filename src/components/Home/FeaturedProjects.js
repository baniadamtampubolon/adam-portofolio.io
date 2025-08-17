import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import mindalyze from "../../Assets/Project/Mindalyze.png";
import mental from "../../Assets/Project/mental.png";
import catMeow from "../../Assets/Project/cat-meow.png";

function FeaturedProjects() {
  return (
    <Container fluid className="featured-projects-section">
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "20px" }}>
            <h1 className="project-heading">
              Featured <strong className="purple">Projects</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Here are some of my recent work highlights
            </p>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={4} className="project-card">
            <Card className="featured-project-card">
              <Card.Img variant="top" src={mindalyze} alt="Mindalyze: Depression Detection" />
              <Card.Body>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.2em" }}>
                  Mindalyze: Depression Detection 
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  A web application that detects depression levels using deep learning models, providing insights and recommendations.
                </Card.Text>
                <div className="featured-project-buttons">
                  <Button 
                    href="https://github.com/baniadamtampubolon/depression-detector.io"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    style={{ marginRight: "10px", borderColor: "#cd5ff8", color: "#cd5ff8" }}
                  >
                    <AiOutlineGithub /> Code
                  </Button>
                  <Button 
                    href="https://baniadamtampubolon.github.io/depression-detector.io/index.html"
                    target="_blank"
                    variant="primary"
                    size="sm"
                    style={{ backgroundColor: "#623686", borderColor: "#623686" }}
                  >
                    <AiOutlineEye /> Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} md={4} className="project-card">
            <Card className="featured-project-card">
              <Card.Img variant="top" src={catMeow} alt="Cat Meow Translator" />
              <Card.Body>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.2em" }}>
                  Cat Meow Translator
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  A web application that translates cat sounds into human language using machine learning and Generative AI.
                </Card.Text>
                <div className="featured-project-buttons">
                  <Button 
                    href="https://github.com/baniadamtampubolon/cat-meow-translator"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    style={{ marginRight: "10px", borderColor: "#cd5ff8", color: "#cd5ff8" }}
                  >
                    <AiOutlineGithub /> Code
                  </Button>
                  <Button 
                    href="https://cat-meow-translator-production.up.railway.app/"
                    target="_blank"
                    variant="primary"
                    size="sm"
                    style={{ backgroundColor: "#623686", borderColor: "#623686" }}
                  >
                    <AiOutlineEye /> Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="project-card">
            <Card className="featured-project-card">
              <Card.Img variant="top" src={mental} alt="OK OCE Net" />
              <Card.Body>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.2em" }}>
                  Mental Health Prediction System
                </Card.Title>
                <Card.Text style={{ color: "white", textAlign: "justify" }}>
                  A system that predicts mental health conditions using deep learning algorithms, providing early detection and intervention strategies.
                </Card.Text>
                <div className="featured-project-buttons">
                  <Button 
                    href="https://github.com/baniadamtampubolon/mentalhealth-checker"
                    target="_blank"
                    variant="outline-primary"
                    size="sm"
                    style={{ marginRight: "10px", borderColor: "#cd5ff8", color: "#cd5ff8" }}
                  >
                    <AiOutlineGithub /> Code
                  </Button>
                  <Button 
                    href="https://mentalhealth-checker-production.up.railway.app/"
                    target="_blank"
                    variant="primary"
                    size="sm"
                    style={{ backgroundColor: "#623686", borderColor: "#623686" }}
                  >
                    <AiOutlineEye /> Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <Button 
              as={Link}
              to="/project"
              variant="primary"
              size="lg"
              style={{ 
                backgroundColor: "#623686", 
                borderColor: "#623686",
                padding: "12px 40px"
              }}
            >
              View All Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedProjects;