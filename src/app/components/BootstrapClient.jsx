"use client"

import { useEffect } from "react";

const BootstrapClient = () => {
    useEffect(() => {
        require("../styles/css/bootstrap.css");
        require('../styles/css/style.css')
        require('../styles/css/admin.css')

        require('../styles/js/bootstrap.min.js')
        require('../styles/js/popper.min.js')
    }, []);
}
export default BootstrapClient