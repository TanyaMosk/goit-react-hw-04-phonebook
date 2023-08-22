import { DeleteBtn, List, WrapItem,Text } from "./ContactList.styled"

const ContactList = ({contacts, onDelete}) => {
  return (     
         <List>
          {contacts.map(({id,name,number}) => (
            <li key={id}>
            <WrapItem>
            <Text>{name}: {number}</Text>
            <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
            </WrapItem>
            </li>
          ))} 
      </List>    
    )
}

export default ContactList