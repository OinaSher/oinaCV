import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import "../styles/Hero.css"

const Title = styled.h1`
color: #000000;
  text-decoration: none;
  font-size: 35px;
`

const Introduction = styled.p`
color: #454545;
  margin-top: 60px;
  font-size: 20px;
  line-height: 1.6;
  text-align: justify;
`

const Hero = () => {
    return (
        <div className="hero">
            <Row type="flex" justify="start" gutter={16}>
                <Col lg={12} xs={24}>
                    <Title>Hi, I am Oina.</Title>
                    <Introduction >I am a passionate UI/UX and Web designer dedicated to bringing innovative ideas and
                        concepts to life through client-based design projects.</Introduction>
                </Col>
            </Row>
        </div>
    )
}

export default Hero