import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  DiPython, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMysql
} from "react-icons/di";
import {  
  SiTableau,
  SiStreamlit, 
  SiTensorflow, 
  SiKeras, 
  SiPytorch, 
  SiScikitlearn, 
  SiFlask, 
  SiTailwindcss, 
  SiPostgresql, 
  SiAmazonaws, 
  SiGit
} from "react-icons/si";
import { 
  FaFileExcel
 } from "react-icons/fa";

function SkillsPreview() {
  return (
    <Container fluid className="skills-preview-section">
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "30px" }}>
            <h1 className="project-heading">
              Core <strong className="purple">Technologies</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Technologies I work with to build amazing products
            </p>
          </Col>
        </Row>

        {/* Data Analyst and Visual */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "20px" }}>
              Data Analyst and Visual
            </h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <DiPython />
                <p>Python</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <DiMysql />
                <p>SQL</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <FaFileExcel />
                <p>Excel</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiTableau />
                <p>Tableau</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiStreamlit />
                <p>Streamlit</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* AI Modeling */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "30px" }}>
              AI Modeling
            </h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <SiTensorflow />
                <p>TensorFlow</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiKeras />
                <p>Keras</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiPytorch />
                <p>PyTorch</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiScikitlearn />
                <p>Scikit-Learn</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Web Development */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "30px" }}>
              Web Development
            </h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <SiFlask />
                <p>Flask</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <DiJavascript1 />
                <p>JavaScript</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiTailwindcss />
                <p>Tailwind</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <DiReact />
                <p>React</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <DiNodejs />
                <p>Node.js</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Database & Tools */}
        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          <Col md={10}>
            <h3 style={{ color: "#cd5ff8", textAlign: "center", marginBottom: "20px" }}>
              Database & Tools
            </h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} md={2} className="skill-icon">
                <DiMysql />
                <p>MySQL</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiPostgresql />
                <p>PostgreSQL</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiAmazonaws />
                <p>AWS</p>
              </Col>
              <Col xs={3} md={2} className="skill-icon">
                <SiGit />
                <p>Git</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SkillsPreview;
