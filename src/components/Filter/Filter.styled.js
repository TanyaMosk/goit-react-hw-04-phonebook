import styled from 'styled-components'

export const InputFilter = styled.input`
border-radius: 5px;
padding: 4px 10px;

&:hover{
    border: 2px solid darkblue;
}

&:focus{
    border: 2px solid darkblue;
    outline: none;
    color: darkblue;
}
`;

export const TextFilter = styled.p`
font-weight: 600;
`;
