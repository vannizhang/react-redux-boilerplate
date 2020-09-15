import React, {
    useState,
    createContext
} from 'react';

import {
    miscFns
} from 'helper-toolkit-ts';

type AppContextProps = {
    isMobile: boolean;
}

type AppContextProviderProps = {
    // children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>(null);

const AppContextProvider:React.FC<AppContextProviderProps> = ({ 
    children
})=>{

    const [ contextProps, setContextProps ] = useState<AppContextProps>();

    const init = async()=>{

        const values:AppContextProps = {
            isMobile: miscFns.isMobileDevice()
        };

        setContextProps(values);
    }

    React.useEffect(()=>{
        init();
    }, []);

    return (
        <AppContext.Provider value={contextProps}>
            { contextProps ? children : null }
        </AppContext.Provider>
    );
};

export default AppContextProvider;