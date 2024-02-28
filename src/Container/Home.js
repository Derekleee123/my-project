/* eslint-disable max-len */
import React from 'react';
import { Button, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Logo from '../image/Logo Mark.png';
import Rocket from '../image/RocketLaunch.png';
import RedStar from '../image/Red Star.png';
import WhiteStar from '../image/White Star.png';
import Phone from '../image/Mobile Mockup.png';
import '../style/Home.css';

function Home() {
  return (
    <div className="home">
      <header>
        <img src={Logo} alt="Company Logo - Logo Mark" />
        <Button type="primary" className="flex-center-center">
          Get Start
          <ArrowRightOutlined />
        </Button>
      </header>
      <main>
        <h1 className="title">Create Engaging Landing Pages</h1>
        <div className="description">
          Build beautiful landing pages in record time with
          <a className="text-blue" href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples" target="_blank" rel="noreferrer"> Anima</a>
          ’s Landing Page UI kit for Figma. No code required!
        </div>

        <Row className="button-frame" justify="center" gutter={[10, 20]}>
          <Col span={8} sm={8} xs={24} className="flex-center-center">
            <Button type="primary" className="flex-center-center">
              <img src={Rocket} alt="rocket" />
              Get Start
            </Button>
          </Col>
          <Col span={8} sm={8} xs={24} className="flex-center-center">
            <Button type="primary" className="converse-button flex-center-center">
              How it works
            </Button>
          </Col>
        </Row>

        <div className="phone-area">
          <img className="red-star" src={RedStar} alt="Red Star" />
          <img className="white-star" src={WhiteStar} alt="White Star" />
          <img className="phone" src={Phone} alt="Phone - Mobile" />
          <div className="commodity-background" />
        </div>

      </main>
    </div>

  );
}

export default Home;
