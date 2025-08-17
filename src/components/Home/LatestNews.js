import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { AiOutlineTrophy, AiOutlineBook, AiFillBuild } from "react-icons/ai";

function LatestNews() {
  return (
    <Container fluid className="latest-news-section">
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: "20px" }}>
            <h1 className="project-heading">
              Latest <strong className="purple">Updates</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Recent achievements and milestones
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={4} className="news-card">
            <Card className="news-card-view">
              <Card.Body>
                <div className="news-icon">
                  <AiFillBuild size={30} className="purple" />
                </div>
                <Badge bg="success" className="news-badge">NEW</Badge>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.1em", marginTop: "10px" }}>
                  Finish The Study Program at Institut Teknologi Sumatera
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "0.9em" }}>
                  Completed all coursework and projects with distinction, with a focus on data analysis and AI development.
                </Card.Text>
                <small style={{ color: "#fbd9ad" }}>August 2021 - August 2025 </small>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="news-card">
            <Card className="news-card-view">
              <Card.Body>
                <div className="news-icon">
                  <AiOutlineBook size={30} className="purple" />
                </div>
                <Badge bg="primary" className="news-badge">INTERN</Badge>
                <Card.Title style={{ color: "#c770f0", fontSize: "1.1em", marginTop: "10px" }}>
                  Finished my internship at PT Perkebunan Nusantara VII
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "0.9em" }}> 
                  Completed a 6-month internship focusing on data analysis and visualization, contributing to the company's digital transformation initiatives.
                </Card.Text>
                <small style={{ color: "#fbd9ad" }}>November 2024</small>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="news-card">
            <Card className="news-card-view">
              <Card.Body>
                <div className="news-icon">
                  <AiOutlineTrophy size={30} className="purple" />
                </div>
                <Badge bg="warning" className="news-badge">BOOTCAMP</Badge >
                <Card.Title style={{ color: "#c770f0", fontSize: "1.1em", marginTop: "10px" }}>
                  Finished Bangkit Academy 2024 Bootcamp
                </Card.Title>
                <Card.Text style={{ color: "white", fontSize: "0.9em" }}>
                  Finished the Bangkit Academy 2024 Bootcamp, focusing on AI and machine learning, with hands-on projects and collaboration with industry mentors.  
                </Card.Text>
                <small style={{ color: "#fbd9ad" }}>February 2024 - June 2024</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LatestNews;