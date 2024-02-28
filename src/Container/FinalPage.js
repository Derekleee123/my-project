import React from 'react';
import { Button } from 'antd';
import {
  YoutubeFilled, InstagramOutlined, GithubFilled, LinkedinFilled,
} from '@ant-design/icons';
import Rocket from '../image/RocketLaunch.png';
import WhiteStar3 from '../image/White Star3.png';
import WhiteStar4 from '../image/White Star4.png';
import Desktop from '../image/Desktop-gray.png';
import '../style/FinalPage.css';

function FinalPage() {
  return (
    <div className="final-page">
      <main>
        <h1 className="title">Get Landing Page UI Kit Today!</h1>
        <div className="description">
          Break Figma limits and explore the endless possibilities with Anima.
        </div>

        <Button type="primary" className="button flex-center-center">
          <img src={Rocket} alt="rocket" />
          Get Start
        </Button>
        <div className="desktop-area flex-center-right">
          <img className="desktop" src={Desktop} alt="desktop" />
          <img className="white-star1" src={WhiteStar3} alt="White Star3" />
          <img className="white-star2" src={WhiteStar4} alt="White Star4" />
        </div>
      </main>
      <footer className="flex-between-center">
        <div className="copyright">© 2023 Anima’s Landing Page Ui Kit.</div>
        <div className="icon-frame flex-between-center">
          <YoutubeFilled />
          <InstagramOutlined />
          <GithubFilled />
          <LinkedinFilled />
        </div>

      </footer>
    </div>
  );
}

export default FinalPage;
