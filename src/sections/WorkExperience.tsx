import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  HiBriefcase,
  HiOutlineBuildingOffice,
  HiOutlineCalendar,
} from 'react-icons/hi2';
import Card from '@/components/Card';
import styles from './styles/WorkExperience.module.css';
import appStyles from '@/App.module.css';
import experiences from '@/data/experiences';
import { MotionWrapper } from '@/components/Motions';

interface Experience {
  title: string;
  workplace: string;
  duration: string;
  description: string[];
}

const WorkExperience: React.FC = () => {
  const renderExperience = (experience: Experience, index: number) => (
    <Col lg={6} className="mb-4" key={index}>
      <Card
        title={experience.title}
        subtitle={
          <>
            <div className={appStyles.customBadge}>
              <HiOutlineBuildingOffice className="me-2" />
              <span className={appStyles.badgeText}>
                {experience.workplace}
              </span>
            </div>
            <span className={appStyles.customBadge}>
              <HiOutlineCalendar className="me-2" />
              <span className={appStyles.badgeText}>{experience.duration}</span>
            </span>
          </>
        }
      >
        <ul className={`${styles.listItems} ${appStyles.cardText}`}>
          {experience.description.map((item, i) => (
            <li key={i}>
              <small>{item}</small>
            </li>
          ))}
        </ul>
      </Card>
    </Col>
  );

  return (
    <MotionWrapper sectionId="workExperience">
      <section id="work-experience" className={appStyles.sectionPadding}>
        <Container className={appStyles.sectionContainer}>
          <div className={appStyles.sectionTitleContainer}>
            <div>
              <HiBriefcase className={appStyles.mainIcon} />
            </div>
            <div className={appStyles.sectionTitle}>Experience</div>
          </div>
          <Row>{experiences.map(renderExperience)}</Row>
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default WorkExperience;
