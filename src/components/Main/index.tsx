import * as S from './styles'

const Main: React.FC = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Component
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para tela com codigo"
    />
  </S.Wrapper>
)

export default Main
