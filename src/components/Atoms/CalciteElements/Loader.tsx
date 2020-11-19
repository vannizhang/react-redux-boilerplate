import React from 'react';

type Props = {
    message?: string;
};

const Loader: React.FC<Props> = ({ message }: Props) => {
    return (
        <div className="loader is-active">
            <div className="loader-bars"></div>
            {message && <div className="loader-text">{message}</div>}
        </div>
    );
};

export default Loader;
