import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../../Assets/credential/data-pipeline.png";
import tfdp from "../../Assets/credential/tf-data-deployment.png";
import tfdev from "../../Assets/credential/tensorflow-dev.png";
import ml from "../../Assets/credential/machine-learning.png";
import tfadv from "../../Assets/credential/tf-advance-techniques.png";
import math from "../../Assets/credential/math-for-ml-ds.png";
import gendl from "../../Assets/credential/gendl-tf.png";
import cv from "../../Assets/credential/computer-vision.png";


function Credentials() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="credentials-icons">
        <a 
          href="https://www.coursera.org/account/accomplishments/specialization/WVEFQ2MAMA9W"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={tfdp} alt=""></img>
          <p>TensorFlow: Data and Deployment</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.coursera.org/account/accomplishments/professional-cert/HX8S4PPH4X2C"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={tfdev} alt=""></img>
          <p>DeepLearning.AI TensorFlow Developer</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/3ZCP9LJ7XWA6"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={tfadv} alt=""></img>
          <p>TensorFlow: Advanced Techniques</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/F7S5TT77L9UJ"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={ml} alt=""></img>
          <p>Machine Learning</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/6H7VS9RYWL8C"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={math} alt=""></img>
          <p>Mathematics for Machine Learning and Data Science</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="https://www.coursera.org/account/accomplishments/verify/AFXKMU59VATB"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={gendl} alt=""></img>
          <p>Generative Deep Learning with TensorFlow</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="= https://www.coursera.org/account/accomplishments/verify/GLLS5YQKFJRK"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={data} alt=""></img>
          <p>Data Pipelines with TensorFlow Data Services</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="credentials-icons">
        <a
          href="= https://www.coursera.org/account/accomplishments/verify/AV47W8EZ3VA9"
          style={{ color: "white", textDecoration:"none" }}
          target="_blank"
          rel="noopener noreferrer">
          <img src={cv} alt=""></img>
          <p>Advanced Computer Vision with TensorFlow </p>
        </a>
      </Col>

    </Row>
  );
}

export default Credentials;