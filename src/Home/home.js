import React, { Component } from "react"
import "./home.css"
import {Container, Row, Col} from 'react-bootstrap'
import Heading from './modules/heading'
import {headingContent , subHeadingContent} from './constant'
import ImageBox from './modules/imageBox'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 

    }
  }

    render() {
        return (
            <> 
                <section>
                    <Container>
                        <Row className="align-item-center">
                            <Col xs={12} sm={5}>
                                <Heading tag="h1" className="heading" content={headingContent}/>
                                <Heading tag="h2" className="sub-heading" content={subHeadingContent}/>
                            </Col>
                            <Col sm={3}>
                                <ImageBox 
                                    title="Yoga" 
                                    href={{ title : "Know More" , link : "/"}} 
                                    image="./static/yoga/yoga.jpg"
                                    srcSet={[]}
                                    className="yoga"
                                />
                            </Col>
                            <Col sm={4}>
                                <Row className="align-item-center">
                                    <Col sm={12}>
                                        <ImageBox 
                                            title="Meditation" 
                                            href={{ title : "Know More" , link : "/"}} 
                                            image="./static/meditation/meditation.jpg"
                                            srcSet={[]}
                                            className="meditation"
                                        />
                                    </Col>
                                    <Col sm={12} className="space"/>
                                    <Col sm={6}>
                                        <ImageBox 
                                            title="Nutrition" 
                                            href={{ title : "Know More" , link : "/"}} 
                                            image="./static/nutrition/nutrition.png"
                                            srcSet={[]}
                                            className="nutrition"
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <ImageBox 
                                            title="Therapy" 
                                            href={{ title : "Know More" , link : "/"}} 
                                            image="./static/therapy/therapy.png"
                                            srcSet={[]}
                                            className="therapy"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
      )
  }
}


export default Home