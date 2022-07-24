function FormInput(props) {
  return (
    <div className='input-container'>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        ref={props.refer}
      />
      <span className='error-msg'>{props.errorMsg}</span>
      {props.children}
    </div>
  );
}

export default FormInput;
