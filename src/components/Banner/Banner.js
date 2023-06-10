import './Banner.css'

const Banner = ({ services, speed=8000 }) => {
  return (
    <div className="banner-inner">
      <div className="banner-wrapper">
        <div className="banner-section" style={{ "--speed": `${speed}ms` }}>
          {services.map(({ id, service }) => (
            <>
              <div className="banner-service" key={id}>
                {service}
              </div>
              <div>*</div>
            </>
          ))}
        </div>
        <div className="banner-section" style={{ "--speed": `${speed}ms` }}>
          {services.map(({ id, service }) => (
            <>
              <div className="banner-service" key={id}>
                {service}
              </div>
              <div>*</div>
            </>
          ))}
        </div>
        <div className="banner-section" style={{ "--speed": `${speed}ms` }}>
          {services.map(({ id, service }) => (
            <>
              <div className="banner-service" key={id}>
                {service}
              </div>
              <div>*</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Banner };
