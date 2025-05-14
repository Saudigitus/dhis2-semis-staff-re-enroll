import { Outlet } from "react-router-dom"
import { HeaderBarLayout, SemisHeader } from "dhis2-semis-components"

const WithHeaderBarLayout = () => {

    return (
        <HeaderBarLayout
            header={
                <SemisHeader
                    headerItems={{
                        academicYears: {
                            options: [
                                {
                                    label: '2024',
                                    value: '2024'
                                },
                                {
                                    label: '2023',
                                    value: '2023'
                                },
                                {
                                    label: '2022',
                                    value: '2022'
                                }
                            ]
                        },
                        orgunits: {
                            options: []
                        }
                    }}
                />
            }
        >
            <Outlet />
        </HeaderBarLayout>
    )
}

export default WithHeaderBarLayout