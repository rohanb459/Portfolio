import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import ticketRasier from "../../Assets/Projects/TicketRaiserScreenshot.png";
import resGrant from "../../Assets/Projects/resgrantScreenshot.png";
// import suicide from "../../Assets/Projects/suicide.png";
import eCommerceSoundShop from "../../Assets/Projects/ecommerce-sound-shop.png";
import canvasBoard from "../../Assets/Projects/CanvasBoardScreenshot.png";

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
              imgPath={eCommerceSoundShop}
              isBlog={false}
              title="Ecommerce Platform - Sound Shop"
              description="Tech Stack - React JS, Next JS, Stripe, Sanity, JavaScript. Integrated Stripe Payments Gateway. Used Sanity to list the products dynamically on website with live changes support. Added cart to track the products. Entire website is made on modern react based framework that is Next.js "
              ghLink="https://github.com/rohanb459/Portfolio"
              demoLink="https://sound-shop-self.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resGrant}
              isBlog={false}
              title="ResGrant"
              description="Tech Stack - HTML, CSS, JavaScript, Bootstrap,Node JS,Express JS, Firebase. The website is robust platform for students who are insearch of Research Grants. A student can request a grant with the website which will store in website’s Database. There is a personalized Dashboard where student cantrack the status of all the applied research Grants"
              ghLink="https://github.com/rohanb459/ResGrant"
              demoLink="https://resgrant.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canvasBoard}
              isBlog={false}
              title="My Canvas Board"
              description="Tech Stack - HTML, CSS, JavaScript,Canvas API,Socket.io, DOM, Express JS. Implemented strokes through pencil and eraser by Canvas API. Implemented Notes, download canvas, undo, redo functionalities. Real time drawing when two users connected to the web with the same web address implemented throughsocket.io."
              ghLink="https://github.com/rohanb459/MyCanvas-Board"
              demoLink="https://my-canvas-board.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketRasier}
              isBlog={false}
              title="Ticket Raiser"
              description="Tech Stack - HTML, CSS, JavaScript, DOM, IndexedDB. A user can generate and delete ticket of different colorsbased on priority. A user can sort all the tickets of the same coloraccording to their consent.• A user can edit the contents of the generated ticket. All the tickets are saved inside the browser database which is indexed DB."
              ghLink="https://github.com/rohanb459/Ticket-Raiser"
              demoLink="https://ticket-raiser.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            /> */}
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            /> */}
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
