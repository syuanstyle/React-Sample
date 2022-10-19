import React from 'react'

export const Header = () => {

    const headerStyle = {

        height: '60px',
        width: '100%',
        backgroundColor: "blue",
        color: 'white',
        textAlign: 'left'
    }

    return(
        <div style={headerStyle}>
            <h1 style={{padding: '10px', marginLeft: '20px' }}>Share Service</h1>
        </div>
    )
}
