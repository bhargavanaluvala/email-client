import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core"
import { DELETED_ITEMS } from './typeUtils'

function EmailFolders(props) {
    return (
        <EmailFolderStyle>
            <table>
                <tbody>
                    {
                        props.emailFolders.map((val, ind) => (
                            <tr key={ind}>
                                <FolderColumnStyle onClick={() => props.handleFolderClick(val)}>{val} {(val === DELETED_ITEMS) ? props.deletedMails.length : ''}</FolderColumnStyle>
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
                            <td>
                                <InputStyle type='text' value={props.newFolderValue} onChange={e => props.onChange(e)} ></InputStyle>
                                <Icon icon='tick' intent="primary" onClick={props.addFolder} />
                                <Icon icon='cross' intent={'danger'} onClick={props.hideInputBox}/>
                            </td>
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
    height: 1000px;
`

const FolderColumnStyle = styled.td`
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
    &:hover {
        background-color: #BBD8F2
      }
    padding-bottom: 5px;
`
const CustomFolderColumnStyle = styled.td`
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
`

const InputStyle = styled.input`
    width: 125px;
    margin-left: 20px;
    margin: 5px 5px 0px 20px;
    height: 25px;
`

export default EmailFolders