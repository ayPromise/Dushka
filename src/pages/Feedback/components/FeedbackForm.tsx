import { useRef, useState } from "react";
import sendEmail from "../../../utils/sendEmail"
import styles from "../FeedbackPage.module.scss"
import { Button, InputField, Loader } from "../../../components";

const FeedbackForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const formRef = useRef<HTMLFormElement | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const handleChangeFormData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const validateForm = (): boolean => {
        const { name, email, message } = formData;

        if (!name.trim()) {
            setErrorMessage("Name can't be empty");
            return false;
        }

        if (!email.trim()) {
            setErrorMessage("Email can't be empty");
            return false;
        }

        const emailRegex = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email format");
            return false;
        }

        if (!message.trim()) {
            setErrorMessage("Please leave at least some compliments");
            return false;
        }

        setErrorMessage("");
        return true;
    };

    const handleSend = async () => {
        if (validateForm() && formRef.current) {
            setLoading(true)
            const resultMessage = await sendEmail(formRef.current)
            if (resultMessage)
                setLoading(false)

        }

    }

    return (
        <form action={handleSend} className={styles.feedbackForm} ref={formRef}>
            <h2 className={styles.formTitle}>Leave your feedback or <span className={styles.formHighlighted}>take a look at my other projects</span></h2>
            {errorMessage}
            <InputField
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChangeFormData}
                required
            />
            <InputField
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChangeFormData}
                required
            />
            <textarea
                name="message"
                placeholder="Your best regards"
                value={formData.message}
                onChange={handleChangeFormData}
                required
                className={styles.textareaElement}
                rows={5}
            />
            <Button onClick={handleSend}>
                {loading ? <Loader /> : "Send"}
            </Button>
        </form>
    );
};

export default FeedbackForm
