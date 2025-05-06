import React, { useState } from 'react';

const InternshipDomains = () => {
  // State to track which link is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const domains = [
    {
      title: 'BEGINER',
      subtitle: 'WEB DEVELOPER',
      image: '/assets/img/Inetrn/01.png', // Add your image path here
      bgColor: '#f5f5f5',
      tagBg: '#FFBF00',
      textColor: '#000',
      link: '/internships/beginner-web-developer', // Add your link here
    },
    {
      title: 'INTERMEDIATE',
      subtitle: 'WEB DEVELOPER',
      image: '/assets/img/Inetrn/02.png', // Add your image path here
      bgColor: '#ffc107',
      tagBg: '#000',
      textColor: '#000',
      tagTextColor: '#fff',
      link: '/internships/intermediate-web-developer', // Add your link here
    },
    {
      title: 'WORDPRESS',
      subtitle: 'DEVELOPER',
      image: '/assets/img/Inetrn/03.png', // Add your image path here
      bgColor: '#000',
      tagBg: '#fff',
      textColor: '#fff',
      tagTextColor: '#000',
      link: '/internships/wordpress-developer', // Add your link here
    },
    {
      title: 'SHOPIFY',
      subtitle: 'ECOMERCE',
      image: '/assets/img/Inetrn/04.png', // Add your image path here
      bgColor: '#f5f5f5',
      tagBg: '#FFBF00',
      textColor: '#000',
      link: '/internships/shopify-ecommerce', // Add your link here
    },
    {
      title: 'INTERMEDIATE',
      subtitle: 'WEB DEVELOPER',
      image: '/assets/img/Inetrn/05.png', // Add your image path here
      bgColor: '#ffc107',
      tagBg: '#000',
      textColor: '#000',
      tagTextColor: '#fff',
      link: '/internships/intermediate-web-developer', // Add your link here
    },
    {
      title: 'WORDPRESS',
      subtitle: 'DEVELOPER',
      image: '/assets/img/Inetrn/06.png', // Add your image path here
      bgColor: '#000',
      tagBg: '#fff',
      textColor: '#fff',
      tagTextColor: '#000',
      link: '/internships/wordpress-developer', // Add your link here
    },
  ];

  const sectionTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const highlightStyle = {
    backgroundColor: '#FFBF00',
    padding: '2px 6px',
    borderRadius: '4px',
  };

  const cardStyle = (bgColor, textColor) => ({
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: '15px',
    padding: '25px',
    height: '250px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08), 0 4px 0 rgba(0, 0, 0, 0.1)', // Added drop shadow in down direction
    overflow: 'hidden', // Added to ensure image doesn't overflow
    transition: 'transform 0.2s ease', // Smooth transition for any transform effects
  });

  const tagStyle = (bg, color = '#000') => ({
    backgroundColor: bg,
    color: color,
    fontWeight: 'bold',
    fontSize: '13px',
    padding: '4px 8px',
    borderRadius: '3px',
    display: 'inline-block',
    marginBottom: '5px',
    width: 'fit-content',
  });

  const subtitleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const learnMoreStyle = (isHovered) => ({
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer', // Added to indicate it's clickable
    textDecoration: 'none', // Remove underline from link
    color: 'inherit', // Inherit color from parent
    transition: 'transform 0.3s ease, color 0.3s ease', // Smooth transition for transform and color
    transform: isHovered ? 'translateX(5px)' : 'translateX(0)', // Move right on hover
    position: 'relative',
  });

  const arrowStyle = (isHovered) => ({
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(3px)' : 'translateX(0)', // Additional movement for the arrow
    display: 'inline-block',
  });

  const imageStyle = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '100%',
    width: '40%', // Adjust width as needed
    objectFit: 'cover',
    opacity: '0.8', // Adjust opacity as needed
  };

  return (
    <div className="container my-5">
      <h2 style={sectionTitleStyle}>
        <span style={highlightStyle}>Internship Domains</span>
      </h2>
      <p className="text-muted mb-4">
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
      </p>

      <div className="row g-4">
        {domains.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div style={cardStyle(item.bgColor, item.textColor)}>
              <div style={{ position: 'relative', zIndex: '1' }}>
                <span style={tagStyle(item.tagBg, item.tagTextColor || '#000')}>{item.title}</span>
                <div style={subtitleStyle}>{item.subtitle}</div>
                <a 
                  href={item.link} 
                  style={learnMoreStyle(hoveredIndex === index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span>Learn more</span>
                  <span style={arrowStyle(hoveredIndex === index)}>→</span>
                </a>
              </div>
              <img 
                src={item.image} 
                alt={`${item.title} ${item.subtitle}`} 
                style={imageStyle} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipDomains;