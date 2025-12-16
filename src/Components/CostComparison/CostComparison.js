import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './CostComparison.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const CostComparison = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const sections = [
    {
      icon: "🎬",
      title: "Cinematic Quality",
      items: [
        { label: "Human + AI-Enhanced Production", desc: "AI streamlines the process while humans guide creativity, judgment, and final quality." },
        { label: "Consistent Branding", desc: "Every video features your logo, colors, and call-to-action." },
        { label: "Versatile Formats", desc: "Perfect for MLS, Instagram Reels, and YouTube." }
      ],
      footer: "Looks just as good as a filmed walkthrough — created in a fraction of the time."
    },
    {
      icon: "⚡",
      title: "Faster Turnaround",
      comparison: [
        { service: "QuantumTour", value: "Ready in 24 hours", isGood: true },
        { service: "Traditional Shoots", value: "2–3 week wait time", isGood: false }
      ],
      footer: "Get your listings online faster — speed matters when the market moves quickly."
    },
    {
      icon: "💰",
      title: "Smarter Investment",
      comparison: [
        { service: "QuantumTour", value: "$49–$149", isGood: true },
        { service: "Traditional Videography", value: "$1,500–$5,000+", isGood: false }
      ],
      footer: "Same cinematic look. 90% less cost. Ideal for every property."
    },
    {
      icon: "🔥",
      title: "Agent Advantage",
      items: [
        { label: "", desc: "Win listings with professional video marketing — no film crew needed." },
        { label: "", desc: "Offer premium marketing on every listing, not just luxury ones." },
        { label: "", desc: "Create content for social media in minutes, not days." }
      ],
      footer: "Agents using video marketing are 81% more likely to win new listings."
    }
  ];

  useEffect(() => {
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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer} ref={titleRef}>
          <h2 className={styles.mainTitle}>The New Standard in Listing Videos</h2>
          <p className={styles.subtitle}>
            QuantumTour delivers cinematic property videos that rival traditional videography — at a fraction of the cost and turnaround time.
          </p>
          <p className={styles.subtitle}>
            No camera crews. No waiting weeks. Just upload your photos and get a polished, ready-to-share video within 24 hours.
          </p>
        </div>

        <div className={styles.sectionsGrid}>
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={styles.featureCard}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{section.icon}</span>
                <h3 className={styles.cardTitle}>{section.title}</h3>
              </div>

              {section.items && (
                <ul className={styles.itemsList}>
                  {section.items.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <FiCheckCircle className={styles.checkIcon} />
                      <div>
                        {item.label && <strong>{item.label}</strong>}
                        {item.label && " — "}
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {section.comparison && (
                <div className={styles.comparisonList}>
                  {section.comparison.map((comp, idx) => (
                    <div key={idx} className={`${styles.compItem} ${comp.isGood ? styles.good : styles.bad}`}>
                      {comp.isGood ? <FiCheckCircle /> : <FiXCircle />}
                      <span className={styles.compService}>{comp.service}</span>
                      <span className={styles.compValue}>{comp.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <p className={styles.cardFooter}>{section.footer}</p>
            </div>
          ))}
        </div>

        <div className={styles.summaryBox}>
          <h3 className={styles.summaryTitle}>In short:</h3>
          <p className={styles.summaryText}>
            QuantumTour gives you the quality of traditional videography — without the cost, delay, or limits.
          </p>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>Create Your First Tour →</h3>
          <p className={styles.ctaText}>Get a cinematic listing video in under 24 hours. No filming required.</p>
          <Link to="/signup">
            <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
