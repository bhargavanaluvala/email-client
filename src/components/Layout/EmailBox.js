import React from 'react'
import { useState } from 'react'
import EmailFolders from './EmailFolders'
import EmailList from './EmailList'
import EmailBody from './EmailBody'
import {emailFolderList, spamMails, inboxMails, INBOX, SPAM, DELETED_ITEMS} from './typeUtils'


function EmailBox() {
    const [mails, setMails] = useState(inboxMails)
    const [deletedMails, setDeletedMails] = useState([])
    const [isDeleteBox, setIsDeleteBox] = useState(false)
    const [mailContent, setMailContent] = useState(inboxMails.length ? inboxMails[0].content : [])
    const [inputActive, setInputActive] = useState(false)
    const [emailFolders, setEmailFolders] = useState(emailFolderList)
    const [newFolderValue, setNewFolderValue] = useState('')

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
        if(folderName === INBOX) {
            setIsDeleteBox(false)
            setMails(inboxMails)
            setMailContent(inboxMails.length ? inboxMails[0].content : [])
        } else if (folderName === SPAM) {
            setIsDeleteBox(false)
            setMails(spamMails)
            setMailContent(spamMails.length ? spamMails[0].content : [])
        } else if (folderName === DELETED_ITEMS) {
            setIsDeleteBox(true)
            setMails(deletedMails)
        }
    }

    const showInputBox = () => {
        setInputActive(true)
    }
    const addFolder = () => {
        setNewFolderValue('')
        setInputActive(false)
        setEmailFolders([...emailFolders, newFolderValue])
    }

    const hideInputBox = () => {
        setInputActive(false)
        setNewFolderValue('')
    }

    const onChange = (e) => {
        setNewFolderValue(e.target.value)
    }

    return (
        <div>
            <EmailFolders 
                emailFolders = {emailFolders} 
                handleFolderClick = {handleFolderClick} 
                mails = {mails} 
                showDeletedMails = {showDeletedMails} 
                deletedMails = {deletedMails}
                inputActive = {inputActive}
                addFolder = {addFolder}
                showInputBox = {showInputBox}
                hideInputBox = {hideInputBox}
                onChange={onChange}
                newFolderValue={newFolderValue}
            />
            <EmailList inboxMails={inboxMails} spamMails={spamMails} mails={mails} deletedMails={deletedMails} handleDelete={handleDelete} isDeleteBox={isDeleteBox} onMailSelect={onMailSelect}/>
            <EmailBody mailContent={mailContent}/>
        </div>
    )
}

export default EmailBox