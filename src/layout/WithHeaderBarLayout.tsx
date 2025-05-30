import { Outlet } from "react-router-dom"
import { HeaderBarLayout, SemisHeader } from "dhis2-semis-components"
import { useConfig } from "@dhis2/app-runtime"
import useGetSelectedKeys from "../hooks/config/useGetSelectedKeys"

const WithHeaderBarLayout = () => {
    const { baseUrl } = useConfig();
    const { dataStoreData, program } = useGetSelectedKeys();
    return (
        <HeaderBarLayout
            header={
                <SemisHeader
                    baseUrl={baseUrl}
                    dataStoreValues={dataStoreData}
                    program={program}
                />
            }
        >
            <Outlet />
        </HeaderBarLayout>
    )
}

export default WithHeaderBarLayout