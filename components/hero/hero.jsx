import React from 'react';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <section className={style.component}>
      <div className={style.content}>
        <h1 className={style.header}>
          Rae Farine
        </h1>
        <h2 className={style.subheader}>
          Software Engineer
        </h2>
        <p>
          <span className={style.intro}>
            {`Lorem ipsum dolor sit amet, `}
          </span>
          <span className={style.text}>
            consectetur adipiscing elit. Maecenas lacus ligula,
            fermentum non quam eget, aliquam ultrices ligula. Nullam ut elit ut mauris ultricies
            lobortis. Etiam justo sem, commodo eget ultricies eget, vestibulum ac lectus. Vivamus
            quis dictum neque, vitae tempus erat.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;