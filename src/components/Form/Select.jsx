import { useField } from "formik";

const Select = ({ label, ...props }) => {
    const [campo, meta] = useField(props);
    return (
      <div className="item">
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...campo} {...props} />
        {meta.touched && meta.error ? (
          <div className="erro">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  export default Select;