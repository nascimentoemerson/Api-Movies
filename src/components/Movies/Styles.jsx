import styled from "styled-components";

export const MovieStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 15rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  a {
    transition: all 0.5s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
