import {Container, Footer, Header, Main, WhatsAppButtonFixed} from "./styles"

import {ButtonWhatsApp} from "../../components/whatsAppButton";

import LogoImg from "../../assets/CamScanner 21-04-2024 16.18_page-0001.png";

import { BsWhatsapp } from "react-icons/bs";

export function Home(){
  
  return(
    <Container>

      <Header>
        <h1>Envelheça com saúde e vitalidade</h1>
        <h2>Daniel Rodovalho - Personal trainer</h2>
      </Header>

      <Main>

        <WhatsAppButtonFixed>
        <a href="https://wa.me/5561995518888" target="_blank">
          <BsWhatsapp/>
        </a>
        </WhatsAppButtonFixed>

        <img src={LogoImg} alt="Imagem da logo do personal trainer" />
        
        <ButtonWhatsApp title="Faça sua primeira avaliação física"/>


          <p>
            Com o acompanhamento certo, cada dia pode ser uma nova opurtunidade para você se sentir mais forte,
            mais equilibrado e cheio de vida.
          </p>

          <p>
            Sou Daniel Rodovalho, personal trainer dedicado a ajudar você a alcançar sua melhor forma.
          </p>

          <h2>Porque treinar</h2>
          <ul>
            <li>Saúde e longevidade</li>
            <li>Força e equilibrio</li>
            <li>Independência, aumente sua capacidade de realizar suas atividade diárias com maior facilidade</li>
          </ul>

          <h2>O que ofereço</h2>
          
          <p>
            Treinamento personalizado especialmente para atender suas necessidades e objetivos, com foco
            na sua segurança e no bem estar. <br />
            Flexiblidade na criação de treinos, podendo ser adaptados para fazer em casa ao seu nível de conforto  
          </p>

          <h2>Especialidades</h2>
          <ul>
            <li>Anamnese sem compromisso</li>
            <li>Terceira idade</li>
            <li>Avaliação física</li>
            <li>Cardiacos, obesos, diabéticos e hipertensos</li>
            <li>Hipertrofia muscular</li>
          </ul>

          <ButtonWhatsApp title="Entre em contato"/>
      </Main>

      <Footer>
        <span>Daniel Rodovalho CREF/DF 018946-G/DF</span>
      </Footer>

    </Container>
  )
}