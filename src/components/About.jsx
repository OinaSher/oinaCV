import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/About.css"

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    margin-top: 0;
`

const ProjectTitle = styled.h1`
    color: #000000;
  text-decoration: none;
  font-size: 35px;
  margin-top: 0;
`

const ProjectDescription = styled.p`
    color: #454545;
  text-decoration: none;
  font-size: 20px;
  line-height: 1.6;
  text-align: justify;
`

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="about">
            <Row type="flex" justify="start" gutter={64}>
                <Col lg={12} xs={24}>
                    <ProjectTitle>Hello, I am Oina</ProjectTitle>
                    <ProjectDescription>I am an impassioned designer with a keen focus on visual communication. My expertise lies in the dynamic realms of UI/UX and 3D design, with a special emphasis on crafting captivating web and app experiences.</ProjectDescription>
                    <ProjectDescription>Communication is at the core of my design philosophy. I firmly believe that effective collaboration is key to producing exceptional results. My strong communication skills enable me to convey ideas, listen to feedback, and collaborate seamlessly with clients and team members alike.</ProjectDescription>
                    <ProjectDescription>Above all, I embrace accountability in my work, ensuring that I deliver top-notch results on time and within scope. I take great pride in my ability to rise to the occasion and exceed expectations.</ProjectDescription>
                </Col>
                <Col lg={12} xs={24}>
                    <ProjectImage src="hf.jpg" />
                </Col>
            </Row>
        </div>

    )
}

export default About