import { useRouter } from "next/router";

import LoginInstitution from "../../portals/LoginInstitution";





const loginInstituition = () => {
    const router = useRouter()


    return(

        <LoginInstitution/>
    )
}
export default loginInstituition;