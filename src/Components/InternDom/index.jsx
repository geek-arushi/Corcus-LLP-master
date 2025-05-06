import React from 'react';

const InternshipDomains = () => {
  const domains = [
    {
      title: 'BEGINER',
      subtitle: 'WEB DEVELOPER',
      icon: '🔍',
      bgColor: '#f5f5f5',
      tagBg: '#ffd900',
      textColor: '#000',
    },
    {
      title: 'INTERMEDIATE',
      subtitle: 'WEB DEVELOPER',
      icon: '🖥',
      bgColor: '#ffc107',
      tagBg: '#000',
      textColor: '#000',
      tagTextColor: '#fff',
    },
    {
      title: 'WORDPRESS',
      subtitle: 'DEVELOPER',
      icon: '❤',
      bgColor: '#000',
      tagBg: '#fff',
      textColor: '#fff',
      tagTextColor: '#000',
    },
    {
      title: 'SHOPIFY',
      subtitle: 'ECOMERCE',
      icon: '🚀',
      bgColor: '#f5f5f5',
      tagBg: '#ffd900',
      textColor: '#000',
    },
  ];

  const sectionTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const highlightStyle = {
    backgroundColor: '#ffd900',
    padding: '2px 6px',
    borderRadius: '4px',
  };

  const cardStyle = (bgColor, textColor) => ({
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: '15px',
    padding: '25px',
    height: '180px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
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

  const learnMoreStyle = {
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  const iconStyle = {
    fontSize: '30px',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
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
              <div>
                <span style={tagStyle(item.tagBg, item.tagTextColor || '#000')}>{item.title}</span>
                <div style={subtitleStyle}>{item.subtitle}</div>
                <div style={learnMoreStyle}>
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
              <div style={iconStyle}>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipDomains;