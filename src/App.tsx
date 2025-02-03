import React, { lazy, Suspense } from 'react';
import NavBar from '@/components/NavBar';
import Spinner from '@/components/Spinner';
import Toast from '@/components/Toast';
import useLoading from '@/hooks/useLoading';
import styles from '@/App.module.css';

const Hero = lazy(() => import('@/sections/Hero'));
const AboutMe = lazy(() => import('@/sections/AboutMe'));
const Skills = lazy(() => import('@/sections/Skills'));
const WorkExperience = lazy(() => import('@/sections/WorkExperience'));
const Education = lazy(() => import('@/sections/Education'));
const Portfolio = lazy(() => import('@/sections/Portfolio'));
const ContactForm = lazy(() => import('@/sections/ContactForm'));
const Footer = lazy(() => import('@/components/Footer'));

const MainContent: React.FC<{ loading: boolean }> = ({ loading }) => (
  <main className={styles.mainContent}>
    {loading ? (
      <Spinner />
    ) : (
      <Suspense fallback={<Spinner />}>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Portfolio />
        <WorkExperience />
        <ContactForm />
        <Footer />
      </Suspense>
    )}
  </main>
);

const App: React.FC = () => {
  const loading = useLoading();

  return (
    <div className={styles.appContainer}>
      <div className={styles.fixedBackground}></div>
      <NavBar />
      <Toast />
      <MainContent loading={loading} />
    </div>
  );
};

export default App;
