import { Container } from "./styles";

interface Span {
    text: any;
}
export function SpanType({text}: Span){

    return(
        <Container type={text}>
            {text}
        </Container>
    )
}