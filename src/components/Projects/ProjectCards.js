import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Badge } from "react-bootstrap"; // Tambahkan import Badge

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tambahkan bagian Skills */}
        {props.skills && (
          <div style={{ marginBottom: "30px", textAlign: "left" }}>
            <strong>Skills:</strong>{" "}
            {props.skills.map((skill, index) => (
              <Badge
                key={index}
                pill
                bg="warning"   // Bisa diganti: primary, success, info, danger
                text="dark"
                style={{ marginRight: "6px", fontSize: "0.85rem" }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
