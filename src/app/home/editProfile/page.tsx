"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfilePage: React.FC = () => {

    const [nickname, setNickname] = useState<string>("");
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/user/", {headers: {token: localStorage.getItem("token")}})
            .then(res => {
                setNickname(res.data.nickname);
                setImage(res.data.image)
            })
            .catch(err => alert(err.message))
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const body = {
            nickname: nickname,
            image: image
        }

        axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/user/edit", body, {headers: {token: localStorage.getItem("token")}})
            .then(res => {
                localStorage.setItem("token", res.data.token)
                alert("User edited succesfully!");
            })
            .catch(err => alert(err.message))
    };

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(event.target.value)
    };

    return (
        <main>
            <h1>Edit Profile</h1>

            <form>
                <label>Username:
                    <input
                        type="text"
                        placeholder="nickname"
                        onChange={handleNicknameChange}
                        value={nickname}
                        required
                    />
                </label>            

                <img src={image} alt="Profile Picture"/>

                <input type='image'/>

                <button type="submit" onClick={handleSubmit}>
                    Save
                </button>
            </form>  
        </main>
    );
};

export default EditProfilePage;
