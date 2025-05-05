import styles from "./FooterStyles.module.css"; // Corrigido para .module.css

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        © 2025 Heytor Pimentel. <br />
        Todos os direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
