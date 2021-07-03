import React from 'react';
import './ModalMyAccountFile.scss';

const ModalMyAccountFile = ({ upAvatar, avatar }) => {

    const handleFile = (e) => {
       const file = e.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       upAvatar(formData);
    }

    return (
        <label className="load-img-file">
            <img src={avatar ? avatar : '../../../public/assets/images/1-36-1024x1024.jpg'}/>
            <input type="file" name="filedata" onChange={handleFile} hidden />
        </label>
    )
}

export default ModalMyAccountFile;

