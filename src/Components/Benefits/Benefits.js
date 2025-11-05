import React, { useEffect, useRef } from 'react';
import styles from './Benefits.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const titleRef = useRef(null);
  const benefitsRef = useRef([]);

  const benefits = [
    {
      icon: "🕐",
      title: "Lightning-Fast Delivery",
      description: "Receive your finished video within 24 hours."
    },
    {
      icon: "💼",
      title: "Professional Quality",
      description: "Cinematic camera movement, smooth transitions, and branded overlays."
    },
    {
      icon: "🎛️",
      title: "Completely Customizable",
      description: "You're in full control. Upload the exact photos or scenes you want featured — highlight your property's best angles, rooms, and details."
    },
    {
      icon: "💰",
      title: "More Buyer Engagement",
      description: "Video listings attract up to 87% more views online."
    },
    {
      icon: "💡",
      title: "Simple & Stress-Free",
      description: "Upload photos, pick your package, and we handle the rest."
    }
  ];

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    // Benefits cards animation
    benefitsRef.current.forEach((benefit, index) => {
      if (benefit) {
        gsap.fromTo(
          benefit,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: benefit,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !benefitsRef.current.includes(el)) {
      benefitsRef.current.push(el);
    }
  };

  return (
    <section className={styles.benefitsSection}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={12} className="text-center">
            <h2 ref={titleRef} className={styles.sectionTitle}>
              Why Agents Love QuantumTour
            </h2>
            <div className={styles.titleUnderline}></div>
          </Col>
        </Row>

        <Row className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <Col 
              key={index}
              lg={4}
              md={6}
              sm={12}
              className={styles.benefitCol}
              ref={addToRefs}
            >
              <div className={styles.benefitCard}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{benefit.icon}</span>
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;

