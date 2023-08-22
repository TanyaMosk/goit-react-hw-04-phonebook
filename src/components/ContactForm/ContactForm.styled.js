import styled from 'styled-components'
import { Form, Field,ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
background-color: white; 
  margin: auto;
  padding: 20px;  
  border-radius: 10px;
   box-shadow:
       inset 0 -3em 3em rgba(0,0,128,0.3),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
display: flex;
flex-direction: column;
gap: 10px;
`;

export const StyledLabel = styled.label`
position: relative;
display:grid;
gap:10px;
`;

export const StyledField = styled(Field)`
border-radius: 5px;
padding: 5px 10px;
width: 250px;

&:hover{
    border: 2px solid darkblue;
}

&:focus{
    border: 2px solid darkblue;
    outline: none;
    color: darkblue;
}
`;

export const Button = styled.button`
margin-right: auto;
border-radius: 5px;
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

export const StyledError = styled(ErrorMessage)`
color: red;
position: absolute;
top: 50%;
right: 5%;
`;