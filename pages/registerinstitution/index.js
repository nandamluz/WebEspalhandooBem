import { useRouter } from "next/router";

import RegisterInstitution from "../../portals/RegisterInstitution";





const registerinstitution = () => {
    const router = useRouter()


    return(

        <RegisterInstitution/>
    )
}
export default registerinstitution;