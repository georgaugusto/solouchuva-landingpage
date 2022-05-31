import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { HeaderContent, Logo, Button } from './styles';

import logoImg from '../../assets/logo.svg';

function Header() {
  return (
    <HeaderContent>
      <Logo>
        <img src={logoImg} alt="SolouChuva" />
        <strong>Sol ou Chuva</strong>
      </Logo>

      <Button href="https://app.solouchuva.com.br">
        <strong>Testar demostração</strong>
        <FiArrowRight />
      </Button>
    </HeaderContent>
  );
}

export default Header;
