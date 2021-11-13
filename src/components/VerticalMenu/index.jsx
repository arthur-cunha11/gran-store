import React from 'react'
import logo from '../../img/LogoGranCursos.svg'
import { AppsMenu, UiElementsMenu, FormsMenu, DashboardMenu } from "../"

export const VerticalMenu = () => {
    return (
        <>
            <img src={logo} alt="" />
            <div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                <DashboardMenu />
                <AppsMenu />
                <UiElementsMenu />
                <FormsMenu />
            </div>
        </>
    )
}
