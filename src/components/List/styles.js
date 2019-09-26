import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px; /* padding horizontal */
  /* height: 100%; */
  flex: 0 0 320px;
  /*
    flex-grow: 0;  -> habilidade do componente esticar mais que o necessario, 0 largura fixa, 1 largura do objeto, 2 dobro da largura
    flex-shrink: 0; -> mesmo do grow só que para reduzir
    flex-basis: 320px; -> tamanho base, neste caso largura porque o board tem flex-direction: row
  */
  opacity: ${props => (props.done ? 0.6 : 1)};

  & + div {
    /* estilizar toda div que antes dela tem outra div */
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px; /* padding horizontal */
    }

    button {
      height: 42px;
      width: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
