import React from "react";
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

const Projects = () => {
    return (
        <div className="projects">
            <Row type="flex" justify="center" gutter={[64, 32]}>
                <Col lg={12} xs={24}>
                    <Link to="/oina_portfolio/biomaskProject">
                        <ProjectImage src="BioMask.png" />
                        <ProjectTitle >BioMask Web Design</ProjectTitle>
                        <ProjectDescription >UI / UX design for BioMask Project, The BioMask Company, Lda</ProjectDescription>
                    </Link>
                </Col>
                <Col lg={12} xs={24}>
                    <Link to="/oina_portfolio/teammateProject">
                        <ProjectImage src="TeamMate1.png" />
                        <ProjectTitle >TeamMate App Design</ProjectTitle>
                        <ProjectDescription >UX Research + App design for sport people</ProjectDescription>
                    </Link>
                </Col>
                <Col lg={12} xs={24}>
                    <Link to="/oina_portfolio/divereporterProject">
                        <ProjectImage src="DiveReport1.png" />
                        <ProjectTitle >Dive Report Tablet Design</ProjectTitle>
                        <ProjectDescription >UX Research + Tablet design for Diving Centers</ProjectDescription>
                    </Link>
                </Col>
                <Col lg={12} xs={24}>
                    <Link to="/oina_portfolio/quizerriaProject">
                        <ProjectImage src="Quizzeria.png" />
                        <ProjectTitle >Online Quiz Game Web Design</ProjectTitle>
                        <ProjectDescription >UX Research + Web design for online quiz game</ProjectDescription>
                    </Link>
                </Col>
            </Row>
        </div>

    )
}

export default Projects