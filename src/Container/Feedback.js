/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'antd';
import AvatarVerticalCard from '../Component/AvatarVerticalCard';
import LaurenM from '../image/Lauren M.png';
import DavidB from '../image/David B.png';
import '../style/Feedback.css';

const feedbackInfo = [{
  user: 'Lauren M.',
  url: LaurenM,
  position: 'UI Designer @Boo',
  starCount: 5,
  text: '"Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."',
}, {
  user: 'David B.',
  url: DavidB,
  position: 'Lead Designer @Creative',
  starCount: 5,
  text: '“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”',
}];

const feedbackDom = () => feedbackInfo?.map((v) => (
  <Col key={v.user} span={20} className="flex-left-center box-frame">
    <AvatarVerticalCard user={v.user} url={v.url} position={v.position} starCount={v.starCount} text={v.text} />
  </Col>
));

function Feedback() {
  return (
    <div className="feedback">
      <main>
        <h1 className="title">
          Real Stories from Satisfied Customers
        </h1>
        <div className="description">
          See how our landing page ui kit is making an impact.
        </div>
      </main>

      <Row className="button-frame" justify="space-around" gutter={[0, 30]}>
        {feedbackDom()}
      </Row>
    </div>
  );
}

export default Feedback;
