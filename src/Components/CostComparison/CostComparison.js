import React, { useEffect, useRef } from 'react';
import styles from './CostComparison.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiDollarSign, FiFilm, FiCheckCircle, FiXCircle } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const CostComparison = () => {
  const titleRef = useRef(null);

  const comparisonData = [
    {
      category: "Buyer Engagement",
      icon: <FiCheckCircle className={styles.icon}/>,
      items: [
        { feature: "Inquiries", ai: "4x more", traditional: "Standard", advantage: "Listings with video get 4x more inquiries" },
        { feature: "Virtual Tours", ai: "Essential", traditional: "Optional", advantage: "67% of buyers want virtual tours before visiting" }
      ]
    },
    {
      category: "Agent Advantage",
      icon: <FiDollarSign className={styles.icon}/>,
      items: [
        { feature: "Win Listings", ai: "81% more likely", traditional: "Standard rate", advantage: "81% of sellers prefer agents who use video" },
        { feature: "Turnaround", ai: "24 hours", traditional: "2-3 weeks", advantage: "Faster time to market" }
      ]
    },
    {
      category: "Cost & Value",
      icon: <FiFilm className={styles.icon}/>,
      items: [
        { feature: "Production Cost", ai: "$49-$149", traditional: "$1,500-$5,000", advantage: "90% cheaper" },
        { feature: "Quality", ai: "Professional", traditional: "Professional", advantage: "Same quality, better price" }
      ]
    }
  ];

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, []);

  return (
    <section className={styles.section}>
      <img src="/images/building.png" alt="Building" className={styles.buildingImage} />

      <div className={styles.container}>
        <div className={styles.titleContainer} ref={titleRef}>
          <h2 className={styles.mainTitle}>Video Tours = More Buyers. Period.</h2>
          <p className={styles.subtitle}>
            QuantumTour helps you compete at the level of top agents — without the cost or delay.
          </p>
        </div>

        <div className={styles.desktopTable}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Category</th>
                <th>Feature</th>
                <th><FiCheckCircle /> AI Service</th>
                <th><FiXCircle /> Traditional</th>
                <th>Advantage</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((category, catIndex) => (
                <React.Fragment key={catIndex}>
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className={styles.tableRow}>
                      {itemIndex === 0 && (
                        <td rowSpan={category.items.length} className={styles.categoryCell}>
                          {category.icon} {category.category}
                        </td>
                      )}
                      <td className={styles.featureCell}>{item.feature}</td>
                      <td className={styles.aiCell}>{item.ai}</td>
                      <td className={styles.traditionalCell}>{item.traditional}</td>
                      <td className={styles.advantageCell}>{item.advantage}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.mobileCards}>
          {comparisonData.map((category, catIndex) => (
            <div key={catIndex} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                {category.icon}
                <h3 className={styles.categoryTitle}>{category.category}</h3>
              </div>
              
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.comparisonCard}>
                  <h4 className={styles.featureTitle}>{item.feature}</h4>
                  
                  <div className={styles.comparisonRow}>
                    <div className={styles.serviceType}>
                      <FiCheckCircle className={styles.aiIcon} />
                      <span>AI Service</span>
                    </div>
                    <div className={styles.serviceValue}>
                      {item.ai}
                    </div>
                  </div>
                  
                  <div className={styles.comparisonRow}>
                    <div className={styles.serviceType}>
                      <FiXCircle className={styles.traditionalIcon} />
                      <span>Traditional</span>
                    </div>
                    <div className={styles.serviceValue}>
                      {item.traditional}
                    </div>
                  </div>
                  
                  <div className={styles.advantageBadge}>
                    {item.advantage}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostComparison;