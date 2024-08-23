import { useSelector } from "react-redux"

const useQuickTraduction = ({textEs, textEn}) => {
    const language = useSelector((state) => state)

    return language === "es" ? textEs : textEn
    
}

export default useQuickTraduction