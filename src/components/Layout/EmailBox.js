import React from 'react'
import { useState } from 'react'
import EmailFolders from './EmailFolders'
import EmailList from './EmailList'
import EmailBody from './EmailBody'
import {emailFolderList, spamMails, inboxMails, INBOX, SPAM, DELETED_ITEMS, FLAG} from './typeUtils'
import styled from 'styled-components'


function EmailBox() {
    const localInboxData = sessionStorage.getItem('inboxData') ? JSON.parse(sessionStorage.getItem('inboxData')) : inboxMails
    const localSpamData = sessionStorage.getItem('spamData') ? JSON.parse(sessionStorage.getItem('spamData')) : spamMails
    const localDelMails = sessionStorage.getItem('deleteData') ? JSON.parse(sessionStorage.getItem('deleteData')) : []
    const flagMailData = sessionStorage.getItem('flagData') ? JSON.parse(sessionStorage.getItem('flagData')) : []
    const [mails, setMails] = useState(localInboxData)
    const [deletedMails, setDeletedMails] = useState(localDelMails ? localDelMails : [])
    const [isDeleteBox, setIsDeleteBox] = useState(false)
    const [mailContent, setMailContent] = useState([])
    const [inputActive, setInputActive] = useState(false)
    const [emailFolders, setEmailFolders] = useState(emailFolderList)
    const [newFolderValue, setNewFolderValue] = useState('')
    const [folderName, setFolderName] = useState('Inbox')
    const [flagMails, setFlagMails] = useState(flagMailData ? flagMailData : [])

    const handleDelete = (index) => {
        const deletedMail = mails.splice(index, 1)
        if(folderName === INBOX) {
            sessionStorage.setItem('inboxData', JSON.stringify(mails))
        } else if(folderName === SPAM) {
            sessionStorage.setItem('spamData', JSON.stringify(mails))
        } else if(folderName === FLAG) {
            sessionStorage.setItem('flagData', JSON.stringify(mails))
        }
        
        const newDelArr = sessionStorage.getItem('deleteData') || '[]'
        const localDelMails = [...JSON.parse(newDelArr), deletedMail[0]]
        sessionStorage.setItem('deleteData', JSON.stringify(localDelMails))
        setDeletedMails(localDelMails)
        
    }

    const onMailSelect = (val, index) => {
        const updatedMails = JSON.parse(JSON.stringify(mails))
        if(updatedMails[index].unread){
            updatedMails[index].unread = false
            setMails(updatedMails)
        }
        setMailContent(mails[index].content)
    }

    const handleFolderClick = (folderName) => {
        setMailContent([])
        setFolderName(folderName)
        setIsDeleteBox(false)
        if(folderName === INBOX) {
            setMails(localInboxData)
        } else if (folderName === SPAM) {
            setMails(localSpamData)
        } else if (folderName === DELETED_ITEMS) {
            setIsDeleteBox(true)
            setMails(deletedMails)
        } else if (folderName === FLAG) {
            setMails(flagMails)
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

    const handleFlag = (val) => {
        const flagArr = sessionStorage.getItem('flagData') || '[]'
        const localFlagMails = [...JSON.parse(flagArr), val]
        sessionStorage.setItem('flagData', JSON.stringify(localFlagMails))
        setFlagMails(localFlagMails)
    }

    return (
        <EmailBoxStyle>
            <EmailFolders 
                emailFolders = {emailFolders} 
                handleFolderClick = {handleFolderClick} 
                mails = {mails} 
                inboxMails = {localInboxData}
                spamMails = {localSpamData}
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
                handleFlag={handleFlag}
            />
            <EmailBody mailContent={mailContent} />
        </EmailBoxStyle>
    )
}
const EmailBoxStyle = styled.div`
    position: absolute;
    left: 0px;
    display: flex;
    height: 92%;
`
export default EmailBox