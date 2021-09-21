export const TextInput = ({ handler, touched, hasError, meta }) => (
    <div className='form-group mb-1'>
    {meta.title && <label>{meta.title}</label> }
      <input
        className='form-control'
        placeholder={`Enter ${meta.label}`}
        type={meta.type ?? 'text'}
        {...handler()}
      />
      <span>
        {touched && hasError('required') && `${meta.label} is required`}
      </span>
    </div>
);
