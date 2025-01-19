import React from 'react';
import styles from "../../styles/editProfilePage.module.css"
import Link from 'next/link';

const EditProfilePage: React.FC = () => {
    return (
        <div className={styles["layout"]}>
            <h1>Edit Profile</h1>

            {/* Username Input */}
            <label htmlFor="username">Username</label>
            <input
                id="username"
                className={styles["input"]}
                type="text"
                placeholder="username"
            />

            {/* Password Input */}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                className={styles["input"]}
                type="password"
                placeholder="password"
            />

            {/* Profile Picture */}
            <img
                className={styles["profile-picture"]}
                src="/placeholder-profile.png" // Cambia esta ruta si tienes una imagen por defecto
                alt="Profile"
            />

            <button className={styles["btn-upload"]}>Upload Image</button>
            <input className={styles["upload-image"]} type='file'/>

            {/* Buttons */}
                <Link href="/home">
                    <button className={styles["btn"]}>
                        Save
                    </button>
                </Link>
                
                <Link href="/home">
                    <button className={styles["btn"]}>
                        Go Back
                    </button>
                </Link>
                
        </div>
    );
};

export default EditProfilePage;
