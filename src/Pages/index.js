import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import IndexLayout from '../Layouts/IndexLayout';
import MainLayout from '../Layouts/MainLayout';
import Header from './Header/Header';

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,
        children: [
            {
                index: true,
                element: <IndexLayout />,
            },
        ],
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/header",
                element: <Header />,
            },
        ],
    }
]);
