import React from 'react'
import { useState } from 'react'
import EmailFolders from './EmailFolders'
import EmailList from './EmailList'
import EmailBody from './EmailBody'
import {emailFolderList, spamMails, inboxMails, INBOX, SPAM, DELETED_ITEMS} from './typeUtils'
import styled from 'styled-components'


function EmailBox() {
    const [mails, setMails] = useState(inboxMails)
    const [deletedMails, setDeletedMails] = useState([])
    const [isDeleteBox, setIsDeleteBox] = useState(false)
    const [mailContent, setMailContent] = useState([])
    const [inputActive, setInputActive] = useState(false)
    const [emailFolders, setEmailFolders] = useState(emailFolderList)
    const [newFolderValue, setNewFolderValue] = useState('')
    const [folderName, setFolderName] = useState('Inbox')

    const handleDelete = (index) => {
        const deletedMail = mails.splice(index, 1)
        setDeletedMails([...deletedMails, deletedMail[0]])
    }

    const showDeletedMails = () => {
        setIsDeleteBox(true)
        setMails(deletedMails)
    }

    const onMailSelect = (index) => {
        setMailContent(mails[index].content)
    }

    const handleFolderClick = (folderName) => {
        setMailContent([])
        setFolderName(folderName)
        setIsDeleteBox(false)
        if(folderName === INBOX) {
            setMails(inboxMails)
        } else if (folderName === SPAM) {
            setMails(spamMails)
        } else if (folderName === DELETED_ITEMS) {
            setIsDeleteBox(true)
            setMails(deletedMails)
        } else {
            setMails([])
        }
    }

    const showInputBox = () => {
        setInputActive(true)
    }
    const addFolder = () => {
        if(newFolderValue){
            setNewFolderValue('')
            setInputActive(false)
            setEmailFolders([...emailFolders, newFolderValue])
        }
    }

    const hideInputBox = () => {
        setInputActive(false)
        setNewFolderValue('')
    }

    const onChange = (e) => {
        setNewFolderValue(e.target.value)
    }

    return (
        <EmailBoxStyle>
            <EmailFolders 
                emailFolders = {emailFolders} 
                handleFolderClick = {handleFolderClick} 
                mails = {mails} 
                inboxMails = {inboxMails}
                spamMails = {spamMails}
                showDeletedMails = {showDeletedMails} 
                deletedMails = {deletedMails}
                inputActive = {inputActive}
                addFolder = {addFolder}
                showInputBox = {showInputBox}
                hideInputBox = {hideInputBox}
                onChange={onChange}
                newFolderValue={newFolderValue}
            />
            <EmailList 
                mails={mails} 
                deletedMails={deletedMails} 
                handleDelete={handleDelete} 
                isDeleteBox={isDeleteBox} 
                onMailSelect={onMailSelect}
                folderName={folderName}
            />
            <EmailBody mailContent={mailContent} />
        </EmailBoxStyle>
    )
}
const EmailBoxStyle = styled.div`
    position: absolute;
    left: 0px;
    display: flex;
`
export default EmailBox