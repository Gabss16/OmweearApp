const DropDown = ({ id, label, options, onChange, value }) => {
    return (
        <>
            <div >
                 <label
                    htmlFor={id}
                >
                    {label}
                </label>
                <select
                    id={id}
                    name={id}
                    onChange={onChange} // 👈 AQUÍ va el onChange
                    value={value}
                >
                    <option value="" disabled hidden>Selecciona alguna opción</option>
                    {options.map((opt) => (
                        <option
                            key={opt._id}
                            value={opt._id}
                            style={{
                                color: "#8d8c8c",
                                fontWeight: "400",
                                fontSize: "1rem",
                            }}
                        >
                            {opt.label}
                        </option>
                    ))}
                </select>
 
               
            </div>
        </>
    )
}
export default DropDown