
export default function RegisterInput({  
    placeholder,
    value,
    onChange,
    name,})

    {
  return (
    <input 
    type="text" 
    placeholder={placeholder}
    className="input input-bordered input-primary w-full max-w-xs flex mb-4"
    name={name}
    value={value}
    onChange={onChange}
    />
  )
}
