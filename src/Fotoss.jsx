import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: './1.jpg',
    altText: 'Huminta',
    caption: 'Huminta',
    key: 1,
  },
  {
    src: './2.jpg',
    altText: 'Salteñas',
    caption: 'Salteñas',
    key: 2,
  },
  {
    src: './3.jpg',
    altText: 'Cuñape',
    caption: 'Cuñape',
    key: 3,
  },
  {
    src: './4.jpeg',
    altText: 'Jak’a lawa',
    caption: 'Jak’a lawa',
    key: 4,
  },
  {
    src: './5.jpg',
    altText: 'Sonso de yuca',
    caption: 'Sonso de yuca',
    key: 5,
  },
  {
    src: './6.jpg',
    altText: 'Helado de Canela',
    caption: 'Helado de Canela',
    key: 6,
  },
];

export default function Fotoss(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img 
          src={item.src} 
          alt={item.altText} 
          style={{
            width: '70%', 
            height: '450px', 
            objectFit: 'cover'
          }} 
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      {/* Título agregado aquí */}
      <h3>Algunas Fotos de platos y postres de Bolivia</h3>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      
      <div className="description">
        <div className="columna">
            <h4>Qué comer en Bolivia</h4>
          <p>Probablemente no sepas qué comer en Bolivia, puesto que quizás este país sudamericano es de los menos conocidos. No obstante, la gastronomía boliviana es muy variada. En este carrucel de imagenes se observa alguno de los platos mas conocidos.</p>
        </div>
        <div className="columna">
            <h4>Como es la calidad de la comida</h4>
          <p>La calidad de la carne y las patatas es muy superior a la de otros muchos países.Lo primero que se tiene que saber es que en este país se cultivan más de doscientas variedades de patatas. La riqueza de los platos típicos de Bolivia es tan extensa que no podríamos abarcar todos sus platos. Toma nota de algunos de los más típicos y sabrosos que encontrarás.</p>
        </div>
      </div>
    </div>
  );
}

