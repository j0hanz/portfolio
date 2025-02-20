import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HiUser, HiMiniCheckBadge } from 'react-icons/hi2';
import Credential from '@/components/Credential';
import Card from '@/components/Card';
import appStyles from '@/App.module.css';
import aboutMeItems from '@/data/aboutMeItems';
import aboutMeText from '@/data/aboutMeText';

interface AboutMeItem {
  title: string;
  description: string;
  hasCredential: boolean;
}

const AboutMeText: React.FC = () => (
  <Card title="Overview">
    <p className={appStyles.cardText}>{aboutMeText}</p>
  </Card>
);

const AboutMeList: React.FC<{
  items: AboutMeItem[];
  onShowModal: () => void;
}> = ({ items, onShowModal }) => (
  <Card title="Highlights">
    <ul className="list-unstyled">
      {items.map((item, index) => (
        <li key={index} className="mb-3">
          <strong>{item.title}:</strong> {item.description}
          {item.hasCredential && (
            <div className="mt-2">
              <Button onClick={onShowModal} className={appStyles.btnCredential}>
                <HiMiniCheckBadge className={appStyles.certificateIcon} />
              </Button>
            </div>
          )}
        </li>
      ))}
    </ul>
  </Card>
);

const AboutMe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about-me" className={appStyles.sectionPadding}>
      <Container className={appStyles.sectionContainer}>
        <div className={appStyles.sectionTitleContainer}>
          <HiUser className={appStyles.mainIcon} />
          <div className={appStyles.sectionTitle}>About Me</div>
        </div>
        <Row>
          <Col md={6} className="mb-4">
            <AboutMeText />
          </Col>
          <Col md={6} className="mb-4">
            <AboutMeList
              items={aboutMeItems}
              onShowModal={() => setShowModal(true)}
            />
          </Col>
        </Row>
        <Credential show={showModal} handleClose={() => setShowModal(false)} />
      </Container>
    </section>
  );
};

export default AboutMe;
