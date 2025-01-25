const FormInput = ({ label, value, onChange, error }) => {
    return (
      <div style={{ marginBottom: '20px' }}>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          style={{ display: 'block', width: '100%', padding: '8px', marginTop: '8px' }}
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </div>
    );
  };
  
  export default FormInput;
  