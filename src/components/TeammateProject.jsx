import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/Projects.css"


const ProjectImage = styled.img`
    width: 100%;
    height: auto;
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


const TeammateProject = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="specific">
            <Row type="flex" justify="center" gutter={16}>
                <Billboard src="TeamMate/First_Bilboard.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    At-a-Glance
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    I have a wide circle of friends who are actively engaged in sports, with some even pursuing it professionally. Among them, I have the privilege of knowing several coaches as well. However, I’ve noticed that there isn’t a dedicated platform where they can gather all the essential information, access classes, share notes, and stay updated on sports events. Additionally, whenever they relocate to a new area, they face difficulties in finding new teams to join and continue their sporting endeavors.
                </ProjectDescription>
                <ProjectDescription>
                    To address these challenges, I’ve taken the initiative to create an app called TeamMate, specifically designed for sports enthusiasts. This comprehensive platform offers various sections, including events, a calendar, chat functionality, lessons, and a gallery. TeamMate aims to streamline communication and avoid any confusion or clutter by consolidating all sport-related information into one platform.
                </ProjectDescription>
                <ProjectDescription>
                    The TeamMate app caters to both team members and coaches, providing them with distinct features based on their roles. Caches are granted certain privileges, such as adding team members and accepting requests to join. They can also share valuable lessons, notes, video lessons, and more with their respective teams.
                    The TeamMate App is under development.
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
                    Sports enthusiasts require a dedicated online platform or application that caters to their needs, allowing them to effectively network and connect with their teams.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    Solution
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    I am determined to design an app tailored for sports enthusiasts that encompasses all the essential sections required by a sports team. This comprehensive app will include features such as coach management, a shared calendar, a team/coach chat, note-taking capabilities, a lesson repository, a gallery, and sports event information. The primary focus will be to ensure the app is user-friendly and intuitive, providing a seamless experience for all users.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Process</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/1_Process.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Persona</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/2_Persona_TeamMate.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Journey Map</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/3_User_Journey_Map.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Brainstorming</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>By engaging in a thorough brainstorming process, the aim is to generate a comprehensive list of features and ideas that will inform the subsequent steps of app development, leading to the creation of an app that effectively addresses the needs and pain points of sports enthusiasts.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/4_Brainstorming.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Paper First</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>Paper sketching is an essential step in the app development process, as it allows for quick and low-fidelity visualization of ideas and features before investing time and resources into actual development.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/5_Paper_First_TeamMate.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>High-Fidelity Prototype</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>After completing the brainstorming and sketching phase, I proceeded to develop a high-fidelity prototype for the app. The objective was to provide users with a visually engaging and realistic representation of the app’s interface and functionality.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/5_From_Paper_Digital_TeamMate.jpg" />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/5_From_Paper_Digital2_TeamMate.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Testing</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>For user testing and collecting feedback, I utilized the survey called Servio. Servio allowed me to streamline the feedback collection process and efficiently gather insights from users. I shared with them a survey containing specific questions tailored to their experience with the high-fidelity prototype.<br />

                    Based on the survey results, I have gathered valuable insights about the participants’ preferences and needs for the app. Here’s a summary of the key findings:<br />

                    1.  User Profile: All participants were actively involved in team sports on a regular basis, indicating a target audience with a strong interest in sports and team activities.<br />

                    2. Desire for an All-in-One App: Approximately 75% of the respondents expressed a desire for an application that can cater to their communication, information sharing, and updating needs. This indicates a clear demand for a comprehensive platform that can fulfill multiple functions within the sports community.<br />

                    3. Inefficiency of Current Communication Methods: The survey revealed that participants were currently using multiple apps like WhatsApp and Facebook for communication within their sports teams. However, they expressed dissatisfaction with this approach, highlighting a need for a more streamlined and dedicated communication solution.<br />

                    4. Essential Features: Participants identified several crucial features they would like to see in the app. The top priorities mentioned were a plan for future activities, a calendar and schedule function, and the ability to share and view images. These features align with the participants’ desire for an all-in-one app that can help them organize and stay updated on their sporting activities.</ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/6_User_Testing.jpg" />
            </Row>

            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Design System</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/7_Design_System_TeamMate.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Final Design</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="TeamMate/8_Final_Design1_TeamMate.jpg" />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <Link to="https://www.figma.com/file/teRw51m5nF9lL16isw3U1F/TeamMate_Project?type=design&mode=design">
                    <ProjectButton>View Prototype</ProjectButton>
                </Link>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Product Successes</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>Through designing the app, I learned the critical importance of understanding and addressing the needs of users. By prioritizing user needs and finding optimal solutions, we can create a more meaningful and impactful product that resonates with the target audience, ultimately driving user satisfaction and success.

                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>What I Learned</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>During my tenure at the BioMask Project, I have come to appreciate the significance of collecting extensive feedback during the initial stages of a project. In this particular endeavor, we commenced gathering user feedback a few weeks into the “Communication and Design” phase, which yielded compelling firsthand evidence to inform our design decisions.
                </ProjectDescription>
            </Row>
        </div>

    )
}

export default TeammateProject