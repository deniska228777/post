import '../Select.css';

function Select({opts, value, onChange}) {
    return(
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option disabled>Сортировать по</option>
            {opts.map(opt => 
                <option key={opt.value} value={opt.value}>{opt.name}</option>
            )}
        </select>    
    );
};

export default Select;