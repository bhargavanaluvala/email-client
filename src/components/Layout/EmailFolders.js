import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core"
import { DELETED_ITEMS, INBOX, SPAM } from './typeUtils'

function EmailFolders(props) {
    const unreadInboxMails = []
    const unreadSpamMails = []
    props.inboxMails.filter((val) => {
        if(val.unread){
            unreadInboxMails.push(val)
        }
    })
    props.spamMails.filter((val) => {
        if(val.unread){
            unreadSpamMails.push(val)
        }
    })
    return (
        <EmailFolderStyle>
            <table>
                <tbody>
                    {
                        props.emailFolders.map((val, ind) => (
                            <tr key={ind}>
                                <FolderColumnStyle onClick={() => props.handleFolderClick(val)}>
                                    {val}
                                </FolderColumnStyle>
                                <td>
                                    {
                                    (val === DELETED_ITEMS) ? 
                                        props.deletedMails.length : (val === INBOX) ? 
                                            unreadInboxMails.length : (val === SPAM) ? 
                                                unreadSpamMails.length : ''
                                    }
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <CustomFolderColumnStyle onClick={props.showInputBox}>
                            Custom Folder <Icon icon='add' />
                        </CustomFolderColumnStyle>
                    </tr>
                    {
                        props.inputActive &&
                        <tr>
                            <CustomFolderColumnStyle>
                                <InputStyle type='text' placeholder='Enter a folder name' value={props.newFolderValue} onChange={e => props.onChange(e)} ></InputStyle>
                                <IconColumnStyle>
                                <Icon icon='tick' intent="primary" onClick={props.addFolder} />
                            </IconColumnStyle>
                            <IconColumnStyle>
                                <Icon icon='cross' intent={'danger'} onClick={props.hideInputBox}/>
                            </IconColumnStyle>
                            </CustomFolderColumnStyle>
                        </tr>
                    }
                </tbody>
            </table>
        </EmailFolderStyle>
    )
}

const EmailFolderStyle = styled.div`
    padding: 10px;
    background-color: #F1F1F1;
    width: 300px;
    height: 800px;
`

const FolderColumnStyle = styled.td`
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
    &:hover {
        background-color: #BBD8F2
    }
    padding-bottom: 5px;
    width: 250px;
`
const CustomFolderColumnStyle = styled.td`
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
    width: 100px;
`

const InputStyle = styled.input`
    margin: 5px 5px 0px 0px;
    height: 25px;
    font-size: 11px;
`
const IconColumnStyle = styled.span`
    cursor: pointer;
    margin: 5px;
`

export default EmailFolders