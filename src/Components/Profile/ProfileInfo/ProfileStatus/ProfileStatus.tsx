import React, {ChangeEvent, Component} from 'react';

type ProfileStatusPropsType = {
    newStatusText: string
    updateStatus:(newStatusText: string) => void
}

class ProfileStatus extends Component<ProfileStatusPropsType> {
    state = {
        editeMode: false,
        statusText: this.props.newStatusText
    }
    activateEditMode = () => {
        this.setState({editeMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editeMode: false})
        this.props.updateStatus(this.state.statusText)
        this.setState({statusText: ""})
    }
    editStatusTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
       this.setState({statusText:event.currentTarget.value})
    }
    render() {
        return (
            <div>
                {!this.state.editeMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.newStatusText || "No status"}</span>
                </div>
                :
                <div>
                    <input type="text" value={this.state.statusText} onBlur={this.deactivateEditMode} onChange={this.editStatusTextHandler} autoFocus/>
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;