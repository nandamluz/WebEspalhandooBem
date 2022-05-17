import { useRouter } from "next/router";

import EditInstitution from "../../portals/EditInstitution";





const editinstitution = () => {
    const router = useRouter()


    return(

        <EditInstitution/>
    )
}
export default editinstitution;