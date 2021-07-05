import {useEffect, useState} from "react"

const useLocalStorageState = (key,defaultValue)=>{
    const [state,setState] = useState(()=>{
        let value = window.localStorage.getItem(key) || defaultValue;
        return value
    })

    useEffect(()=>{
        window.localStorage.setItem(key,state)
    })

    return [state,setState]
}

export default useLocalStorageState