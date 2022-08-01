function FormInput(props) {
  return (
    <div className='input-container'>
      <label>{props.label}</label>
      <div className='input-wrapper'>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className={props.className}
          ref={props.refer}
          required={true}
        />
        {props.children}
      </div>
      <span className='error-msg'>{props.errorMsg}</span>
    </div>
  );
}

export default FormInput;
