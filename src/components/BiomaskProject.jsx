import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/Projects.css"


const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    margin-top: 20px;
`

const ProjectTitle = styled.h1`
    color: #000000;
  text-decoration: none;
  font-size: 20px;
  margin-top: 40px;
`

const ProjectDescription = styled.p`
    color: #454545;
  text-decoration: none;
  font-size: 20px;
  line-height: 1.6;
  text-align: ${props => props.center ? "center" : "justify"};
  margin-top: 0;
`

const ProjectButton = styled.button`
    background: none;
    border-color: #000000;
    color: #000000;
    border-width: 2px;
    font-size: 20px;
    padding: 20px;
    margin-top: 20px;
`

const Billboard = styled.img`
    width: 100vw;
    height: auto;
`

const BiomaskProject = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="specific">
            <Row type="flex" justify="center" gutter={16}>
                <Billboard src="BioMask/First_Bilboard.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    At-a-Glance
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    I worked for BioMask Project as a UI/UX designer for four months in 2023. I worked to design the Website and mobile version for BioMask Project to inform users particularly medical personnel and medical companies, hospitals in general medical systems about the product through designing, prototyping, and testing. In four months, I delivered a complete Web design as well as the mobile version, and a design system, and worked with the project investigator, nanomaterial engineers, and developer to bring the design to life.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <Col xs={24} lg={8} align="center">
                    <ProjectTitle>Timeline:</ProjectTitle>
                    <ProjectDescription center>Four months</ProjectDescription>
                </Col>
                <Col xs={24} lg={8} align="center">
                    <ProjectTitle>My role:</ProjectTitle>
                    <ProjectDescription center>UI/UX designer</ProjectDescription>
                </Col>
                <Col xs={24} lg={8} align="center">
                    <ProjectTitle>Platform:</ProjectTitle>
                    <ProjectDescription center>Figma</ProjectDescription>
                </Col>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    Problem
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    The BioMask Project has introduced a groundbreaking solution for the medical industry, addressing both pollution concerns and critical issues within the field. Their innovative product, made from 98% biodegradable materials, offers a sustainable and effective approach. However, there was a need to effectively communicate key information about the manufacturing process and the product to their target audience.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    Solution
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    I collaborated with the BioMask Project investigator, Project Manager, researchers, and engineers to design the website for the BioMask Project, which successfully developed a biodegradable medical product. The website is now fully functional.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <Link to="https://www.thebiomaskcompany.com">
                    <ProjectButton>View Website</ProjectButton>
                </Link>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Process</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/1_Process_BioMask.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Persona</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/2_Persona_BioMask.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Journey Map</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/3_User_Journey_Map_BioMask.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Paper First</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>The process starts with my initial ideation in the form of wireframes, which then progresses to mockups, and ultimately culminates in the creation of a high-fidelity prototype. This simplified version allows you to witness firsthand how our approach effectively addresses the user’s needs.</ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/4_Paper_First.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>From Paper to Digital</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>Afterward, I transformed my idea into an interactive digital high–fidelity prototype, which I then presented to potential users to gather valuable feedback.</ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/5_Paper_Digital_BioMask.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Testing</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>As a team, we conducted a comprehensive user testing session. Following the session, I meticulously analyzed the responses and performed a card-sorting exercise to identify recurring themes among the participant’s feedback.</ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/6_User_Testing_BioMask.jpg" />
            </Row>

            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Design System</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/7_Design_System_BioMask.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Final Design</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="BioMask/8_Final_Design1_BioMask.jpg" />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <Link to="https://www.figma.com/proto/p1LZfEnmuVCIB8at6GmGCe/The-BioMask?node-id=99-507&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=99%3A507&t=2Nls8m2nmonziCwb-1&type=design&viewport=-333%2C-150%2C0.04">

                    <ProjectButton>View Prototype</ProjectButton>
                </Link>
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

export default BiomaskProject