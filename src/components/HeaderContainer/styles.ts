import styled from 'styled-components';

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0px 40px 0px 40px;

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
`;

export const Profile = styled.div`
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
