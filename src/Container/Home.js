/* eslint-disable max-len */
import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Logo from '../image/Logo Mark.png';
import Rocket from '../image/RocketLaunch.png';
import RedStar from '../image/Red Star.png';
import WhiteStar from '../image/White Star.png';
import Phone from '../image/Mobile Mockup.png';

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
        <div className="description">Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</div>
        <div className="button-frame flex-center-center">
          <Button type="primary" className="flex-center-center">
            <img src={Rocket} alt="rocket" />
            Get Start
          </Button>
          <Button type="primary" className="converse-button flex-center-center">
            How it works
          </Button>
        </div>
        <img className="red-star" src={RedStar} alt="Red Star" />
        <img className="white-star" src={WhiteStar} alt="White Star" />
        <img className="phone" src={Phone} alt="Phone - Mobile" />
        <div className="commodity-background" />
      </main>
    </div>

  );
}

export default Home;
