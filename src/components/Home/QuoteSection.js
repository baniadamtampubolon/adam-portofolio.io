import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCode } from "react-icons/ai";

function QuoteSection() {
  return (
    <Container fluid className="quote-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <AiOutlineCode size={50} className="purple" style={{ marginBottom: "20px" }} />
            <blockquote className="quote-text">
              <p style={{ 
                fontSize: "1.5em", 
                fontStyle: "italic", 
                color: "white",
                lineHeight: "1.6",
                marginBottom: "20px"
              }}>
                "Without data, you're just another person with an opinion." <br />
              </p>
              <footer style={{ color: "#cd5ff8", fontSize: "1.1em" }}>
                — W. Edwards Deming
              </footer>
            </blockquote>
            <div style={{ marginTop: "30px" }}>
              <p style={{ color: "#fbd9ad", fontSize: "1.1em" }}>
                My philosophy: <strong className="purple"> <br />
                  I believe every dataset tells a story — my job is to reveal it</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default QuoteSection;