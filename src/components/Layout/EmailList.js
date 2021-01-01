import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core";

function EmailList(props) {
    return (
        <EmailListStyle>
                <table>
                    <tbody>
                        <FolderNameStyle>{props.folderName}</FolderNameStyle>
                        {props.mails.length ? props.mails.map((val, ind) => (
                            val.unread ? 
                            <tr key={ind} >
                                <EmailListColumnStyle onClick={() => props.onMailSelect(ind)}>
                                    {val.subject}
                                    <EmailListColumnContentStyle>{val.content}</EmailListColumnContentStyle>
                                </EmailListColumnStyle>
                                {
                                    (val.mId && !props.isDeleteBox) &&
                                    <td>
                                        <Icon icon="trash" onClick={() => props.handleDelete(ind)}/>
                                    </td>

                                }
                            </tr> : 
                            <tr key={ind} >
                            <EmailListReadColumnStyle onClick={() => props.onMailSelect(ind)}>
                                {val.subject}
                                <EmailListColumnContentStyle>{val.content}</EmailListColumnContentStyle>
                            </EmailListReadColumnStyle>
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
    height: 800px;
`

const EmailListColumnStyle = styled.td`
    text-align: left;
    cursor: pointer;
    font-size: 20px;
    color: #225ED1;
    border-bottom: 1px solid #CCC;
    padding: 10px 20px 0px 20px;
`
const EmailListReadColumnStyle = styled.td`
    text-align: left;
    cursor: pointer;
    font-size: 20px;
    color: #5F6A6A;
    border-bottom: 1px solid #CCC;
    padding: 10px 20px 0px 20px;
`

const EmailListColumnContentStyle = styled.p`
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
const FolderNameStyle = styled.div`
    font-size: 12px;
    text-align: left;
    color: #616A6B;

`

export default EmailList