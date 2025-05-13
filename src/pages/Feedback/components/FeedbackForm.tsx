import { useRef, useState } from "react";
import InputField from "../../../components/InputField";
import styles from "../FeedbackPage.module.scss"

interface FeedbackFormProps {
    onSend: (name: string, email: string, message: string) => void
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSend }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    const handleSend = () => {
        if (name && email && message) {
            onSend(name, email, message);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className={styles.feedbackForm}>
            <h2 className={styles.formTitle}>Leave your feedback or <span className={styles.formHighlighted}>take a look at my other projects</span></h2>
            <InputField
                label="Name"
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                ref={nameRef}
            />
            <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                ref={emailRef}
            />
            <InputField
                label="Message"
                id="message"
                type="text"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                ref={messageRef}
            />
            <button className={styles.sendButton} onClick={handleSend}>
                Send
            </button>
        </div>
    );
};

export default FeedbackForm