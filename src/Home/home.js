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
                                {/* Reusable Custom Component to render any text safely */}
                                {/* Have Seprated Constants for i18 purposes. */}
                                <Heading tag="h1" className="heading" content={headingContent}/>
                                <Heading tag="h2" className="sub-heading" content={subHeadingContent}/>
                            </Col>
                            <Col sm={3}>
                                {/* Image card box custom component. */}
                                <ImageBox 
                                    title="Yoga" 
                                    href={{ title : "Know More" , link : "/"}} 
                                    image="./static/yoga/yoga.jpg"
                                    srcSet={"./static/yoga/yoga@2x.jpg 2x, ./static/yoga/yoga@3x.jpg 3x"}
                                    className="yoga"
                                    id="yoga"
                                    minHeight="390px"
                                    placeholder={<Placeholder/>}
                                />
                            </Col>
                            <Col sm={4}>
                                <Row className="align-item-center">
                                    <Col sm={12}>
                                        <ImageBox 
                                            title="Meditation" 
                                            href={{ title : "Know More" , link : "/"}} 
                                            image="./static/meditation/meditation.jpg"
                                            srcSet={"./static/meditation/meditation@2x.jpg 2x, ./static/meditation/meditation@3x.jpg 3x"}
                                            className="meditation"
                                            id="meditation"
                                            minHeight="177px"
                                            placeholder={<Placeholder/>}
                                        />
                                    </Col>
                                    <Col sm={12} className="space"/>
                                    <Col xs={6} sm={6}>
                                        <ImageBox 
                                            title="Nutrition" 
                                            href={{ title : "Know More" , link : "/"}} 
                                            image="./static/nutrition/nutrition.png"
                                            srcSet={"./static/nutrition/nutrition@2x.png 2x, ./static/nutrition/nutrition@3x.png 3x"}
                                            className="nutrition"
                                            id="nutrition"
                                            minHeight="211px"
                                            placeholder={<Placeholder/>}
                                        />
                                    </Col>
                                    <Col xs={6} sm={6}>
                                        <ImageBox 
                                            title="Therapy" 
                                            href={{ title : "Know More" , link : "/"}} 
                                            image="./static/therapy/therapy.png"
                                            srcSet={"./static/therapy/therapy@2x.png 2x, ./static/therapy/therapy@3x.png 3x"}
                                            className="therapy"
                                            id="therapy"
                                            minHeight="211px"
                                            placeholder={<Placeholder/>}
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

function Placeholder(){
    return(<div className="loader"/>)
}

export default Home


