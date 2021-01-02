import React from 'react'
import styled from 'styled-components'

function EmailBody(props) {
    return (
        <EmailBodyStyle>
                <table>
                    <tbody>
                        <tr>
                            <EmailBodyColumnStyle>
                                {props.mailContent.length ? props.mailContent : <FontStyle>No Email Selected</FontStyle>}
                            </EmailBodyColumnStyle>
                        </tr>
                        
                    </tbody>
                </table>
        </EmailBodyStyle>
    )
}

const EmailBodyStyle = styled.div`
    padding: 10px;
    border-left: 1px solid #CCC;
    width: 900px;
`
const EmailBodyColumnStyle = styled.td`
    padding-top: 20px;
    padding-left: 20px;
    text-align: left;
`
const FontStyle = styled.p`
    font-size: 14px;
    position: absolute;
    top: 45%;
    left: 70%;

`

export default EmailBody