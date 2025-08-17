import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Hi! I’m a fresh graduate in Informatics Engineering with a strong passion for turning data into meaningful insights and intelligent solutions. 
          My journey in tech has led me to explore Machine Learning and Deep Learning (TensorFlow/Keras), where I’ve built AI models such as CNN, LSTM, 
          and even experimented with Generative AI.
          <br />
          <br />
          Beyond modeling, I love making data accessible and engaging through interactive dashboards and web apps — from Tableau and Power BI to Streamlit. 
          During my internship at PTPN VII, I worked on a data visualization chatbot that brought data to life and made insights easier to understand.
          <br />
          <br />
          I am deeply passionate about digging into the meaning behind every piece of data and transforming it into valuable insights that matter. 
          For me, data is not just numbers — it’s a story waiting to be told.
          <br />
          <br />
          I’m always excited about projects that combine AI, data, and creativity to solve real-world problems and create impact. 🚀
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
