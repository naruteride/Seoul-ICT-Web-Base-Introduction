import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

function App() {
  return (
    <>
      <Navbar className="justify-content-center backdrop-blur box-shadow" sticky="top">
        <Nav className=''>
          <Nav.Link href="#about">소개</Nav.Link>
          <Nav.Link href="#portfolio">포트폴리오</Nav.Link>
          <Nav.Link href="#contact">연락</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about" className='p-5 mb-5'>
        <Row className='py-5'>
          <Col>
            <h2 className="heading">방성훈 소개</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            <Image src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4307869.jpg&fm=jpg" alt="프로필 사진"
              style={{  width: 220 }}
              roundedCircle
              className='m-auto float-right'
              />
          </Col>
          <Col>
            <h3 className="about__category">개인정보</h3>
            <p>
              <b># 방성훈</b> <br />
              크리스탈 호수 168-2번지<br />
              캘리포니아 전문대학 전산과 <br />
              국비지원 프론트엔드 부트캠프 수료<br />
              <br />
              <b># 장점</b> <br />
              빠른 판단력 <br />
              성실한 태도 <br />
              <br />
              <b># 단점</b> <br />
              무대 공포증 <br />
              여린 심성 <br />
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="portfolio" className='bg-dark p-5 text-white'>
        <Row className='py-5'>
          <Col>
            <h2 className="heading">포트폴리오</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://bangseonghun.netlify.app/_next/static/media/AI%20%EC%9B%B9%EA%B0%9C%EB%B0%9C%20%EC%B7%A8%EC%97%85%EC%BA%A0%ED%94%84%20%EC%97%AD%EB%9F%89%EA%B0%95%ED%99%94-SW%EC%8B%AC%ED%99%94%20FE%208%EC%9B%94%207%EC%9D%BC%20%EA%B3%BC%EC%A0%9C-1.f5cf310f.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>첫 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://bangseonghun.netlify.app/_next/static/media/AI%20%EC%9B%B9%EA%B0%9C%EB%B0%9C%20%EC%B7%A8%EC%97%85%EC%BA%A0%ED%94%84%20%EC%97%AD%EB%9F%89%EA%B0%95%ED%99%94-SW%EC%8B%AC%ED%99%94%20FE%208%EC%9B%94%208%EC%9D%BC%20%EA%B3%BC%EC%A0%9C-1.67954ebc.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>두 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact" className='mt-5'>
        <Row className='py-5'>
          <Col>
            <h2 className="heading m-0">연락</h2>
          </Col>
        </Row>
        <Row className='mt-0 mb-4'>
          <Col className="text-center border border-light border-dark bg-dark text-white p-3">
            <h3 style={{ margin: 0, padding: 3 }}>이메일</h3>
            <p style={{ margin: 0, padding: 10 }}>jason@naver.com</p>
          </Col>
          <Col className="text-center border border-light border-dark bg-dark text-white p-3">
            <h3 style={{ margin: 0, padding: 3 }}>휴대전화</h3>
            <p style={{ margin: 0, padding: 10 }}>010-1234-1346</p>
          </Col>
          <Col className="text-center border border-light border-dark bg-dark text-white p-3">
            <h3 style={{ margin: 0, padding: 3 }}>SNS</h3>
            <p style={{ margin: 0, padding: 10 }}>@jason_13_</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; 성훈 방. All Right Reserved.
        </Row>
      </Container>
    </>
  );
}

export default App;