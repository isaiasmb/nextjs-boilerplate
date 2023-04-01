import * as S from './styles'

const Main = ({
  title = 'NextJS boilerplate',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with code"
    />
  </S.Wrapper>
)

export default Main
