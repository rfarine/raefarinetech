import React from 'react';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <section className={style.component}>
      <div className={style.content}>
        <h1>
          Rae Farine
        </h1>
        <h2>
          Software Engineer
        </h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus ligula,
          fermentum non quam eget, aliquam ultrices ligula. Nullam ut elit ut mauris ultricies
          lobortis. Etiam justo sem, commodo eget ultricies eget, vestibulum ac lectus. Vivamus
          quis dictum neque, vitae tempus erat.
        </p>
      </div>
    </section>
  );
}

export default Hero;