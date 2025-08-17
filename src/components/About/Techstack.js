import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMysql,
  DiGit,
  DiCss3,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiAmazonaws,
  SiTailwindcss,
  SiTableau,
  SiStreamlit,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiFlask,  
  SiPowerbi,
  SiDocker,
  SiFigma,
  SiPostgresql,
  SiFastapi,
  SiPostman,
  SiCanva,
  SiGooglecloud,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScipy,

} from "react-icons/si";
import { 
  FaFileExcel
 } from "react-icons/fa";
function Techstack() {
  return (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {/* Core Data/AI */}
    <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiKeras /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiScipy /></Col>

    {/* Database & Viz */}
    <Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
    <Col xs={4} md={2} className="tech-icons"><FaFileExcel /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiTableau /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiPlotly /></Col>

    {/* Deployment & Integration */}
    <Col xs={4} md={2} className="tech-icons"><SiStreamlit /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>

    {/* Tools */}
    <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>

    {/* Web/UI/Design */}
    <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
    <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
    <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
    <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
    <Col xs={4} md={2} className="tech-icons"><SiCanva /></Col>
  </Row>
  );
}

export default Techstack;
