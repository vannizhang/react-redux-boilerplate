import React from 'react';

type Props = {
    // num of columns (1-24)
    column: number;
    // num of columns for tablet view
    tabletColumn?: number;
    // num of columns for phone view
    phoneColumn?: number;
    centerColumn?: boolean;
    children?: React.ReactNode;
};

const CalciteGrid: React.FC<Props> = ({
    column,
    tabletColumn,
    phoneColumn,
    centerColumn,
    children,
}: Props) => {
    const getColumnClassNames = () => {
        const classNames: string[] = [
            `column-${column}`,
            tabletColumn ? `tablet-column-${tabletColumn}` : '',
            phoneColumn ? `phone-column-${phoneColumn}` : '',
            centerColumn ? 'center-column' : '',
        ].filter((val) => val);

        return classNames.join(' ');
    };

    return (
        <div className="grid-container">
            <div className={getColumnClassNames()}>{children}</div>
        </div>
    );
};

export default CalciteGrid;
