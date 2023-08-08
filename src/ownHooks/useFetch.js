import { useState } from "react";

export function useFetch(par) {
    const [load, setLoad] = useState(false);
    const [error, haveError] = useState('');

    async function fetch(...args) {
        try {
            setLoad(true);
            await par(...args);
        } catch (error) {
            const numb = Array.from(error.message).filter(el => parseInt(el) == el);
            haveError(`Код ошибки: ${numb.join('')}😡`);
            console.log(error)
        } finally {
            setLoad(false);
        }
    };
    return (
        [fetch, load, error] 
    );
};