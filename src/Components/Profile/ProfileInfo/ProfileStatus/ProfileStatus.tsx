import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    newStatusText: string
    updateStatus:(newStatusText: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    const[editMode, setEditMode] = useState<boolean>(false)
    const[statusText, setStatusText] = useState<string>(props.newStatusText)

    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
    //     if(prevProps.newStatusText !== this.props.newStatusText){
    //         this.setState({
    //             statusText: this.props.newStatusText
    //         })
    //     }
    // }

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(statusText)
        setStatusText("")
    }
    const editStatusTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
       setStatusText(event.currentTarget.value)
    }
    return (
            <div>
                {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.newStatusText || "No status"}
                    </span>
                </div>
                :
                <div>
                    <input type="text"
                           value={statusText}
                           onBlur={deactivateEditMode}
                           onChange={editStatusTextHandler}
                           autoFocus/>
                </div>}
            </div>
        )
}

export default ProfileStatus;