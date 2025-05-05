import React from "react";
import styles from "./ProjectsStyles.module.css";
import senac from "../../assets/salaosenac.png";
import emprestaTech from "../../assets/emprestatech.png";
import ProjectCard from "../../common/ProjectCard";
import qa from "../../assets/qa.png";
import titanic from "../../assets/titanic.png";
import lojaderoupa from "../../assets/lojaderoupa.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={senac}
          link="https://github.com/Heytorpimentell/Salao-SENAC-BD"
          h3="Salão Senac"
          p="Sistema de gerenciamento do Salão de Beleza Senac | Tecnologias: BootStrap, TypeScript e MySQL"
        />
        <ProjectCard
          src={emprestaTech}
          link="https://github.com/Heytorpimentell/EmprestaTech"
          h3="EmprestaTech"
          p="Site de registro de ferramentas | Tecnologias: Html, CSS, JavaScript, NodeJS, MongoDB (Full-Stack)"
        />
        <ProjectCard
          src={qa}
          link="https://github.com/Heytorpimentell/Automation-testing-QA---CESAR"
          h3="Teste automatizado"
          p="Código para automatizar testes do site SwagLabs | Tecnologias: Python, Selenium "
        />
        <ProjectCard
          src={titanic}
          link="https://github.com/Heytorpimentell/DashboardTitanic"
          h3="Análise de Dados"
          p="Dashboard para análise de passageiros do Titanic | Tecnologias: Python, Streamlit, Matplot"
        />
        <ProjectCard
          src={lojaderoupa}
          link="https://github.com/Heytorpimentell/Bd_lojaderoupa-SQL"
          h3="Banco de dados Loja de Roupa"
          p="Banco de dados Conceitual/Relacional/Físico | Tecnologias: MySQL, BrModelo"
        />
      </div>
    </section>
  );
}

export default Projects;
