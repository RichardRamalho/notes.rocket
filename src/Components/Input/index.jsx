import PropTypes from 'prop-types';
import { Container }  from "./styles";

export function Input({ icon: Icon, ...rest }) {
    return(
        <Container>
            { Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}

Input.propTypes = {
    icon: PropTypes.elementType, // Define que `icon` deve ser um componente React
    rest: PropTypes.object // Valida todas as outras props passadas para o input
};