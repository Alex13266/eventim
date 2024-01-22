import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label className='form-input-label' shrink={otherProps.value.length}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
