import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/Projects.css"


const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`

const ProjectTitle = styled.h1`
    color: #000000;
  text-decoration: none;
  font-size: 20px;
`

const ProjectDescription = styled.p`
    color: #454545;
  text-decoration: none;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  text-align: justify;
`

const ProjectButton = styled.button`
    background: none;
    border-color: #000000;
    color: #000000;
    border-width: 2px;
    font-size: 20px;
    padding: 20px;
`

const Billboard = styled.img`
    width: 100vw;
    height: auto;
`

const QuizerriaProject = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="specific">
            <Row type="flex" justify="center" gutter={16}>
                <Billboard src="Quizzeria/Bilboard_Divereport.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    At-a-Glance
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    The “Quizzeria” is an engaging online quiz game. During my Web–Based Development class in the spring of 2023, I had the opportunity to create an interactive and user–friendly experience that combines my development and design skills.<br />

                    “Quizzeria” is a versatile quiz game that allows users to create their own rooms, select subjects of their choice, and invite friends and family to join in the fun. Alternatively, they can also join a random room to challenge themselves with new quizzes. The primary focus was to create a seamless and enjoyable user experience.<br />

                    The goal was to ensure that users could easily navigate through the game, select their preferred quiz topics, and effortlessly connect with others to test their knowledge.


                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <Col xs={24} lg={8}>
                    <ProjectTitle>Timeline:</ProjectTitle>
                    <ProjectDescription>Two months</ProjectDescription>
                </Col>
                <Col xs={24} lg={8}>
                    <ProjectTitle>My role:</ProjectTitle>
                    <ProjectDescription>UI/UX designer</ProjectDescription>
                </Col>
                <Col xs={24} lg={8}>
                    <ProjectTitle>Platform:</ProjectTitle>
                    <ProjectDescription>Figma</ProjectDescription>
                </Col>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    Problem
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    Creating an online quiz game called “Quizzeria” presented the challenge of integrating basic development skills with design expertise to ensure an interactive and user-friendly experience.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    Solution
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    To address this challenge, I focused on blending fundamental development principles with intuitive design elements, resulting in the development of “Quizzeria”. This platform enables users to create personalized quiz rooms, select subjects of their choice, and easily invite friends and family to join the fun. Additionally, players have the option to participate in random rooms, enhancing the thrill of competing against new opponents. The final product is an engaging and enjoyable quiz game that seamlessly combines development and design for a smooth user experience.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Process</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/1_Process_Quizzeria.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Persona</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/2_Persona_Quizzeria.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Journey Map</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/3_User_Journey_Map.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Paper First</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>After meticulously defining the design process and understanding the target persona, I dived into the creative phase of designing “Quizzeria”. This involved generating multiple sketches and concept ideas to shape the visual and interactive aspects of the quiz game.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/4_Paper_Sketch.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>From Paper to Digital</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>Following the initial sketches, I transitioned to designing the high-fidelity prototype for “Quizzeria”. This phase allowed me to elevate the visual elements and refine the user interface to a polished and professional level. By incorporating detailed design elements, colors, and interactive components, the high-fidelity prototype brought the game to life, giving potential users a more realistic preview of the final product.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/5_Prototype.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Testing</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>After completing the design of the high-fidelity prototype, I proceeded to conduct user testing by sharing the prototype with a select group of users. The feedback received from the testing was overwhelmingly positive, which was truly encouraging and rewarding. Users found the interface intuitive and engaging, praising the seamless navigation and interactive elements. The positive feedback provided valuable insights, validating the design choices and confirming that “Quizzeria” was on the right track to meet user expectations.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/6_User_testing.jpg" />
            </Row>

            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Design System</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/7_Design_System.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Final Design</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="Quizzeria/8_Final_Design.jpg" />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <Link to="https://www.figma.com/file/uzqGbEIs3KqqX55JwdVC5t/Untitled?type=design&node-id=0-1&mode=design">
                    <ProjectButton>View Prototype</ProjectButton>
                </Link>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>What I Learned</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>During the process of creating “Quizzeria”, I learned the importance of combining development and design skills to create an interactive and user-friendly online quiz game. I gained insights into the significance of user personas and user testing, which helped me tailor the game to meet the specific needs and preferences of the target audience. Additionally, I discovered the value of iterating and refining the design based on user feedback, ensuring that “Quizzeria” provided a delightful and rewarding experience for players.

                </ProjectDescription>
            </Row>
        </div>

    )
}

export default QuizerriaProject