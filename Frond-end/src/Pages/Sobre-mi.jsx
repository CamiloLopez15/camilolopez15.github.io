import React from "react";
import FotoPerfil from "../assets/Fotos de Perfil/Foto de perfil-1.jpg";
import Footer from "../Components/Footer";

//Assets
import hojaDeVida from "../assets/Hoja_de_vida_Camilo_Lopez_2024_1.pdf";
import Certificado from "../Components/Certificado";
import CertificadoJavaScript from "../assets/Certificados/Certificado-freecodecamp-JavaScript.png";
import CertificadoReact from "../assets/Certificados/Certificado-freecodecamp-React.png";
import CertificadoJavaScriptPlatzi from "../assets/Certificados/Certificado-platzi-JavaScript.png";
import CertificadoFundamentosProgramacionGoogle from "../assets/Certificados/Certificado-fundamentos-programacion-google.png";
import CertificadoAnimacionesGoogle from "../assets/Certificados/Certificado-animaciones-google.png";
import CertificadoMetodosArreglosGoogle from "../assets/Certificados/Certificado-metodos-arreglos-google.png";
import CertificadoIntroduccionEntrevistaGoogle from "../assets/Certificados/Certificado-introduccion-entrevista-google.png";

import CertificadoFundamentosProgramacionIIGoogle from "../assets/Certificados/Certificado-fundamentos-programacion-II-google.png";

import CertificadoAnimacionesIIGoogle from "../assets/Certificados/Certificado-animaciones-II-google.png";

import CertificadoCodigoDepuracionGoogle from "../assets/Certificados/Certificado-codigo-depuracion-google.png";

function SobreMi() {
  return (
    <>
      <section className="SobreMi">
        <h1 className="SobreMi-h1">
          Sobre <b>mí</b>
        </h1>
        <article className="SobreMi-h1__descripcionContenedor">
          <div className="descripcionContenedor__descripcion">
            <h2>
              Soy un <b>desarrollador web Full Stack</b> que actualmente vive en
              Barranquilla, Colombia
            </h2>
            <p>
              Soy un joven que comenzó a programar desde los 14 años, desperté
              un gran interés por el desarrollo de páginas web, por ende, me he
              dedicado a mejorar y aprender nuevas habilidades al rededor de
              este tema, mediante la creación de proyectos y distintos cursos de
              programación.
            </p>
            <a
              href={hojaDeVida}
              target="__BLANCK"
              download="Hoja de vida Camilo López"
            >
              Descargar hoja de vida
            </a>
          </div>
          <img src={FotoPerfil} />
        </article>
        <article className="SobreMi__historia" id="Sobre-mi">
          <h2 className="timelineH2">
            Mi <b>historia</b>
          </h2>
          <div className="timeline">
            <ul>
              <li>
                <div className="content">
                  <h3>¿Como empezó todo?</h3>
                  <p>
                    Soy un joven que se interesó en el mundo de la programación
                    desde los catorce años, a medida que transcurrió el tiempo
                    he ido <b>creando y realizando proyectos</b> que han
                    mejorado mis habilidades como programador, luego de eso
                    decidí hacer cursos muchos más extensos y especializados
                    sobre el Front-end de las páginas webs, donde aprendí mucho
                    más sobre
                    <b>HTML, CSS, JavaScript</b>, en la actualidad gracias a
                    esto, he hecho cursos de <b>más de 600 horas</b> de
                    contenido sin contar ejercicios, proyectos, etc.
                  </p>
                </div>
                <div className="time">
                  <h4>Información sobre mí</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>Las tecnologías que manejo.</h3>
                  <p>
                    Cuento con habilidades y conocimiento en los siguientes
                    lenguajes y tecnologías de <b>Front-end:</b> HTML 5, CSS 3,
                    ES6 o JavaScript, Bootstrap, React, jQuery, Redux, Sass.
                  </p>
                </div>
                <div className="time">
                  <h4>Tecnologías</h4>
                </div>
              </li>

              <li>
                <div className="content">
                  <h3>Mis certificaciones</h3>
                  <p>
                    En la actualidad cuento con las siguientes certificaciones,
                    pero aún sigo haciendo cursos para mejorar mi talento como
                    programador y{" "}
                    <b>estar actualizado en todas las tecnologías.</b>
                    <br />
                    <a
                      href="https://www.freecodecamp.org/certification/Camilo__Lopez/javascript-algorithms-and-data-structures"
                      title="JavaScript"
                      target="_blank"
                    >
                      Certificación de JavaScript.
                    </a>
                    <br />
                    <a
                      href="https://www.freecodecamp.org/espanol/certification/Camilo__Lopez/front-end-development-libraries"
                      title="Librerias de desarrollo"
                      target="_blank"
                    >
                      Certificación de librerías de desarrollo.
                    </a>
                  </p>
                </div>
                <div className="time last-time">
                  <h4>Certificados o diplomas</h4>
                </div>
              </li>
              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </article>
        <article className="sobreMi__certificados">
          <h2 className="SobreMi__certificados-h2">
            Mis <b>certificados</b>
          </h2>
          <article className="SobreMi__certificados__container">
            <Certificado
              img={CertificadoJavaScript}
              text={
                <>
                  Certificado de JavaScript de <b>FreeCodeCamp</b>
                </>
              }
            />
            <Certificado
              img={CertificadoReact}
              text={
                <>
                  Certificado de React de <b>FreeCodeCamp</b>
                </>
              }
            />
            <Certificado
              img={CertificadoJavaScriptPlatzi}
              text={
                <>
                  Certificado de JavaScript de <b>Platzi</b>
                </>
              }
            />
            <Certificado
              img={CertificadoFundamentosProgramacionGoogle}
              text={
                <>
                  Certificado de Fundamentos de Programación de <b>Google</b>
                </>
              }
            />

            <Certificado
              img={CertificadoAnimacionesGoogle}
              text={
                <>
                  Certificado de Animaciones de <b>Google</b>
                </>
              }
            />

            <Certificado
              img={CertificadoMetodosArreglosGoogle}
              text={
                <>
                  Certificado de Métodos de Arreglos de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoIntroduccionEntrevistaGoogle}
              text={
                <>
                  Certificado de Introducción a Entrevistas de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoFundamentosProgramacionIIGoogle}
              text={
                <>
                  Certificado de Fundamentos de Programación II de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoAnimacionesIIGoogle}
              text={
                <>
                  Certificado de Animaciones II de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoCodigoDepuracionGoogle}
              text={
                <>
                  Certificado de Código de Depuración de <b>Google</b>
                </>
              }
            />
          </article>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default SobreMi;
