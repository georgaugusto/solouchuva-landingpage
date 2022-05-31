import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, #f6fafd 0%, #ffffff 19.4%);
`;

export const Content = styled.main`
  max-width: 1280px;
  display: flex;

  margin: 0 auto;

  img:nth-child(2) {
    width: 30vw;
  }

  @media (max-width: 768px) {
    img:nth-child(2) {
      display: none;
    }
  }
`;

export const SectionOne = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 3rem 2rem 1rem 2rem;

  strong {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 110%;

    padding-bottom: 0.5rem;

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

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem 1rem;

    strong {
      font-size: 2rem;
    }
  }
`;

export const SectionTwo = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 80%;
  padding: 5rem 6rem 4rem 0px;
  margin: 0 auto;

  background: rgba(205, 221, 195, 0.15);
  border-radius: 50px;
  border: 1px solid #e6e5f2;
  box-sizing: border-box;

  img {
    width: 30vw;
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

  @media (max-width: 768px) {
    width: 100%;

    padding: 2rem 1rem;

    background: rgba(205, 221, 195, 0.15);
    border-radius: 0;
    border: none;
    box-sizing: border-box;

    div {
      h1 {
        font-size: 1.5rem;

        padding-bottom: 0.5rem;
      }
    }

    img {
      display: none;
    }
  }
`;

export const SectionThree = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 2rem;
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

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h1 {
      font-size: 1.5rem;

      padding-bottom: 0.5rem;
    }
  }
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 2rem;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
    align-content: center;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;

  /* margin: 0 auto; */

  /* width="482" height="366" */

  width: 100%;

  min-width: 482px;
  min-height: 366px;

  h1 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;

    color: #212353;

    /* padding-left: 211px; */
  }

  p {
    width: 50%;

    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;

    display: flex;
    align-items: center;

    color: #4b5d68;

    /* padding: 0px 50px 0px 211px; */
  }

  @media (max-width: 1280px) {
    /* width: 20vw;
    min-height: 366px; */

    min-width: auto;
    height: 100%;
    /* min-width: 482px;
    min-height: 366px; */

    background-size: 200vw;
    background-position: center;
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
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 2rem;

  div {
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

  @media (max-width: 768px) {
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      h1 {
        font-size: 1.5rem;

        padding-bottom: 0.5rem;
      }
    }
  }
`;

export const ButtonBox = styled.div`
  a:link,
  a:visited {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 276px;
  height: 60px;

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

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem;

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

  @media (max-width: 768px) {
    flex-direction: column;

    padding: 2rem 1rem;

    > strong {
      padding-left: 0;
    }
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

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
