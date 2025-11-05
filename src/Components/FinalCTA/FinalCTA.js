import React, { useEffect, useRef } from 'react';
import styles from './FinalCTA.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const ctaRef = useRef(null);

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)" },
    tap: { scale: 0.98 }
  };

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }
  }, []);

  return (
    <section className={styles.ctaSection}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12}>
            <div ref={ctaRef} className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Ready to Elevate Your Next Listing?
              </h2>
              <p className={styles.ctaSubtitle}>
                Upload your photos today — your cinematic video will be ready in 24 hours.
              </p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className={styles.ctaButton}
              >
                <Link to="/portal">Get Started →</Link>
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FinalCTA;

