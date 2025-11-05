import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }
  }, []);

  return (
    <section className={styles.aboutSection}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12}>
            <div ref={contentRef} className={styles.content}>
              <h2 className={styles.sectionTitle}>Built for Agents Who Move Fast</h2>
              <div className={styles.titleUnderline}></div>
              <p className={styles.description}>
                QuantumTour was created to help real-estate professionals stand out with high-quality videos delivered in 24 hours. We handle the production — you focus on closing deals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

