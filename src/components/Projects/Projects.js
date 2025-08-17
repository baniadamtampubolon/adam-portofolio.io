import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import porto from "../../Assets/Project/porto.png";
import mindalyze from "../../Assets/Project/Mindalyze.png";
import mental from "../../Assets/Project/mental.png";
import bike from "../../Assets/Project/bike-sharing.png";
import ppkm from "../../Assets/Project/ppkm.png";
import jungle from "../../Assets/Project/jungle-dash.png";
import kkn from "../../Assets/Project/kkn.png";
import vegie from "../../Assets/Project/vegie-classify.png";
import flood from "../../Assets/Project/flood-pred.png";
import cat from "../../Assets/Project/cat-meow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porto}
              isBlog={false}
              title="Portofolio Website"
              description="Crafted a Personal Portfolio Website using React.js, showcasing a blend of creativity and technical expertise. Implemented responsive design principles to ensure optimal viewing experiences across devices. Leveraged React's component-based architecture to streamline development and enhance maintainability. Incorporated interactive elements and animations to engage visitors and highlight projects and skills effectively. Resulted in a dynamic and professional online presence, demonstrating proficiency in both web development and React.js framework."
              skills={["React", "CSS"]}
              ghLink="https://github.com/Ahmdfdhilah/keran_kitera_mfa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cat}
              isBlog={false}
              title="Cat Meow Translator"
              skills={["TensorFlow", "Flask", "JavaScript", "Generative AI"]}
              description="A simple retro pixel–style web application that translates cat sounds into human language using machine learning and Generative AI. The project utilizes TensorFlow for sound processing and Flask for the backend, providing an interactive and playful user experience. The interface is designed with a nostalgic 8-bit pixel art aesthetic, bringing a fun and unique atmosphere while keeping the layout minimal and easy to navigate. This retro-inspired design choice emphasizes simplicity and accessibility, making the project both functional as a research prototype and engaging as a creative application."
              ghLink="https://github.com/baniadamtampubolon/cat-meow-translator"
              demoLink="https://cat-meow-translator-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flood}
              isBlog={false}
              title="Flood Prediction using Machine Learning"
              description="Developed a machine learning model to predict flood events based on historical data and environmental factors. The project involved data preprocessing, feature engineering, and model training using Python libraries such as Pandas and Scikit-learn. The model achieved high accuracy in predicting flood occurrences, contributing to disaster management efforts."
              skills={["Python", "Machine Learning", "LSTMs"]}
              ghLink="https://github.com/"
              demoLink="https://colab.research.google.com/drive/14xtVzV5QW8_gWrO5ZtdeMY2CAmnqzER3?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mental}
              isBlog={false}
              title="Mental Health Checker"
              description="Developed a full-stack e-commerce store system to manage and optimize online retail operations, integrating modern technologies to ensure scalability, security, and efficiency. The backend was built using NestJS, with MySQL as the database, Redis for caching, and Docker for environment management. JWT was used for  authentication, and Midtrans for payment gateway. The frontend was developed using React.js, and RajaOngkir was integrated for shipping calculations and logistics."
              skills={["Flask", "TensorFlow", "JavaScript", "Neural Networks"]}
              ghLink="https://github.com/baniadamtampubolon/mentalhealth-checker"
              demoLink="https://mentalhealth-checker-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindalyze}
              isBlog={false}
              title="Mindalyze: Depression Detection"
              description="This project is a full-stack application built with NestJS for the backend and React for the frontend, and utilizes Docker for containerization. The backend leverages NestJS’s capabilities to create a scalable and maintainable server-side environment, while React delivers a dynamic and responsive user interface. Docker ensures consistent and isolated environments across development and production, simplifying deployment and enhancing scalability."
              skills={["Tensorflow", "TensorFlow.js", "Neural Networks"]}
              ghLink="https://github.com/baniadamtampubolon/depression-detector.io"
              demoLink="https://baniadamtampubolon.github.io/depression-detector.io/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vegie}
              isBlog={false}
              title="Vegetable Classification"
              description="Developed a machine learning model for classifying vegetables using image recognition techniques. The project involved collecting a diverse dataset of vegetable images, preprocessing the data, and training a convolutional neural network (CNN) to achieve high accuracy in classification tasks. The model was deployed as a web application, allowing users to upload images and receive real-time predictions."
              skills={["Python", "TensorFlow", "Computer Vision"]}
              ghLink="https://github.com/baniadamtampubolon/cnn-vegetable-classification/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppkm}
              isBlog={false}
              title="Sentiment Analysis about PPKM Policy"
              description="This project focuses on analyzing public sentiment regarding the PPKM (Pemberlakuan Pembatasan Kegiatan Masyarakat) policy in Indonesia. By utilizing natural language processing (NLP) techniques, the application processes social media posts and news articles to gauge public opinion. The results are visualized through interactive dashboards, providing insights into sentiment trends over time."
              skills={["Python", "NLP", "Data Visualization"]}
              ghLink="https://github.com/baniadamtampubolon/sentiment-ppkm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kkn}
              isBlog={false}
              title="KKN 06 Desa Goras Jaya Website"
              description="KKN 06 Desa Goras Jaya Website is a project developed to provide information and services related to the community service program (KKN) in the Goras Jaya village. The website features a user-friendly interface, allowing users to access important information about the KKN program, including schedules, activities, and participant details. Built with modern web technologies, the site aims to enhance communication and engagement between KKN participants and the local community."
              skills={["HTML", "CSS", "JavaScript"]}
              ghLink="https://github.com/baniadamtampubolon/project-06.github.io"
              demoLink="https://baniadamtampubolon.github.io/project-06.github.io/#discover"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Bike Sharing Data Analysis"
              description="This project involves analyzing bike sharing data to gain insights into usage patterns, peak times, and user demographics. By leveraging data visualization techniques, the application presents interactive dashboards that allow users to explore the data and derive meaningful conclusions. The analysis aims to support decision-making for improving bike sharing services and promoting sustainable transportation."
              skills={["Python", "Pandas", "Data Visualization", "Streamlit"]}
              ghLink="https://github.com/baniadamtampubolon/project-bikeshare"
              demoLink="https://project-bikeshare-grri8yrz8rqkvu6wgemck9.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jungle}
              isBlog={false}
              title="Jungle Dash: Platformer Game"
              description="Jungle Dash is an exciting platformer game developed using Unity. Players navigate through a vibrant jungle environment, overcoming obstacles and enemies while collecting coins and power-ups. The game features intuitive controls, engaging gameplay mechanics, and stunning visuals, providing an immersive experience for players of all ages."
              skills={["Python", "Pygame", "OOP Concepts", "Game Development"]}
              ghLink="https://github.com/baniadamtampubolon/Jungle-Dash-Platformer-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;