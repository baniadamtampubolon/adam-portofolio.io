import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import WorkExperienceCard from "./WorkExperienceCard";

function WorkExperience() {
  return (
    <Container fluid className="work-experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col style={{ paddingTop: "120px", paddingBottom: "50px" }}>
            <h1 className="project-heading">
              My <strong className="purple">Work Experience</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Here are some of the professional experiences I've gained.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          <Col xs={12}>
            <blockquote
              style={{
                color: "#cd5ff8",
                textAlign: "center",
                fontStyle: "italic",
                marginTop: "15px",
              }}
            >
              "Work experience? Well… I don’t have much yet 😔👉👈 but don’t worry, 
              I’m fully ready to give my best shot 💪😅✨"
            </blockquote>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={6} lg={4} className="project-card">
            <WorkExperienceCard
              title="Intern Data Analyst"
              company="PT Perkebunan Nusantara VII"
              period="November 2024 - April 2025"
              type="Lampung"
              description={`Developed an AI-based chatbot that executes database queries based on user prompts to display company data with interactive visualizations, simplifying the data retrieval process for employees in logistics and accounting departments for their reports.   
              Built an interactive web dashboard to monitor item log statistics and daily, weekly, monthly, and annual production performance, supporting rapid analysis of plantation performance and high-volume commodity movements.`}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default WorkExperience;