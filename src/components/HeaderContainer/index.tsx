import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

const HeaderContainer: React.FC = () => {
  return (
    <HeaderContent>
      <img src={logoImg} alt="SolouChuva" />
      <strong>Sol ou Chuva</strong>

      <a href="https://app.solouchuva.com.br">
        <Profile>
          <strong>Testar demostração</strong>
          <FiArrowRight />
        </Profile>
      </a>
    </HeaderContent>
  );
};

export default HeaderContainer;
