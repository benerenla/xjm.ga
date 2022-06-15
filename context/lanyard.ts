import { AppContext } from "pages/_app"
import { useContext } from "react"

export const AppContextGet = () =>{
    const context = useContext(AppContext)

    return context
}