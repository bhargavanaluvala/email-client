import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core";

function EmailList(props) {
    return (
        <EmailListStyle>
                <table>
                    <tbody>
                        {props.mails.length ? props.mails.map((val, ind) => (
                            <tr key={ind} >
                                <EmailListColumnStyle onClick={() => props.onMailSelect(ind)}>
                                    <div>{val.subject}</div>
                                    <EmailListColumnContentStyle>{val.content}</EmailListColumnContentStyle>
                                </EmailListColumnStyle>
                                {
                                    (val.mId && !props.isDeleteBox) &&
                                    <td>
                                <Icon icon="trash" onClick={() => props.handleDelete(ind)}/>
                                                </td>

                                }
                            </tr>
                        )) : <FontStyle>No Emails</FontStyle>}
                    </tbody>
                </table>
        </EmailListStyle>
    )
}

const EmailListStyle = styled.div`
    padding: 10px;
    border-left: 1px solid #CCC;
    width: 500px;
    height: 1000px;
`

const EmailListColumnStyle = styled.td`
    text-align: left;
    cursor: pointer;
    font-size: 20px;
    color: #225ED1;
    border-bottom: 1px solid #CCC;
    padding: 10px 20px 20px 20px;
`

const EmailListColumnContentStyle = styled.div`
    font-size: 12px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
    width: 400px;
`

const FontStyle = styled.div`
    font-size: 14px;
    position: absolute;
    top: 45%;
    left: 30%;

`

export default EmailList