import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './Estilos.css';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup, Modal, ModalHeader, ModalBody, ModalFooter,UncontrolledCarousel  } from 'reactstrap';

function Uno(props) {
  return (
      <div className='hijo1'>
          <h2>Gastronomía boliviana</h2>
          
          {/* Card Group */}
          <CardGroup>
              <Card>
                  <CardImg
                      alt="Card image cap"
                      src="./7.jpeg"
                      top
                      width="100%"
                      className="estilo-imagen"
                  />
                  <CardBody className='historia'>
                      <CardTitle tag="h5">
                          Epoca Precolonial
                      </CardTitle>
                      <CardText>
                        Bolivia tuvo muchas sociedades precolombinas, pero no existen muchos registros de los hábitos gastronómicos. El territorio boliviano fue habitado desde hace 20 mil años, pero la información al respecto es escasa. Algunas prácticas gastronómicas que persisten esta la entomofagia.
                      </CardText>
                  </CardBody>
              </Card>
              <Card>
                  <CardImg
                      alt="Card image cap"
                      src="./8.JPG"
                      top
                      width="100%"
                      className='estilo-imagen'
                  />
                  <CardBody>
                      <CardTitle tag="h5">
                          Tiwanaku
                      </CardTitle>
                      <CardText>
                        La civilización tiwanakota, se asentó a las orillas del lago Titicaca, tuvo técnicas agrícolas avanzadas que permitieron el desarrollo de un sistema agroalimentario sostenible.Los productos que consumían eran papa, chuño, tunta, maíz y quinua. La cocina andina era gramínea y vegetariana, dándo más importancia al valor nutricional.
                      </CardText>
                  </CardBody>
              </Card>
              <Card>
                  <CardImg
                      alt="Card image cap"
                      src="./9.jpg"
                      top
                      width="100%"
                      className='estilo-imagen'
                  />
                  <CardBody>
                      <CardTitle tag="h5">
                          Virreinato
                      </CardTitle>
                      <CardText>
                        Con la llegada de los conquistadores llegaron nuevos ingredientes, los cuales fueron importantes en la futura alimentación, entre los principales productos que trajeron consigo los españoles son la carne de gallina, cerdo, oveja, vaca y caballo, uvas, mangos, manzanas, cítricos, trigo y especias.
                      </CardText>
                  </CardBody>
              </Card>
              <Card>
                  <CardImg
                      alt="Card image cap"
                      src="./10.jpg"
                      top
                      width="100%"
                      className='estilo-imagen'
                  />
                  <CardBody>
                      <CardTitle tag="h5">
                      La cocina boliviana del siglo XXI
                      </CardTitle>
                      <CardText>
                      La cocina boliviana está, además, mediada por la globalización y su consecuente importación de nuevos ingredientes, nuevas recetas y nuevas costumbres gastronómicas. De hecho, mucha comida rápida se consume en el país.
                      </CardText>
                  </CardBody>
              </Card>
          </CardGroup>
      </div>
  );
}

function Dos(props) {
  const [modal, setModal] = useState(false);
  const [modalChairo, setModalChairo] = useState(false); 
  const [modalChanka, setModalChanka] = useState(false);
  const [modalChorizo, setModalChorizo] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleChairo = () => setModalChairo(!modalChairo); 
  const toggleChanka = () => setModalChanka(!modalChanka);
  const toggleChorizo = () => setModalChorizo(!modalChorizo);  

  return (
    <div className='hijo2'>
      <h2>Entradas</h2>
      <p>Listado de deliciosas recetas de entradas y entremeses de la cocina boliviana, muy fáciles y divertidas de preparar.</p>
      <Row className='row-separacion'>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Anticucho</CardTitle>
            <CardImg
              alt="Card image cap"
              src="./13.jpeg"
              top
              width="100%"
              className='estilo-imagen'
            />
            <CardText>
              El Anticucho es una variante boliviana de la brocheta, esencial en las noches frías de La Paz. Con corazón de res y papas cocidas, ensartados en palitos y cocinados al carbón, es un bocado imperdible. El aderezo de ají con maní completa esta deliciosa experiencia culinaria.
            </CardText>
            <Button color="primary" onClick={toggle}>
              Receta
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Chairo</CardTitle>
            <CardImg
              alt="Card image cap"
              src="./14.jpeg"
              top
              width="100%"
              className='estilo-imagen'
            />
            <CardText>
              El Chairo es un plato tradicional del occidente andino, muy popular en Bolivia. Se prepara con una base de chuño, maíz, papas y carne de res, dando como resultado un caldo espeso y reconfortante. Ideal para los días fríos de altura.
            </CardText>
            <Button color="primary" onClick={toggleChairo}>
              Receta
            </Button>
          </Card>
        </Col>
      </Row>

      <Row className='row-separation'>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Chanka de Pollo</CardTitle>
            <CardImg
              alt="Card image cap"
              src="./15.jpeg"
              top
              width="100%"
              className='estilo-imagen'
            />
            <CardText>
            La Chanka de pollo es perfecta para días fríos, económica y deliciosa. Con pocos ingredientes, esta sopa reconfortante es un favorito para todos. En solo unos pasos sencillos, podrás disfrutar de un plato lleno de sabor y tradición. Ideal para compartir en familia.
            </CardText>
            <Button color="primary" onClick={toggleChanka}>
              Receta
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Chorizo Chuquisaqueño </CardTitle>
            <CardImg
              alt="Card image cap"
              src="./16.jpeg"
              top
              width="100%"
              className='estilo-imagen'
            />
            <CardText>
            Preparado con carne de cerdo de primera calidad, el chorizo chuquisaqueño se caracteriza por su condimentación especial, que incluye una mezcla de especias y hierbas seleccionadas, junto con ajo y ají, que le otorgan un sabor profundo y ligeramente picante.
            </CardText>
            <Button color="primary" onClick={toggleChorizo}>
              Receta
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Modal para mostrar la receta del Anticucho */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Receta de Anticucho</ModalHeader>
        <ModalBody>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>1 kg de corazón de res, cortado en trozos</li>
            <li>3 papas cocidas</li>
            <li>Palitos para brocheta</li>
            <li>Salsa de ají y maní</li>
          </ul>
          <p><strong>Preparación:</strong></p>
          <ol>
            <li>Ensarta los trozos de corazón de res y papas en los palitos de brocheta.</li>
            <li>Cocina al carbón hasta que estén dorados.</li>
            <li>Sírvelo con la salsa de ají y maní como acompañamiento.</li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal para mostrar la receta del Chairo */}
      <Modal isOpen={modalChairo} toggle={toggleChairo}>
        <ModalHeader toggle={toggleChairo}>Receta de Chairo</ModalHeader>
        <ModalBody>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>500 g de chuño</li>
            <li>1 taza de maíz</li>
            <li>2 papas cocidas</li>
            <li>500 g de carne de res</li>
            <li>Condimentos al gusto</li>
          </ul>
          <p><strong>Preparación:</strong></p>
          <ol>
            <li>Cuece el chuño, las papas y el maíz en agua con sal.</li>
            <li>Añade la carne de res y cocina hasta que esté tierna.</li>
            <li>Cuando todo esté bien cocido, sirve el caldo espeso con los ingredientes bien integrados.</li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleChairo}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal para mostrar la receta de Chanka de Pollo */}
      <Modal isOpen={modalChanka} toggle={toggleChanka}>
        <ModalHeader toggle={toggleChanka}>Receta de Chanka de Pollo</ModalHeader>
        <ModalBody>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>1 pollo entero o piezas de pollo</li>
            <li>4 papas</li>
            <li>1 zanahoria</li>
            <li>1 cebolla</li>
            <li>Condimentos al gusto</li>
          </ul>
          <p><strong>Preparación:</strong></p>
          <ol>
            <li>Coloca el pollo en una olla con agua y condimentos.</li>
            <li>Añade las papas, zanahoria y cebolla, y cocina hasta que el pollo esté tierno.</li>
            <li>Sirve caliente con los ingredientes bien integrados en el caldo.</li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleChanka}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal para mostrar la receta de Chorizo Chuquisaqueño */}
      <Modal isOpen={modalChorizo} toggle={toggleChorizo}>
        <ModalHeader toggle={toggleChorizo}>Receta de Chorizo Chuquisaqueño</ModalHeader>
        <ModalBody>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>1 kg de carne de cerdo</li>
            <li>100 g de tocino</li>
            <li>Especias (ajo, ají, comino, etc.)</li>
            <li>Tripas de cerdo</li>
          </ul>
          <p><strong>Preparación:</strong></p>
          <ol>
            <li>Pica la carne de cerdo y el tocino, y mezcla con las especias.</li>
            <li>Embucha la mezcla en las tripas de cerdo y cocina o asa según preferencia.</li>
            <li>Sirve caliente con acompañamientos típicos.</li>
          </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleChorizo}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}


import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Tres(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className='hijo3'>
        <h2>Sopas</h2>
        <p>Las sopas bolivianas son deliciosas y reconfortantes, representando una parte importante de la gastronomía boliviana.
        Desde la tradicional Sopa de Maní hasta la suculenta Sopa de Quinua, las sopas bolivianas ofrecen una explosión de sabores y texturas que deleitarán tu paladar.</p>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Caldo de papas y huevos</AccordionHeader>
          <AccordionBody accordionId="1">
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./17.jpeg"
                top
                width="100%"
                className='estilo-imagen'
              />
            </Col>
            <Col sm="8">
              <p>
                El caldo de papas y huevos es un plato reconfortante y reconecta con nuestras raíces en la cocina latinoamericana. Con ingredientes simples y un toque de amor, esta receta se convierte en un bálsamo para el alma en días de frío.
              </p>
              <p>En un día frío y lluvioso, a menudo recurren a un reconfortante plato de Caldo de papas y huevos.
                 El aroma de las papas cocidas a fuego lento con hierbas y especias llena la casa de una sensación acogedora.
                 Con un huevo pochado añadido al final, el caldo se convierte en una deliciosa comida reconfortante que deleita a todos los comensales.</p>
            </Col>
          </Row>
        </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Locro de Gallina</AccordionHeader>
          <AccordionBody accordionId="2">
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./18.jpeg"
                top
                width="100%"
                className='estilo-imagen'
              />
            </Col>
            <Col sm="8">
              <p>
                El Locro de Gallina, típico de Bolivia, es un guiso espeso con papas, carne de gallina y maíz. Se sazona con hierbas y se acompaña con ají y cebolla picada. Es un plato reconfortante y lleno de sabores. Ideal para compartir en familia.
              </p>
              <p>El aroma del locro de gallina se expande por la cocina, despertando los sentidos con su calidez reconfortante.
                  Las papas y el maíz se mezclan en una danza de texturas y sabores, creando un platillo lleno de tradición y sabor. Es el plato perfecto para compartir en familia en un día frío de invierno.</p>
            </Col>
          </Row>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Sopa de Quinua</AccordionHeader>
          <AccordionBody accordionId="3">
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./19.jpeg"
                top
                width="100%"
                className='estilo-imagen'
              />
            </Col>
            <Col sm="8">
              <p>
              La Sopa de Quinua, plato tradicional del altiplano boliviano, combina la versatilidad de la quinua con sabores auténticos.
              </p>
              <p>Una mezcla de caldo, carne de res, cebolla, habas, papas imillas y especias locales resulta en un plato reconfortante y lleno de nutrientes. Una delicia para el paladar.
                Una vez listos todos los ingredientes, se sirve el guiso con perejil picado para realzar su sabor.</p>
            </Col>
          </Row>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Sopa de Mani</AccordionHeader>
          <AccordionBody accordionId="4">
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./20.jpeg"
                top
                width="100%"
                className='estilo-imagen'
              />
            </Col>
            <Col sm="8">
              <p>
              La sopa de maní es una de las sopas más deliciosas de Bolivia. Esta receta es probablemente la versión más completa, ya que incluye ingredientes que normalmente no se utilizan en la sopa tradicional.
              </p>
              <p>La sopa de maní es un plato tradicional y popular en Bolivia. Esta sopa rica y reconfortante combina sabores y texturas únicos.
                  La sopa de maní boliviana se prepara a partir de maní (cacahuete) molido o en pasta, que se utiliza como base para la sopa. Se suele combinar con ingredientes como carne de res, pollo o cerdo, así como con verduras y especias.</p>
            </Col>
          </Row>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Sopa de Papalisa</AccordionHeader>
          <AccordionBody accordionId="5">
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./21.jpeg"
                top
                width="100%"
                className='estilo-imagen'
              />
            </Col>
            <Col sm="8">
              <p>
              La sopa de papalisa es un platillo tradicional boliviano, especialmente popular en las regiones andinas. Se trata de una deliciosa mezcla de carne, papalisa, arvejas y habas en un reconfortante caldo. Su preparación sencilla y ingredientes nutritivos la convierten en una opción perfecta para disfrutar en días fríos.
              </p>
              <p>La sopa de papalisa es una celebración de la biodiversidad y las tradiciones agrícolas de los Andes. La papalisa ha sido cultivada y consumida por las comunidades andinas durante siglos. La sopa de papalisa refleja la riqueza de la cocina boliviana, que sabe aprovechar los ingredientes nativos para crear platos nutritivos y deliciosos.</p>
            </Col>
          </Row>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Cuatro(props) {
    const [ratings, setRatings] = useState(Array(9).fill(0)); // Estado para calificaciones de los 9 platos

    const handleRating = (index, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value; // Actualiza la calificación del plato correspondiente
        setRatings(newRatings);
    };

    const platos = [
        { id: 1, title: "Silpancho", description: "El Silpancho se compone con una base de arroz blanco cocido y papas, sobre las cuales se coloca una porción de carne de res aplanada y empanizada, similar a una milanesa, que se fríe hasta quedar bien cocida. Este apanado se corona con un huevo frito, y se acompaña con una ensalada de cebolla, tomate y locoto (también llamado sarza), que añade frescura y picante al plato.", image: "./22.jpeg" },
        { id: 2, title: "Plato Paceño", description: "El Plato Paceño, con choclo, habas, papas y queso frito, es un deleite tradicional boliviano. La llajhua de locoto y quirquiña le aporta un toque picante ideal para disfrutar en cualquier ocasión. Una combinación de sabores que sin duda conquistará tu paladar.En la cocina paceña, los choclos y habas se cocinan con esmero, envueltos y lavados, las papas se hierven, las tajadas de queso, son un deleite en cada bocado.", image: "./23.jpeg" },
        { id: 3, title: "Charquekan", description: "El charquekan orureño tiene sus antecedentes dentro de la comunidad de los Urus, y se popularizó entre los mineros orureños debido a que el charque no se hecha a perder con facilidad, se lo conocía como charque de llama con mote..El charquekan es un plato originario del departamento de Oruro. Consiste en carne de llama o res desmenuzada, acompañada de papa, mote, queso y su infaltable llajwa (salsa picante).", image: "./24.jpeg" },
        { id: 4, title: "Majadito", description: "Es una receta típica de tierras orientales bolivianas, plato reconfortante hecho con arroz, carne de res, tomate, cebolla y condimentos. El Majadito es un platillo tradicional que combina arroz y carne en una mezcla única y sabrosa. Sus ingredientes simples se preparan de forma sencilla, pero el resultado es un plato lleno de sabor y tradición.", image: "./25.jpeg" },
        { id: 5, title: "Saice", description: "El saice tarijeño o saice chapaco es un plato típico de Tarija, consiste en una suculenta elaboración que tiene como base un guiso de carne y vegetales, sazonado con esmero, acompañado por arroz, chuño (papa deshidratada) y una rica ensalada para darle el toque final. Los ingredientes pueden variar, dependiendo al gusto del comensal.", image: "./27.jpeg" },
        { id: 6, title: "Mondongo", description: "El Mondongo chuquisaqueño es un plato fuerte muy popular en el Departamento de Chuquisaca, Bolivia, que se elabora a partir de carne de cerdo como ingrediente principal. El Mondongo chuquisaqueño es un plato típico de la región de Chuquisaca, en Bolivia. Se trata de un guiso abundante y sabroso que tiene como ingrediente principal el mondongo, que es el estómago de la vaca o el cerdo.", image: "./28.jpeg" },
        { id: 7, title: "Pique a lo Macho", description: "El pique a lo macho, oriundo de Cochabamba pero popular en toda Bolivia, combina carne, papas fritas, cebolla y tomates en una explosión de sabores. Perfecto para compartir y acompañar con una refrescante cerveza. En la cocina boliviana, el pique a lo macho es un plato lleno de sabores y colores. En su preparación, se combinan ingredientes como carne, cebolla, tomate, papas y ají, creando un guiso picante y reconfortante. Es ideal para compartir en una reunión con amigos o familia, acompañado de arroz blanco y una buena cerveza fría.", image: "./29.jpeg" },
        { id: 8, title: "Fricasé", description: "Conocido por su rico y robusto sabor, este guiso de carne de cerdo es una opción favorita para celebraciones, festividades y comidas reconfortantes durante los fríos días andinos. La preparación del fricasé boliviano comienza con carne de cerdo, que suele incluir costillas y trozos con piel y grasa, proporcionando un sabor y textura únicos al plato. La carne se adoba previamente con una mezcla de sal, pimienta, ajo, comino para realzar el sabor. El corazón del fricasé es su distintiva salsa amarilla, que se prepara con ají amarillo molido. El fricasé se sirve caliente, acompañado de mote y chuño (papas deshidratadas).", image: "./26.jpeg" },
        { id: 9, title: "Sajta de Pollo", description: "La Sajta de gallina es un típico plato paceño, consumido en fiestas y carnavales. Preparado con ingredientes como pollo, tunta, papas. Una receta tradicional de la gastronomía boliviana llena de sabor y tradición. Para preparar la Sajta de pollo, es importante comenzar remojando la tunta y preparando las papas, luego se deben cortar y picar diversos ingredientes como apio, cebolla y ají, el pollo se limpia y se añade a la mezcla junto con condimentos como comino y ajo. Finalmente, se cocinan las papas y las tuntas rellenas de queso, se prepara una sabrosa sarza con tomate y cebolla, y se sirve todo junto para disfrutar de esta exquisita receta.", image: "./30.jpeg" }
    ];

    return (
        <div className='hijo4'>
            <h2>Platos Principales</h2>
            <div className="recipe-grid">
                {platos.map((plato, index) => (
                    <div key={plato.id} className="recipe-card">
                        <img src={plato.image} alt={plato.title} className="recipe-image" />
                        <div className="recipe-content">
                            <h3 className="recipe-title">{plato.title}</h3>
                            <p className="recipe-description">{plato.description}</p>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${ratings[index] >= star ? "selected" : ""}`}
                                        onClick={() => handleRating(index, star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Cinco(props) {
  return (
    <div className='hijo6'>
      <h2>Reposteria</h2>

      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">
            Alfajores
          </CardTitle>
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./31.jpeg"
                top
                width="100%"
                className='estilo-imagen-reposteria'
              />
            </Col>
            <Col sm="8">
              Los alfajores de maicena son deliciosos pastelillos de consistencia suave, populares durante la feria de Alacitas en La Paz. Su preparación lleva maicena, azúcar, manteca y dulce de leche, creando un bocado irresistiblemente dulce y delicado.
              Para disfrutar de un dulce bocado, los alfajores de maicena son una excelente opción. Su textura suave y su sabor dulce los hacen irresistibles.
              Perfectos para acompañar un café o té en cualquier momento del día
              </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">
            Tawa Tawas
          </CardTitle>
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./32.jpeg"
                top
                width="100%"
                className='estilo-imagen-reposteria'
              />
            </Col>
            <Col sm="8">
            Las tawa tawas son masitas fritas típicas de Potosí, al igual que las sopaipillas y los chambergos son parte de nuestra cultura culinaria.
            Las tawa tawas son unas masas delgadas, rectangulares, infladas que se comen con miel de caña o azúcar molida encima, por lo general se consume este producto en el occidente de Bolivia, originarias de Potosí y con una larga tradición desde la època de la colonia, lo mas conveniente es consumirla en dias de frío junto con un delicioso café o chocolate caliente.
              </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="my-2">
        <CardBody>
          <CardTitle tag="h5">
            Biscochuelo
          </CardTitle>
          <Row>
            <Col sm="4">
              <CardImg
                alt="Card image cap"
                src="./33.jpeg"
                top
                width="100%"
                className='estilo-imagen-reposteria'
              />
            </Col>
            <Col sm="8">
            El bizcochuelo es un clásico de la repostería casera. Su esponjosa textura y sabor delicado lo convierten en el acompañante perfecto para cualquier celebración. Con una preparación sencilla y versátil, es el protagonista ideal para alegrar cualquier ocasión especial.
            Con una preparación sencilla y versátil, es el protagonista ideal para alegrar cualquier ocasión especial
              </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

function Seis(props) {
  return (
    <div className='hijo6'>
      <h2>Postres y Bebidas</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UncontrolledCarousel
          items={[
            {
              altText: 'Api',
              caption: 'Api',
              key: 1,
              src: './34.jpeg',
            },
            {
              altText: 'Arroz con leche',
              caption: 'Arroz con leche',
              key: 2,
              src: './35.jpeg',
            },
            {
              altText: 'Helado de Chirimoya',
              caption: 'Helado de Chirimoya',
              key: 3,
              src: './36.jpeg',
            },
            {
              altText: 'Mazamorra',
              caption: 'Mazamorra',
              key: 4,
              src: './38.jpeg',
            }
          ]}
          style={{
            width: '70%',  // Ajusta el ancho del carrusel (puedes cambiar el 70% si es necesario)
          }}
        />
      </div>
    </div>
  );
}

function Principal(props){
    return(
        <div className='padre'>
            <h1 className='titulo'>PLATOS TIPICOS DE BOLIVIA</h1>
            <ul className="horizontal-menu">
                <li><Link to="/">Historia</Link></li>
                <li><Link to="/dos">Entradas</Link></li>
                <li><Link to="/tres">Sopas</Link></li>
                <li><Link to="/cuatro">Plato Principal</Link></li>
                <li><Link to="/cinco">Reposteria</Link></li>
                <li><Link to="/seis">Postres y Bebidas</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Uno></Uno>}></Route>
                <Route path='/dos' element={<Dos></Dos>}></Route>
                <Route path='/tres' element={<Tres></Tres>}></Route>
                <Route path='/cuatro' element={<Cuatro></Cuatro>}></Route>
                <Route path='/cinco' element={<Cinco></Cinco>}></Route>
                <Route path='/seis' element={<Seis></Seis>}></Route>
            </Routes>
        </div>
    );
}
export default Principal;