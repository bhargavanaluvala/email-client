import React from 'react'
import { useState } from 'react'
import EmailFolders from './EmailFolders'
import EmailList from './EmailList'
import EmailBody from './EmailBody'

function EmailBox() {
    const inboxMails = [
        {
            "mId": "guid-1",
            "unread": true,
            "subject" : "Training Program",
            "content" : "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
        },
        {
            "mId": "guid-2",
            "unread": false,
            "subject" : "Empower your future",
            "content" : "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
        }
    ]
    const spamMails = [
        {
            "mId": "guid-3",
            "unread": true,
            "subject" : "Pre Approved Loan",
            "content" : "Congratulations ! <u>Credit card<u> is being shipped to you today!"
        },
        {
            "mId": "guid-4",
            "unread": true,
            "subject" : "You won a lottery!",
            "content" : "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
        }
    ]
    const [mails, setMails] = useState(inboxMails)
    const [deletedMails, setDeletedMails] = useState([])
    const [isDeleteBox, setIsDeleteBox] = useState(false)
    const [mailContent, setMailContent] = useState(inboxMails[0].content)

    const handleInboxClick = () => {
        console.log('Inbox clicked')
        setIsDeleteBox(false)
        setMails(inboxMails)
        setMailContent(inboxMails[0].content)
    }

    const handleSpamClick = () => {
        console.log('Spam clicked')
        setIsDeleteBox(false)
        setMails(spamMails)
        setMailContent(spamMails[0].content)
    }

    const handleDelete = (index) => {
        const deletedMail = mails.splice(index, 1)
        setDeletedMails([...deletedMails, deletedMail[0]])
    }

    const showDeletedMails = () => {
        setIsDeleteBox(true)
        setMails(deletedMails)
    }

    const onMailSelect = (index) => {
        console.log(index, mails)
        setMailContent(mails[index].content)
    }




    return (
        <div>
            <EmailFolders handleInboxClick={handleInboxClick} handleSpamClick={handleSpamClick} mails={mails} showDeletedMails={showDeletedMails} deletedMails={deletedMails}/>
            <EmailList inboxMails={inboxMails} spamMails={spamMails} mails={mails} deletedMails={deletedMails} handleDelete={handleDelete} isDeleteBox={isDeleteBox} onMailSelect={onMailSelect}/>
            <EmailBody mailContent={mailContent}/>
        </div>
    )
}

export default EmailBox