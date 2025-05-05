import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/perfil-foto.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import lattesLight from "../../assets/lattesIcon-ligth.svg";
import lattesDark from "../../assets/lattesIcon-dark.svg";

import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const lattesIcon = theme === "light" ? lattesLight : lattesDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Foto de perfil de Heytor Pimentel"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Alternar tema da página"
          onClick={toggleTheme}
          role="button"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Heytor
          <br />
          Pimentel
        </h1>
        <h2>Desenvolvedor Back-end</h2>
        <span className={styles.socialIcons}>
          <a
            href="https://github.com/Heytorpimentell?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil do GitHub"
          >
            <img src={githubIcon} alt="Ícone do GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/heytor-pimentel-b121a125b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil do LinkedIn"
          >
            <img src={linkedinIcon} alt="Ícone do LinkedIn" />
          </a>
          <a
            href="https://lattes.cnpq.br/INSIRA_SEU_ID_LATTES" // Substitua pelo seu link específico do Lattes
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil do Lattes"
          >
            <img src={lattesIcon} alt="Ícone do Lattes" />
          </a>
        </span>
        <p className={styles.descrition}>
          Um recifense de 19 anos, inovando para transformar a realidade das
          pessoas com códigos.
        </p>
        <a href={CV} download aria-label="Baixar currículo em PDF">
          <button className={styles.button}>Currículo</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
