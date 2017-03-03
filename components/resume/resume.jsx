import React from 'react';
import style from './resume.module.scss';

const Resume = () => {
  return (
    <section>
      <div>
        <h2>Experience</h2>
        <p>
          <ul className={style.experience}>
            <li>
              <a
                className={style.link}
                href="https://www.wework.com"
                target="_blank"
              >
                WeWork
              </a>
              <span className={style.seperator}>|</span>
              <span className={style.location}>New York, NY</span>
              <span className={style.seperator}>|</span>
              <span className={style.date}>2015 - Present</span>
              <span className={style.desc}>
                WeWork.com redesign
                <span className={style.seperator}>/</span>
                Style guide for web components
                <span className={style.seperator}>/</span>
                Internal tooling for Community Managers and sales
              </span>
            </li>
            <li>
              <a
                className={style.link}
                href="https://www.chloeandisabel.com/"
                target="_blank"
              >
                Chloe + Isabel
              </a>
              <span className={style.seperator}>|</span>
              <span className={style.location}>New York, NY</span>
              <span className={style.seperator}>|</span>
              <span className={style.date}>2014 - 2015</span>
              <span className={style.desc}>
                E-commerce application
                <span className={style.seperator}>/</span>
                Sales components
                <span className={style.seperator}>/</span>
                Landing pages
              </span>
            </li>
            <li>
              <a
                className={style.link}
                href="https://www.zipmark.com"
                target="_blank"
              >
                Zipmark
              </a>
              <span className={style.seperator}>|</span>
              <span className={style.location}>New York, NY</span>
              <span className={style.seperator}>|</span>
              <span className={style.date}>2013 - 2014</span>
              <span className={style.desc}>
                Payment processing web application
                <span className={style.seperator}>/</span>
                Created landing pages for the main website
                <span className={style.seperator}>/</span>
                Full website redesign
              </span>
            </li>
            <li>
              <a
                className={style.link}
                href="https://www.myregistry.com"
                target="_blank"
              >
                MyRegistry
              </a>
              <span className={style.seperator}>|</span>
              <span className={style.location}>Fort Lee, NJ</span>
              <span className={style.seperator}>|</span>
              <span className={style.date}>2012 - 2013</span>
              <span className={style.desc}>
                Created pixel-perfect user experiences
                <span className={style.seperator}>/</span>
                Full website redesign
              </span>
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h2>Education</h2>
        <p>
          <a href="https://www.mica.edu" target="_blank">Maryland Institute College of Art</a>,
          Interdisciplinary Sculpture.
        </p>
      </div>
      <div>
        <h2>Keywords</h2>
        <p>
          <ul className={style.skills}>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Webpack/Gulp</li>
            <li>Node</li>
            <li>Ruby on Rails</li>
            <li>CSS Modules</li>
            <li>Sass</li>
            <li>HTML</li>
            <li>Rspec</li>
            <li>Mocha</li>
            <li>Jasmine</li>
            <li>Enzyme</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default Resume;