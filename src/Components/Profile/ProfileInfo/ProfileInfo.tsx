import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="data:image/jpeg;base64,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"/>
            </div>
            <div className={classes.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;