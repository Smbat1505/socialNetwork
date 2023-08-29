import React from 'react';
import styles from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <main className={''}>
            <section>
                <img
                    src="https://www.chinadiscovery.com/assets/images/xinjiang/altay/guide/kanas-feixiang-mfw.jpg"
                    alt="altay"
                    className={styles.frontPhoto}
                />
            </section>
            <section className={styles.ava}>
                {/* Add your avatar content */}
                ava
            </section>
        </main>

    );
};
