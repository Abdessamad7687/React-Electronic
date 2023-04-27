import React from 'react'

const Languages = () => {
    return (
        <div className="col-md-3">
            <select className="form-control changeLang">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">Arabic</option>
                <option value="es">Spain</option>
            </select>
        </div>
    )
}

export default Languages