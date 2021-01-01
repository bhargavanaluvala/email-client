import React from 'react'
import styled from 'styled-components'

function EmailHeader() {
    return (
        <EmailHeaderStyle>
            Email Client
        </EmailHeaderStyle>
    )
}
const EmailHeaderStyle = styled.div`
    margin: 0 auto;
    padding: 10px;
    border: 1px solid;
    background-color: #000;
    color: #FFF;
    font-size: 20px;
`

export default EmailHeader