interface InputProps {
    type?: 'text' | 'password',
    disabled?: boolean
}

const Input = ({disabled, type}: InputProps) => {

    return (
        <input className={`input`} type={type} disabled={disabled}/>
    )
}

export default Input;