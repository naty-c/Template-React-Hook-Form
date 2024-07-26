import { useContext, useState, createContext } from 'react';

export const CounterContext = createContext({
    counter: 0,
    increment: () => {},
    decrement: () => {}
});

export function CounterProvider( {children} ) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prevState => prevState +1)
    }

    function decrement() {
        setCounter(prevState => prevState -1)
    }

    return <CounterContext.Provider value={{ counter, increment, decrement }}>{children}</CounterContext.Provider>
}

export function useCounter() {
    const context = useContext(CounterContext);
    
    return context;
}