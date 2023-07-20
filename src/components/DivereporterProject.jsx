import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/Projects.css"


const ProjectImage = styled.img`
    width: 100%;
    height: auto;
`

const Billboard = styled.img`
    width: 100vw;
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

const DivereporterProject = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="specific">
            <Row type="flex" justify="center" gutter={16}>
                <Billboard src="DiveReport/Bilboard_Divereport.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    At-a-Glance
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    During my time in the “Interaction Design Methods” class at the University in Fall 2022, we were tasked with creating our own app design specifically for diving centers. The tablet app, named “DiveReport”, was designed to assist divers in collecting valuable data for researchers.<br />

                    The app encompasses several sections including time, location, and divers’ information. However, the main focus lies in the visual catalog of various species found underwater. Divers can easily navigate through this section and select the species they encountered during their dives. Furthermore, they can indicate the approximate number of each species they observed before submitting the data.<br />

                    Once the submission is made, the information seamlessly flows into the statistical analysis section. This feature enables researchers to gather vital statistics, such as the distribution of species across different areas and their migratory patterns. Ultimately, this data proves invaluable in understanding the specific habitats where different species reside and how they move from one location to another.<br />

                    By bridging the gap between divers and researchers, DiveReport plays a crucial role in facilitating the collection of comprehensive and accurate data, ultimately contributing to a deeper understanding of marine ecosystems.
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
                    Prior to DiveReport, there was a lack of an efficient and streamlined method for divers to contribute data to researchers. This led to limited and fragmented information about species distribution and migration patterns.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>
                    Solution
                </ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>
                    DiveReport addresses this problem by providing a user-friendly app that allows divers to easily record their observations and contribute to scientific research efforts. By collecting and analyzing data from divers all over, researchers gain a comprehensive understanding of species distribution and movement, aiding in the conservation and protection of marine ecosystems.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Process</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/Process_DiveReport.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Persona</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/Persona_DiveReport.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Paper First</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>Before embarking on the design of the DiveReport app, I initiated the process by creating paper sketches.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/Paper_Sketch.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>From Paper to Digital</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>After creating the initial paper sketches, I gained a clearer understanding of the features and layout I wanted to incorporate into the DiveReport app. With this vision in mind, I then proceeded to develop a high-fidelity prototype. This allowed me to bring the app to life with detailed visual designs, interactive elements, and a realistic representation of the final product. The high-fidelity prototype served as a valuable tool for refining the user experience and gathering feedback from stakeholders before moving forward with the development phase.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/High_Fidelity_Prototype.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>User Testing</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>During the user testing phase of the DiveReport app, we engaged a diverse group of potential users, including both experienced divers and researchers. Through usability testing sessions and feedback surveys, we gathered valuable insights into the app’s functionality, user interface, and overall user experience. This feedback allowed us to identify areas for improvement, make necessary adjustments, and ensure that the app meets the needs and expectations of its target audience.
                </ProjectDescription>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/Group_231.jpg" />
            </Row>

            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Design System</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/Design_System_DiveReport.jpg" />
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>Final Design</ProjectTitle>
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <ProjectImage src="DiveReport/Final_Design_DiveReport.jpg" />
            </Row>
            <Row type="flex" justify="center" gutter={16}>
                <Link to="https://www.figma.com/file/TYQ1Ol0F8gqbOX8tFniQWB/DiveReport?type=design&node-id=10-193&mode=design">
                    <ProjectButton>View Prototype</ProjectButton>
                </Link>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectTitle>What I Learned</ProjectTitle>
            </Row>
            <Row type="flex" justify="start" gutter={16}>
                <ProjectDescription>During the design process of the DiveReport app, I gained several key insights. Firstly, I learned the importance of user-centered design, prioritizing the needs and preferences of both divers and researchers. Additionally, I discovered the significance of iterative design and user testing, which helped uncover usability issues, refine features, and enhance the overall user experience. Lastly, I realized the value of continuous communication and collaboration with users to ensure the app aligned with their requirements and expectations.

                </ProjectDescription>
            </Row>
        </div>

    )
}

export default DivereporterProject