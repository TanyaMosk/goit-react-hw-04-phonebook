import styled from 'styled-components'

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
padding-left: 20px;
`;

export const WrapItem = styled.div`
display: flex;
justify-content: space-between;
`;

export const Text = styled.p`
margin: 0;
padding: 5px;
`;

export const DeleteBtn = styled.button`
border-radius: 10px;
padding: 4px  8px;

&:hover{
    background-color: darkblue;
    color: white;
}
&:focus{
    background-color: darkblue;
    color: white;
}
`; 