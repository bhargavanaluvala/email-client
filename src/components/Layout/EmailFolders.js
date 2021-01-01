import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core"
import { DELETED_ITEMS } from './typeUtils'

function EmailFolders(props) {
    return (
        <FolderStyle>
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
                                <Icon icon='tick' onClick={props.addFolder} />
                                <Icon icon='cross' onClick={props.hideInputBox}/>
                            </td>
                        </tr>
                    }
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
const CustomFolderColumnStyle = styled.td`
    width: 200px;
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
`

const InputStyle = styled.input`
    width: 100px;
`

export default EmailFolders