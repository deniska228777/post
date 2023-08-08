import Input from "./Input";
import Select from "./Select";
import { useRef } from "react";


export default function PostFilter({filter, func}) {
    const inputRef = useRef('');

    return(
       <div>
            <Input ref={inputRef} autoComplete='off' value={filter.query} placeholder='Поиск' onInput={el => func({...filter, query: el.target.value})}/>
            <Select value={filter.sort} onChange={selsort => func({...filter, sort: selsort})} opts={[{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'}]}/>
       </div> 
    );
};