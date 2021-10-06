function Banner() {
  return (
    <section
      id="home"
      className="page section-home"
      style="background-image: url('../img/background/bg-img.jpg')"
    >
      <div className="banner-text">
        <div className="profile-img">
          <img src="../img/profile-img.jpg" alt="person-image" />
        </div>

        <h4>Brandon Clarks</h4>

        <div className="text-slideshow" data-effect="fx3">
          <div className="text-slide text-slide--current">
            <h2 className="animate-title">Web Developer</h2>
          </div>
          <div className="text-slide">
            <h2 className="animate-title">Web Designer</h2>
          </div>
          <div className="text-slide">
            <h2 className="animate-title">UI/UX Designer</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
