import { useCounter } from '../../../contexts/counter'

export function HomePage() {
    const { counter, increment, decrement } = useCounter();

    return (
        <div>
            <h1>Dashboard home page</h1>
            
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>

            <span className="badge text-bg-secondary">{counter}</span>
            
            <button className="btn btn-success" onClick={increment}>Increment</button>
        </div>
    )
}