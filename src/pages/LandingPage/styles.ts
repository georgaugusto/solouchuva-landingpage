import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, #f6fafd 0%, #ffffff 19.4%);
`;

export const Header = styled.header`
  padding: 32px 0px 60px 0px;
`;

export const Content = styled.main`
  max-width: 1280px;
  display: flex;

  margin: 0 auto;
  padding: 0px 20px 40px 20px;
`;

export const SectionOne = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  strong {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 110%;

    color: #212353;
  }

  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;

    color: #4b5d68;
  }
`;

export const SectionTwo = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 80%;
  padding: 93px 92px 63px 0px;
  margin: 0 auto;

  background: rgba(205, 221, 195, 0.15);
  border-radius: 50px;
  border: 1px solid #e6e5f2;
  box-sizing: border-box;

  img {
    width: 100%;
  }

  div {
    h1 {
      font-family: Helvetica;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 130%;

      display: flex;
      align-items: center;

      padding-bottom: 40px;

      color: #212353;
    }

    p {
      font-family: Avenir;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 160%;

      color: #4b5d68;
    }
  }
`;

export const SectionThree = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  h1 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 130%;

    display: flex;
    align-items: center;

    padding-bottom: 40px;

    color: #212353;
  }

  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;

    color: #4b5d68;
  }
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  margin: 0 auto;

  padding: 71px 0px 51px 0px;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  width: 482.29px;
  height: 388px;
  left: 288px;
  top: 1843px;

  h1 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;

    color: #212353;

    padding-left: 211px;
  }

  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;

    color: #4b5d68;

    padding: 0px 50px 0px 211px;
  }
`;

export const Rectangle = styled.div`
  position: flex;
  width: 100%;
  height: 2px;
  left: 1px;
  top: 3623px;

  margin-bottom: 80px;

  background: #b0c6a1;
  opacity: 0.2;
`;

export const SectionFour = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  div {
    padding-left: 50px;
    h1 {
      font-family: Helvetica;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 130%;

      color: #212353;
    }

    p {
      font-family: Avenir;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 160%;

      color: #4b5d68;
    }
  }
`;

export const ButtonBox = styled.div`
  a:link,
  a:visited {
    text-decoration: none;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 276px;
  height: 60px;
  left: 1084px;
  top: 50px;

  background: #ffffff;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  border-radius: 50px;

  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 160%;

  letter-spacing: 0.005em;

  color: #212353;

  svg {
    width: 30px;
    height: 24px;
    color: #b0c6a1;
  }
`;

export const Footer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 60px 40px 20px 40px;

  a:link,
  a:visited {
    text-decoration: none;
  }

  > strong {
    margin-right: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    padding-left: 30px;

    letter-spacing: 0.694286px;

    color: #212353;
  }

  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 180%;
    /* or 22px */

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    /* 2 */

    color: #212353;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    /* or 29px */

    letter-spacing: 0.01em;

    /* 2 */

    color: #212353;

    margin-top: 5px;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 20px 0px 20px 0px;

    a {
      padding-right: 10px;
    }
  }
`;
