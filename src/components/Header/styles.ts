import styled from 'styled-components';

export const HeaderContent = styled.div`
  max-width: 80rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 2.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const Logo = styled.div`
  > strong {
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5rem;

    letter-spacing: 0.694286px;

    margin-left: 1rem;

    color: #212353;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
    line-height: 1rem;

    letter-spacing: 0;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 17.25rem;
  height: 3.75rem;

  background: #ffffff;
  box-shadow: 0px 0.313rem 0.313rem rgba(75, 93, 104, 0.1);
  border-radius: 3.125rem;

  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 160%;

  letter-spacing: 0.005em;

  color: #212353;

  &:link,
  &:visited {
    text-decoration: none;
  }

  svg {
    width: 1.875rem;
    height: 1.5rem;
    color: #b0c6a1;
  }

  @media (max-width: 768px) {
    width: fit-content;

    padding: 0 1rem;

    strong {
      display: none;
    }
  }
`;
