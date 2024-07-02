
import { Container } from "./styles";

// eslint-disable-next-line no-unused-vars, react/prop-types
export function ButtonText({ title, isactive = false, ...rest }) {
    return(
        <Container
        type="button"
        $isactive={isactive}
        {...rest}
        >
            {title}
        </Container>
    );
}