/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import '../style/Introduction.css';
import UfoIcon from '../image/Ufo Icon.png';
import EditIcon from '../image/Edit Icon.png';
import ResponIcon from '../image/Respon Icon.png';
import BoxIcon from '../image/Box Icon.png';
import RedStar2 from '../image/Red Star2.png';
import WhiteStar2 from '../image/White Star2.png';
import Phone2 from '../image/Mobile Mockup2.png';
import IconBlock from '../Component/IconBlock';
import ImageCard from '../Component/ImageCard';

const features = [
  { title: 'ufo_icon', img: UfoIcon, text: 'Fast building' },
  { title: 'edit_icon', img: EditIcon, text: 'Easy to edit' },
  { title: 'respon_icon', img: ResponIcon, text: 'Responsiveness' },
  { title: 'box_icon', img: BoxIcon, text: 'No code needed' },
];

const imageInfo = [
  { title: 'Cute Cat', description: 'It is so cute!', category: 'cat' },
  { title: 'Beauty Cat', description: 'So Beauty!', category: 'cat' },
  { title: 'Funny Cat', description: 'it is funny!', category: 'cat' },
];

const featuresDom = () => features?.map((v) => (
  <Col key={v.title} span={11} sm={11} xs={24} className="flex-left-center box-frame">
    <IconBlock title={v.title} icon={v.img} text={v.text} />
  </Col>
));

const imageCardDom = (data) => data?.map((v) => (
  <Col key={v.id} span={7} sm={7} xs={24} className="flex-left-center">
    <ImageCard id={v.id} url={v.url} title={v.title} description={v.description} category={v.category} isLoading={v.isLoading} />
  </Col>
));

function Introduction() {
  const [imageList, setImageList] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.thecatapi.com/v1/images/search?limit=3')
        .then((response) => response.json())
        .then((myJson) => {
          setImageList(myJson);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (imageList.length) {
      const list = imageList.slice(0, 3);
      const result = list.map((v, i) => ({
        id: v.id,
        title: imageInfo[i]?.title,
        description: imageInfo[i]?.description,
        category: imageInfo[i]?.category,
        url: v.url,
        isLoading: false,
      }));
      setCardData(result);
    }
  }, [imageList]);

  return (
    <div className="introduction">
      <main>
        <h1 className="title">Our features</h1>
        <div className="description">
          Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
        </div>

        <Row className="m-20" justify="space-around" gutter={[0, 30]}>
          {featuresDom()}
        </Row>

        <div className="phone-area">
          <img className="red-star" src={RedStar2} alt="Red Star" />
          <img className="white-star" src={WhiteStar2} alt="White Star" />
          <img className="phone" src={Phone2} alt="Phone - Mobile" />
          <div className="commodity-background" />
        </div>

        <h1 className="title">Selected Works</h1>
        <div className="description">
          Explore our portfolio and see the latest projects that we&#39;ve brought to life.
        </div>

        <Row className="m-20" justify="space-evenly" gutter={[0, 30]}>
          {imageCardDom(cardData)}
        </Row>

      </main>

    </div>
  );
}

export default Introduction;
