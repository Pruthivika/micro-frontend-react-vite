import React from 'react'


const DashboardPage = () => {
    return (
        <>
            <h1>InsightHub</h1>
            {/* <LineChart /> */}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <TestComponent />
        </>
    )
}

export default DashboardPage;