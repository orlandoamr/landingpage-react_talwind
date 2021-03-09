import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';

function NewTodo({ onChange, value, onAddNew}){
  return (
    <section className="TodoAddNew flex justify-center">
      <section className="flex justify-between p-3 border mt-3 bg-indigo-600 rounded m-auto sm:w-1/2">
        <FormField
          type="text"
          id="txtNTodo"
          fname="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nuevo Todo"
          className="flex p-2 m-2 w-auto bg-white rounded"
          labelClassName="flex w-auto"
          containerClassName="flex"
          onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
        />
        <MdAdd size={"3rem"} onClick={onAddNew} color="white"></MdAdd>
      </section>
    </section>
  );
}

export default NewTodo;
