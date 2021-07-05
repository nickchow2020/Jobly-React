import {useEffect} from "react"
import {useHistory} from "react-router-dom"
const Logout = ()=>{
    const history = useHistory()

    useEffect(()=>{
        window.localStorage.clear()
        console.log("YES","from logout")
        history.push('/')
        window.location.reload();
    },[history])

    return(
        <>
        </>
    )
}

export default Logout