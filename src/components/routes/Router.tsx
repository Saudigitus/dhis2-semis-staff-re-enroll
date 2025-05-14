import React from 'react';
import { Reenrollment } from '../../pages';
import { Routes, Route } from 'react-router-dom';
import WithHeaderBarLayout from '../../layout/WithHeaderBarLayout';

export default function Router() {
    return (
        <Routes>
            <Route path='/'
                element={<WithHeaderBarLayout />}
            >
                <Route key={'re-enroll'} path={'/'} element={<Reenrollment />} />
            </Route>
        </Routes>
    );
}
