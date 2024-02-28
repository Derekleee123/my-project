/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'antd';
import AvatarHorizontalCard from '../Component/AvatarHorizontalCard';
import SarahK from '../image/Sarah K.png';
import MichaelL from '../image/Michael L.png';
import LaurenM2 from '../image/Lauren M2.png';
import '../style/OurTeam.css';

const OurTeamInfo = [{
  user: 'Sarah K.',
  url: SarahK,
  position: 'Lead Designer',
  description: 'With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.',
  twitterLink: 'https://twitter.com/',
  dribbbleLink: 'https://dribbble.com/',
  linkedinLink: 'https://www.linkedin.com/',
}, {
  user: 'Michael L.',
  url: MichaelL,
  position: 'Product Designer',
  description: 'Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art.',
  twitterLink: 'https://twitter.com/',
  dribbbleLink: 'https://dribbble.com/',
  linkedinLink: 'https://www.linkedin.com/',
}, {
  user: 'Lauren M.',
  url: LaurenM2,
  position: 'UX Designer',
  description: 'Lauren is the mastermind behind all the seamless user experiences you love. She\'s a wizard at making things intuitive.',
  twitterLink: 'https://twitter.com/',
  dribbbleLink: 'https://dribbble.com/',
  linkedinLink: 'https://www.linkedin.com/',
}];

const OurTeamDom = () => OurTeamInfo?.map((v) => (
  <Col key={v.user} span={20} className="flex-left-center box-frame">
    <AvatarHorizontalCard user={v.user} url={v.url} position={v.position} description={v.description} twitterLink={v.twitterLink} dribbbleLink={v.dribbbleLink} linkedinLink={v.linkedinLink} />
  </Col>
));

function OurTeam() {
  return (
    <div className="ourteam">
      <main>
        <h1 className="title">
          Meet our team
        </h1>
        <div className="description">
          Get to know the faces behind the scenes and learn about the values that drive us.
        </div>

        <Row className="m-20" justify="space-around" gutter={[0, 30]}>
          {OurTeamDom()}
        </Row>
      </main>

    </div>
  );
}

export default OurTeam;
