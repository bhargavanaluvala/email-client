import React from 'react'
import styled from 'styled-components'

function EmailFolders(props) {
    return (
        <FolderStyle>
            <table>
                <tbody>
                    <tr>
                        <FolderColumnStyle onClick={props.handleInboxClick}>Inbox</FolderColumnStyle>
                    </tr>
                    <tr>
                        <FolderColumnStyle onClick={props.handleSpamClick}>Spam</FolderColumnStyle>
                    </tr>
                    <tr>
                        <FolderColumnStyle onClick={props.showDeletedMails}>Deleted Items ({props.deletedMails.length})</FolderColumnStyle>
                    </tr>
                    <tr>
                        <FolderColumnStyle onClick={props.handleListClick}>Custom Folder</FolderColumnStyle>
                    </tr>
                </tbody>
            </table>
        </FolderStyle>
    )
}

const FolderStyle = styled.div`
    padding: 10px;
    width: 200px;
    height: 700px;
    display: inline-block;
    background-color: #F1F1F1;
`

const FolderColumnStyle = styled.td`
    width: 200px;
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
    &:hover {
        background-color: #BBD8F2
      }
`

export default EmailFolders