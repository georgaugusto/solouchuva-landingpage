import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import HeaderContainer from '../../components/HeaderContainer';

import logoImg from '../../assets/logo.svg';

import gitImg from '../../assets/git.svg';
import lnImg from '../../assets/ln.svg';

import stationImg from '../../assets/station.svg';
import manImg from '../../assets/man.svg';

import temperatureImg from '../../assets/temperature.svg';
import moistureImg from '../../assets/moisture.svg';
import luminosityImg from '../../assets/luminosity.svg';
import atmosphericpressureImg from '../../assets/atmosphericpressure.svg';
import uvindexImg from '../../assets/uvindex.svg';
import altitudeImg from '../../assets/altitude.svg';
import windspeedImg from '../../assets/windspeed.svg';
import pluviometerindexImg from '../../assets/pluviometerindex.svg';

import {
  Container,
  Header,
  Content,
  SectionOne,
  SectionTwo,
  SectionThree,
  Weather,
  Box,
  Rectangle,
  SectionFour,
  ButtonBox,
  Button,
  Footer,
  Information,
  SocialMedia,
} from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContainer />
      </Header>

      <Content>
        <SectionOne>
          <strong>Estação Meteorológica de Baixo Custo</strong>
          <p>
            O clima está mudando mais rápido do que as ações para lidar com a
            questão.
          </p>
        </SectionOne>
        <img src={stationImg} alt="SolouChuva" />
      </Content>

      <Content>
        <SectionTwo>
          <img src={manImg} alt="SolouChuva" />
          <div>
            <h1>Sol ou Chuva</h1>
            <p>
              A aplicação desenvolvida será usada para exibir os dados coletados
              pela estação meteorológica, podendo emitir alertas, fazer
              previsões sobre a possibilidade futura de uma cultura desenvolver
              algum tipo de doença, entre outros. Assim, ajudando o usuário a
              tomar uma decisão.
            </p>
          </div>
        </SectionTwo>
      </Content>

      <Content>
        <SectionThree>
          <h1>Recursos</h1>
          <p>
            Alguns dos recursos e vantagens que oferecemos para aqueles que
            utilizam nossa estação meteorológica.
          </p>
          <Weather>
            <Box
              style={{
                backgroundImage: `url(${temperatureImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Temperatura</h1>
              <p>
                Indicam as temperaturas máxima e mínima do ar em graus Celsius
                (°C), ocorridas no dia em tempo real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${moistureImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Umidade do Ar e Solo</h1>
              <p>
                Registra a umidade do ar e do solo, em valores relativos,
                expressos em porcentagem (%), ocorridas no dia em tempo real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${luminosityImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Luminosidade</h1>
              <p>
                Detecta a incidência de luz, em quantidade de luz (lux),
                ocorridas no dia em tempo real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${atmosphericpressureImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Pressão Atmosférica</h1>
              <p>
                Mede a pressão atmosférica em coluna de milímetros de mercúrio
                (mm Hg) e em hectopascal (hPa), ocorridas no dia em tempo real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${uvindexImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Índice Ultravioleta</h1>
              <p>
                Medem diretamente a quantidade de radiação ultravioleta que está
                alcançando a superfície da Terra, ocorridas no dia em tempo
                real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${altitudeImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Altitude</h1>
              <p>
                Mede a altitude em metros (m), ocorridas no dia em tempo real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${windspeedImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Velocidade do Vento</h1>
              <p>
                Registra continuamente a velocidade instantânea do vento (em
                m/s), ocorridas no dia em tempo real.
              </p>
            </Box>
            <Box
              style={{
                backgroundImage: `url(${pluviometerindexImg})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1>Índice Pluviométrico</h1>
              <p>
                Registra a quantidade de precipitação pluvial (chuva), em
                milímetros (mm), ocorridas no dia em tempo real.
              </p>
            </Box>
          </Weather>
        </SectionThree>
      </Content>

      <Rectangle />

      <Content>
        <SectionFour>
          <div>
            <h1>Experimentar gratuitamente!</h1>
            <p>
              Ganhe acesso grátis e limitado ao Protótipo 0, experimente nossos
              recursos!
            </p>
          </div>
          <ButtonBox>
            <a href="https://app.solouchuva.com.br">
              <Button>
                <strong>Testar demostração</strong>
                <FiArrowRight />
              </Button>
            </a>
          </ButtonBox>
        </SectionFour>
      </Content>

      <Footer>
        <Information>
          <img src={logoImg} alt="SolouChuva" />
          <strong>Sol ou Chuva</strong>
          <div>
            <p>georgaugusto@gmail.com</p>
            <p>+55 (18) 99773-4154</p>
          </div>
        </Information>
        <SocialMedia>
          <strong>Mídias Sociais</strong>
          <div>
            <a href="https://github.com/georgaugusto">
              <img src={gitImg} alt="SolouChuva" />
            </a>
            <a href="https://www.linkedin.com/in/georgaugusto/">
              <img src={lnImg} alt="SolouChuva" />
            </a>
          </div>
          <p>Todos os direitos reservados</p>
        </SocialMedia>
      </Footer>
    </Container>
  );
};

export default LandingPage;
