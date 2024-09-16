import React, { useEffect } from 'react';
import bg01 from '@/assets/images/bisnis/bg01.jpg';
import bg02 from '@/assets/images/bisnis/bg02.jpg';
import bg03 from '@/assets/images/bisnis/bg03.jpg';
const Hero = () => {
  const easy_background = (selector, sld_args) => {
    const empty_img = (x) => {
      if (x) {
        return `<img src='${x}'>`;
      } else {
        return '';
      }
    };

    const def_del = 3000; // Default delay
    let p = document.createElement('div');
    p.innerHTML = ' ';
    p.classList.add('easy_slider');

    document.body.insertBefore(p, document.body.firstChild);

    // Fill div with img tags and set delay
    sld_args.slide.forEach((v, i) => {
      if (v) {
        document.querySelector('.easy_slider').innerHTML += empty_img(v);
        if (!sld_args.delay[i]) {
          sld_args.delay[i] = def_del;
        }
      }
    });

    document.querySelector('.easy_slider').style.display = 'none';
    const element = document.querySelector(selector);
    element.style.backgroundSize = 'cover';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = 'center center';

    setTimeout(() => {
      if (!sld_args.transition_timing) sld_args.transition_timing = 'ease-in';
      if (!sld_args.transition_duration) sld_args.transition_duration = 500;
      const transition = `all ${sld_args.transition_duration}ms ${sld_args.transition_timing}`;
      element.style.transition = transition;
    }, 100);

    let n = 1;
    let li = 0;

    const slider = () => {
      sld_args.slide.forEach((vvv, iii) => {
        if (n > 1) {
          const delay = li;
          setTimeout(() => {
            element.style.backgroundImage = `url('${vvv}')`;
          }, delay);
          li += sld_args.delay[iii];
        } else {
          n++;
          li = sld_args.delay[iii];
          element.style.backgroundImage = `url('${vvv}')`;
        }
      });
    };

    slider();

    const interval = setInterval(() => {
      slider();
    }, sld_args.delay.reduce((a, b) => a + b, 0));

    return () => clearInterval(interval); // Clean up interval on unmount
  };

  useEffect(() => {
    easy_background('#hero-images', {
      slide: [bg01, bg02, bg03],
      delay: [3000, 3000, 3000],
      transition_timing: 'ease-in-out',
      transition_duration: 1000,
    });
  }, []);

  return (
    <div>
      <section className="bg-home zoom-image d-flex align-items-center">
        <div className="bg-overlay image-wrap" id="hero-images"></div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="title-heading text-center">
                <h4 className="display-5 text-white title-dark mb-4">
                  Build and grow your business
                </h4>
                <p className="para-desc text-white-50 mb-0 mx-auto">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap html
                  page.
                </p>

                <div className="mt-4 pt-2">
                  <a href="" className="btn btn-primary">
                    Work with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="home-shape-arrow">
          <a href="#about">
            <i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i>
          </a>
        </div>

        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
