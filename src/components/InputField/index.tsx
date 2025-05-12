import React from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, id, type = 'text', placeholder, value, onChange, required = false, ...props }, ref) => {
        return (
            <div className={styles.inputField}>
                {label && <label htmlFor={id} className={styles.label}>
                    {label}
                </label>}
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    className={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                />
            </div>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;