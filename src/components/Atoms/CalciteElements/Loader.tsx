import React from 'react'

const Loader:React.FC<{
    message?: string;
}> = ({
    message
}) => {
    return (
        <div className="loader is-active">
            <div className="loader-bars"></div>
            {
                message && <div className="loader-text">{message}</div>
            }
        </div>
    )
}

export default Loader;
