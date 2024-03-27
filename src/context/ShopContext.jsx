import PropTypes from 'prop-types';
import { createContext } from "react";
// import fetchData from '../components/assets/api'


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const ContextValue = { // fetchData
    };

    return(
        <ShopContext.Provider value={ContextValue}>
            { props.children }
        </ShopContext.Provider>
    )
}

ShopContextProvider.propTypes = {
    children: PropTypes.node
}

export default ShopContextProvider;