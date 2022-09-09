import React, {ChangeEvent, Component} from 'react';

type ProfileStatusPropsType = {
    newStatusText: string
    editStatusText:(newStatusText: string) => void
}

class ProfileStatus extends Component<ProfileStatusPropsType> {
    state = {
        editeMode: false
    }
    activateEditMode(){
        this.setState({editeMode: true})
    }
    deactivateEditMode(){
        this.setState({editeMode: false})
    }
    editStatusTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.editStatusText(event.currentTarget.value)
    }
    render() {
        return (
            <div>
                {!this.state.editeMode
                ?
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.newStatusText}</span>
                </div>
                :
                <div>
                    <input type="text" value={this.props.newStatusText} onBlur={this.deactivateEditMode.bind(this)} onChange={this.editStatusTextHandler} autoFocus/>
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;