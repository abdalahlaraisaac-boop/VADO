import { useEffect, useState } from "react";
import logoVado from "./rojo (1).svg";

const phone = "999 163 2986";
const whatsappHref =
  "https://wa.me/529991632986?text=Hola%2C%20quiero%20cotizar%20un%20trabajo%20en%20vidrio%2C%20aluminio%20o%20herrer%C3%ADa.";
const facebookHref = "https://www.facebook.com/VADOMID";
const mapsHref =
  "https://www.google.com/maps/place/Vado+Vidrios+Aluminios+y+Herrer%C3%ADa/@21.0367649,-89.587799,14z/data=!4m10!1m2!2m1!1svidrios+y+aluminios!3m6!1s0x8f5676d3e33ed6cf:0xb3b531ba2e82cf5c!8m2!3d21.0367649!4d-89.5496902!15sChN2aWRyaW9zIHkgYWx1bWluaW9zWhUiE3ZpZHJpb3MgeSBhbHVtaW5pb3OSAQ1taWxsd29ya19zaG9wmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5VTUUxRVlqSm5SUkFC4AEA-gEECAAQMQ!16s%2Fg%2F1tj2jz1c?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D";

const images = {
  hero: "/assets/hero.jpg",
  servicesMain: "/assets/servicios 1.jpg",
  servicesDetail: "/assets/servicios 2.jpeg",
  value: "/assets/precision 2.jpeg",
  serviceWindow: "/assets/ventanas de aluminio.jpg",
  serviceDoor: "/assets/puertas de aluminio.jpg",
  serviceShower: "/assets/canceles de banio.jpg",
  serviceRailing: "/assets/barandal de aluminio.jpg",
  serviceDome: "/assets/domos.jpg",
  serviceFacade: "/assets/fachadas de cristal.jpg",
  serviceMirror: "/assets/espejos y cristales al corte.jpg",
  serviceCustom: "/assets/trabajos especiales a medida.jpg",
  process:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  clientHome:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  clientBusiness:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  clientConstruction:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  cta:
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
};

const services = [
  {
    number: "01",
    title: "Ventanas de aluminio",
    text: "Perfiles resistentes, ajuste preciso y sellado limpio para clima y uso diario.",
    image: images.serviceWindow,
  },
  {
    number: "02",
    title: "Puertas de aluminio",
    text: "Accesos sólidos con imagen moderna para vivienda, comercio u oficina.",
    image: images.serviceDoor,
  },
  {
    number: "03",
    title: "Canceles de baño",
    text: "Soluciones claras, templadas y fáciles de mantener para baños contemporáneos.",
    image: images.serviceShower,
  },
  {
    number: "04",
    title: "Barandales",
    text: "Protección y vista despejada en escaleras, balcones y terrazas.",
    image: images.serviceRailing,
  },
  {
    number: "05",
    title: "Domos",
    text: "Entrada de luz natural con estructura firme y terminados de alto nivel.",
    image: images.serviceDome,
  },
  {
    number: "06",
    title: "Fachadas de cristal",
    text: "Frentes comerciales y residenciales con presencia, seguridad y transparencia.",
    image: images.serviceFacade,
  },
  {
    number: "07",
    title: "Espejos y vidrios al corte",
    text: "Piezas exactas para interiores, baños y detalles decorativos en vidrio.",
    image: images.serviceMirror,
  },
  {
    number: "08",
    title: "Trabajos especiales a medida",
    text: "Fabricación especial cuando el proyecto pide una solución fuera de catálogo.",
    image: images.serviceCustom,
  },
];

const benefits = [
  {
    title: "Medidas exactas",
    text: "Levantamiento claro antes de fabricar para reducir ajustes, desperdicio y retrasos en obra.",
  },
  {
    title: "Instalación profesional",
    text: "Equipo preparado para cuidar muros, niveles, sellos y funcionamiento desde el primer día.",
  },
  {
    title: "Acabados limpios y resistentes",
    text: "Perfiles, vidrio y herrería con terminaciones sobrias, fáciles de mantener y pensadas para uso real.",
  },
];

const stats = [
  { value: "+35", label: "años de oficio local" },
  { value: "100%", label: "a medida", accent: true },
  { value: "1h", label: "respuesta inicial" },
];

const steps = [
  {
    number: "01",
    title: "Foto o medidas aproximadas",
    text: "Envía fotos del área, medidas base o una referencia visual del resultado que buscas.",
  },
  {
    number: "02",
    title: "Revisión del trabajo",
    text: "Confirmamos viabilidad, tipo de instalación y detalles técnicos antes de cotizar.",
  },
  {
    number: "03",
    title: "Cotización por material y medidas",
    text: "Calculamos según calibre, acabado, dimensiones y complejidad del proyecto.",
  },
  {
    number: "04",
    title: "Fabricación e instalación",
    text: "Producimos en taller y coordinamos montaje limpio en sitio.",
  },
];

const clientTypes = [
  {
    title: "Para casa",
    text: "Ventanas, puertas, canceles, domos y barandales para espacios residenciales con acabados limpios.",
    image: images.clientHome,
  },
  {
    title: "Para negocios",
    text: "Fachadas, accesos, vitrinas, cristales y mantenimiento para una imagen profesional.",
    image: images.clientBusiness,
  },
  {
    title: "Para construcción",
    text: "Cancelería, estructuras, cristales a medida y proyectos especiales para obra y remodelación.",
    image: images.clientConstruction,
  },
];

const ambientParticles = Array.from({ length: 48 }, (_, index) => index + 1);

function revealStyle(index, step = 80) {
  return { "--reveal-delay": `${index * step}ms` };
}

function BackgroundImage({ image, className = "", children, label }) {
  return (
    <div
      className={`bg-image ${className}`}
      style={{ "--bg-image": `url("${image}")` }}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {children}
    </div>
  );
}

function VadoLogo() {
  return (
    <div className="brand-lockup" aria-label="VADO Mérida">
      <img className="logo-image" src={logoVado} alt="VADO Mérida" />
      <span className="brand-city">| Mérida</span>
    </div>
  );
}

function SectionIntro({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default function VadoLanding() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, prefersReducedMotion ? 250 : 2400);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    let animationFrame = 0;

    const updateAmbientMotion = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = scrollY / maxScroll;
      const ambientX = Math.round((progress - 0.5) * 90);
      const ambientY = Math.round(scrollY * -0.09);
      const followY = Math.round(Math.sin(progress * Math.PI) * 120 + scrollY * 0.035);

      root.style.setProperty("--scroll-progress", progress.toFixed(4));

      if (!prefersReducedMotion) {
        root.style.setProperty("--ambient-y", `${ambientY}px`);
        root.style.setProperty("--ambient-follow-y", `${followY}px`);
        root.style.setProperty("--ambient-x", `${ambientX}px`);
        root.style.setProperty("--ambient-y-soft", `${Math.round(ambientY * 0.62)}px`);
        root.style.setProperty("--ambient-y-reverse", `${Math.round(ambientY * -0.45)}px`);
        root.style.setProperty("--ambient-x-soft", `${Math.round(ambientX * 0.45)}px`);
        root.style.setProperty("--ambient-x-reverse", `${Math.round(ambientX * -0.7)}px`);
        root.style.setProperty("--ambient-particle-x", `${Math.round(ambientX * 0.25)}px`);
        root.style.setProperty("--ambient-particle-y", `${Math.round(ambientY * 0.35)}px`);
        root.style.setProperty("--ambient-rotate", `${(progress * 8 - 4).toFixed(2)}deg`);
      }
      animationFrame = 0;
    };

    const requestAmbientUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateAmbientMotion);
      }
    };

    updateAmbientMotion();
    window.addEventListener("scroll", requestAmbientUpdate, { passive: true });
    window.addEventListener("resize", requestAmbientUpdate);

    return () => {
      window.removeEventListener("scroll", requestAmbientUpdate);
      window.removeEventListener("resize", requestAmbientUpdate);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHover) {
      return undefined;
    }

    const root = document.documentElement;
    let animationFrame = 0;
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    const updateCursorGlow = () => {
      root.style.setProperty("--cursor-x", `${Math.round(cursorX)}px`);
      root.style.setProperty("--cursor-y", `${Math.round(cursorY)}px`);
      root.style.setProperty("--cursor-opacity", "1");
      animationFrame = 0;
    };

    const handleMouseMove = (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateCursorGlow);
      }
    };

    const handleMouseLeave = () => {
      root.style.setProperty("--cursor-opacity", "0");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="vado-page">
      <span className="scroll-progress" aria-hidden="true" />
      <span className="cursor-glow" aria-hidden="true" />

      {showIntro ? (
        <div className="intro-loader" aria-hidden="true">
          <div className="intro-loader__mark">
            <img src={logoVado} alt="" />
          </div>
          <span>Vidrio | Aluminio | Herreria</span>
        </div>
      ) : null}

      <div className="ambient-background" aria-hidden="true">
        <span className="ambient-scroll-glow" />
        <span className="ambient-glow ambient-glow--one" />
        <span className="ambient-glow ambient-glow--two" />
        <span className="ambient-glow ambient-glow--three" />
        <span className="ambient-grid" />
        <span className="ambient-particles">
          {ambientParticles.map((particle) => (
            <i key={particle} className={`ambient-particle ambient-particle--${particle}`} />
          ))}
        </span>
      </div>

      <header className="site-header">
        <nav className="nav-card" aria-label="Navegación principal">
          <VadoLogo />
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#cotizar">Cotizar</a>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">VIDRIO | ALUMINIO | HERRERÍA</span>
            <h1>Vidrio, aluminio y herrería a medida en Mérida</h1>
            <p>
              Fabricamos e instalamos ventanas, puertas, canceles, barandales,
              domos, fachadas y trabajos especiales con acabados profesionales.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
                Cotizar por WhatsApp
              </a>
            </div>
            <small>Atención en Mérida y alrededores para casas, negocios y obra.</small>
          </div>

          <BackgroundImage
            className="hero-photo"
            image={images.hero}
            label="Fachada con vidrio y cancelería"
          >
            <span className="photo-chip">FACHADAS | CANCELERÍA | HERRERÍA</span>
          </BackgroundImage>
        </div>
      </section>

      <section className="section services-section" id="servicios">
        <div className="container">
          <div className="services-showcase reveal-on-scroll">
            <div className="services-copy">
              <div className="rule-eyebrow">
                <span />
                <b>SERVICIOS EN MÉRIDA</b>
              </div>
              <h2>ALUMINIO, VIDRIO Y HERRERÍA CON PRESENCIA PREMIUM</h2>
              <p>
                Fabricamos e instalamos soluciones a medida para residencias,
                comercios y proyectos arquitectónicos que exigen precisión,
                resistencia y una imagen impecable.
              </p>
            </div>

            <div className="services-media">
              <BackgroundImage
                className="services-media-main"
                image={images.servicesMain}
                label="Fachada de cristal"
              />
              <BackgroundImage
                className="services-media-side"
                image={images.servicesDetail}
                label="Detalle de aluminio"
              />
            </div>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card reveal-on-scroll" key={service.number} style={revealStyle(index)}>
                <BackgroundImage className="service-card-image" image={service.image} label={service.title} />
                <div className="card-kicker">
                  <span />
                  <b>{service.number}</b>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section value-section">
        <div className="container value-grid reveal-on-scroll">
          <div className="value-copy">
            <div className="rule-eyebrow">
              <span />
              <b>PROPUESTA DE VALOR</b>
            </div>
            <h2>PRECISIÓN QUE SE NOTA DESDE EL LEVANTAMIENTO</h2>
            <p>
              Cada proyecto se trabaja con medidas exactas, instalación
              profesional y acabados limpios para que el resultado se vea sólido,
              elegante y listo para durar.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <article className="benefit-item reveal-on-scroll" key={benefit.title} style={revealStyle(index, 90)}>
                  <span className="benefit-dot" />
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="value-media">
            <BackgroundImage
              className="value-photo"
              image={images.value}
              label="Proceso de levantamiento e instalación"
            />
            <div className="stats-strip">
              {stats.map((stat, index) => (
                <div className="stat-card reveal-on-scroll" key={stat.label} style={revealStyle(index, 80)}>
                  <strong className={stat.accent ? "accent" : ""}>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="container process-grid reveal-on-scroll">
          <BackgroundImage
            className="process-visual"
            image={images.process}
            label="Fabricación en taller"
          >
            <span className="photo-chip process-chip">FABRICACIÓN A MEDIDA</span>
            <div className="process-proof">
              <strong>DE PLANO A INSTALACIÓN</strong>
              <p>
                Aterrizamos medidas, materiales y tiempos para que sepas qué se
                fabrica, cuánto cuesta y cuándo queda listo.
              </p>
            </div>
          </BackgroundImage>

          <div className="process-content">
            <SectionIntro eyebrow="PROCESO CLARO PARA COTIZAR" title="Así trabajamos">
              Menos vueltas, más precisión: convertimos tu idea en una cotización
              fabricable, con materiales definidos y una ruta de instalación.
            </SectionIntro>

            <div className="steps-list">
              {steps.map((step, index) => (
                <article className="step-card reveal-on-scroll" key={step.number} style={revealStyle(index, 90)}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section clients-section">
        <div className="container">
          <SectionIntro eyebrow="CLIENTES" title="Para casa, negocio o construcción" />
          <div className="client-grid">
            {clientTypes.map((client, index) => (
              <article className="client-card reveal-on-scroll" key={client.title} style={revealStyle(index, 90)}>
                <BackgroundImage className="client-card-media" image={client.image} label={client.title} />
                <span />
                <h3>{client.title}</h3>
                <p>{client.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" id="cotizar">
        <div className="container">
          <SectionIntro
            eyebrow="COTIZACIÓN DIRECTA"
            title="¿Necesitas cotizar un trabajo en vidrio, aluminio o herrería?"
            align="center"
          />

          <div className="final-cta-panel reveal-on-scroll">
            <div>
              <span className="eyebrow">COTIZACIÓN POR WHATSAPP</span>
              <p>
                Envíanos una foto de tu espacio y te decimos qué solución conviene
                en vidrio, aluminio o herrería.
              </p>
            </div>
            <div className="final-actions">
              <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
                Cotizar por WhatsApp
              </a>
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container footer-content">
          <div>
            <h2>VADO | Mérida</h2>
            <p>Vidrio, aluminio y herrería a medida</p>
          </div>
          <address>
            <span>WhatsApp: {phone}</span>
            <span>Atendemos en la zona norte y alrededores</span>
            <div className="footer-link-actions">
              <a className="footer-link-button" href={facebookHref} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a className="footer-link-button" href={mapsHref} target="_blank" rel="noreferrer">
                Ubicación
              </a>
            </div>
          </address>
        </div>
      </footer>
    </main>
  );
}
