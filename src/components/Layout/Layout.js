import React from 'react'
import EmailHeader from './EmailHeader'
import EmailBox from './EmailBox'
import styled from 'styled-components'

function Layout() {
    return (
        <div>
            <EmailHeaderStyle>
                <EmailHeader />
            </EmailHeaderStyle>
            <EmailBoxStyle>
                <EmailBox />
            </EmailBoxStyle>
        </div>
    )
}

const EmailHeaderStyle = styled.div`
    margin: auto;
    padding: 10px;
    border: 1px solid;
    background-color: #000;
    color: #FFF;
`

const EmailBoxStyle = styled.div`
    position: absolute;
    left: 0;
`

export default Layout