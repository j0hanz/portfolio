import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { HiUser, HiMiniCheckBadge } from 'react-icons/hi2';
import Credential from '../components/Credential';
import styles from './styles/AboutMe.module.css';
import appStyles from '../App.module.css';
import aboutMeItems from '../data/aboutMeItems';
import aboutMeText from '../data/aboutMeText';
import {
  MotionWrapper,
  ObjectSideEffectMotion,
  ObjectScaleEffectMotion,
} from '@/components/Motions';

interface AboutMeItem {
  title: string;
  description: string;
  hasCredential: boolean;
}

const AboutMeCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Card className={`h-100 ${styles.aboutMeCard} ${appStyles.cardBgColor}`}>
    <Card.Body className={appStyles.cardBody}>{children}</Card.Body>
  </Card>
);

const AboutMeText: React.FC = () => (
  <AboutMeCard>
    <Card.Text className={appStyles.cardText}>{aboutMeText}</Card.Text>
  </AboutMeCard>
);

const AboutMeList: React.FC<{
  items: AboutMeItem[];
  onShowModal: () => void;
}> = ({ items, onShowModal }) => (
  <AboutMeCard>
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
  </AboutMeCard>
);

const AboutMe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MotionWrapper sectionId="aboutMe">
      <section id="about-me" className={appStyles.sectionPadding}>
        <Container className={appStyles.sectionContainer}>
          <div className={appStyles.sectionTitleContainer}>
            <HiUser className={appStyles.mainIcon} />
            <div className={appStyles.sectionTitle}>About Me</div>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <ObjectScaleEffectMotion>
                <ObjectSideEffectMotion direction="left">
                  <AboutMeText />
                </ObjectSideEffectMotion>
              </ObjectScaleEffectMotion>
            </Col>
            <Col md={6} className="mb-4">
              <ObjectScaleEffectMotion>
                <ObjectSideEffectMotion direction="right">
                  <AboutMeList
                    items={aboutMeItems}
                    onShowModal={() => setShowModal(true)}
                  />
                </ObjectSideEffectMotion>
              </ObjectScaleEffectMotion>
            </Col>
          </Row>
          <Credential
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default AboutMe;
