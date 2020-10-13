import React, {
    useState,
    createContext
} from 'react';

type AppContextProps = {
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
        const values:AppContextProps = {};
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