import { InputFilter,TextFilter } from "./Filter.styled";


const Filter = ({ filter, onChange }) => {
  return (
    <>      
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"
        value={filter} 
        onChange={evt => onChange(evt.target.value)} 
      />
    </>
  );
};

export default Filter