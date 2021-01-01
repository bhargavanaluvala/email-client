import React from 'react'
import styled from 'styled-components'

function EmailBody(props) {
    return (
        <EmailBodyStyle>
                <table>
                    <tbody>
                        <tr>
                            <EmailBodyColumnStyle>
                                {props.mailContent}
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
    height: 1000px;
`
const EmailBodyColumnStyle = styled.td`
    padding-top: 20px;
    padding-left: 20px;
    text-align: left;
`

export default EmailBody