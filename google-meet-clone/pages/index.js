import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'

import styles from '@/styles/home.module.css'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className={styles.bg}>
      <div className={styles.overlay}></div>
      <div className={styles.centerCard}>
        <div className={styles.logoWrap}>
          {/* Minimalist Play Logo */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" fill="#6366f1" opacity="0.13"/>
            <circle cx="32" cy="32" r="18" fill="#6366f1"/>
            <polygon points="38,32 28,26 28,38" fill="#fff"/>
          </svg>
        </div>
        <h1 className={styles.title}>Google Meet Clone</h1>
        <p className={styles.subtitle}>Connect, collaborate, and communicate instantly.</p>
        <div className={styles.enterRoom}>
          <input
            className={styles.input}
            placeholder='Enter Room ID'
            value={roomId}
            onChange={(e) => setRoomId(e?.target?.value)}
          />
          <button className={styles.button} onClick={joinRoom}>Join</button>
        </div>
        <div className={styles.separatorWrap}>
          <span className={styles.separatorText}>OR</span>
        </div>
        <button className={styles.buttonAlt} onClick={createAndJoin}>Create a new room</button>
      </div>
    </div>
  )
}