import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorage(key, initialValue))
    const setValue = (value) =>{
        //Check if function 
       const valueToStore = value instanceof Function ? value(localStorageValue) : value

       //set to value
       setLocalStorageValue(value)
       // set to local storage
       localStorage.setItem(key, JSON.stringify(valueToStore))
    }
    return [localStorageValue, setValue]
}

function getLocalStorage(key, initialValue){
    const itemFromLocalStorage = localStorage.getItem(key)
    return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue 
}

export default useLocalStorage