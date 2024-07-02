import { useField } from "formik";

const Textarea = ({ label, ...props }) => {
    const [campo, meta] = useField(props);
    return (
      <div className="item">
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea {...campo} {...props} />
        {meta.touched && meta.error ? (
            <div className="erro">{meta.error}</div>
          ) : null}
      </div>
    );
  };

  export default Textarea;