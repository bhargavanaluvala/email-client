import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core";

function EmailList(props) {
    return (
        <EmailListStyle>
            <div>
                <table>
                    <tbody>
                        {props.mails.map((val, ind) => (
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
                        ))}
                    </tbody>
                </table>
            </div>
        </EmailListStyle>
    )
}

const EmailListStyle = styled.div`
    padding: 10px;
    width: 500px;
    border-left: 1px solid #CCC;
    height: 700px;
    display: inline-block;
`

const EmailListColumnStyle = styled.td`
    width: 500px;
    padding-top: 10px;
    padding-bottom: 30px;
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
    font-size: 20px;
    color: #225ED1;
    border-bottom: 1px solid #CCC;
`

const EmailListColumnContentStyle = styled.div`
    font-size: 10px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    width: 400px;
    color: #000;
`

export default EmailList