function FormField({ type, id, fname, onChange, caption, value, error, ...attr}){
    return (
      <section className="border rounded">
      <label className="sr-only">{caption}</label>
      <input
          className="w-full appearance-none rounded-none p-3 border-gray-300"
          type={type}
          id={id}
          name={fname}
          onChange={onChange}
          value={value}
          {...attr}
      />
        {(error && true) ? (<section className="">{error}</section>):null }
      </section>
    )
  }
  
  export default FormField;