import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    newStatusText: string
    updateStatus?: (newStatusText: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [statusText, setStatusText] = useState<string>(props.newStatusText)

    useEffect(() => {
        setStatusText(props.newStatusText)
    }, [props.newStatusText])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus && props.updateStatus(statusText)
        setStatusText("")
    }
    const editStatusTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStatusText(event.currentTarget.value)
    }
    return (
        <div><b>Status: </b>
            {!editMode
                ?
                <span onDoubleClick={activateEditMode}>
                        {props.newStatusText || "No status"}
                </span>
                :
                <span>
                    <input type="text"
                           value={statusText}
                           onBlur={deactivateEditMode}
                           onChange={editStatusTextHandler}
                           autoFocus/>
                </span>}
        </div>
    )
}

export default ProfileStatus;