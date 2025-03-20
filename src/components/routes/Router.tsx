import React from 'react';
import { EnrollmentsPage } from '../../pages';
import { Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import { HeaderBarLayout, SemisHeader } from 'dhis2-semis-components';

export default function Router() {
    return (
        <HashRouter>
<Routes>
            <Route path='/'
                element={
                    <HeaderBarLayout
                        header={<SemisHeader
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
                                        },
                                        {
                                            label: '2021',
                                            value: '2021'
                                        }
                                    ]
                                },
                                orgunits: {
                                    options: []
                                }
                            }} />}>
                        <Outlet />
                    </HeaderBarLayout>}
            >
                <Route key={'enrollments'} path={'/'} element={<EnrollmentsPage />} />
            </Route>
        </Routes>
        </HashRouter>
    );
}
