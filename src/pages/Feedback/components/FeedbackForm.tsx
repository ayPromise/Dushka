import { useEffect, useRef, useState } from "react";
import sendEmail from "../../../utils/sendEmail"
import styles from "../FeedbackPage.module.scss"
import { Button, InputField, Loader } from "../../../components";

const initialFormData = {
    name: {
        value: "",
        error: ""
    },
    email: {
        value: "",
        error: ""
    },
    message: {
        value: "",
        error: ""
    }
}

const FeedbackForm: React.FC = () => {

    const [formData, setFormData] = useState(initialFormData)
    const formRef = useRef<HTMLFormElement | null>(null)

    const [loading, setLoading] = useState<boolean>(false)
    const [responseMessage, setResponseMessage] = useState<string | null>(null)

    useEffect(() => {
        setTimeout(() => {
            setResponseMessage(null)
        }, 3000)
    }, [responseMessage])

    const handleChangeFormData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev, [name]: {
                value,
                error: ""
            }
        }))
    }

    const validateForm = (): boolean => {
        const { name, email, message } = formData;
        let flag = true;

        if (!name.value.trim()) {
            setFormData((prev) => ({ ...prev, name: { value: "", error: "Name can't be empty" } }));
            flag = false;
        }

        if (!email.value.trim()) {
            setFormData((prev) => ({ ...prev, email: { value: "", error: "Email can't be empty" } }));
            flag = false;
        }

        const emailRegex = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email.value)) {
            setFormData((prev) => ({ ...prev, email: { value: "", error: "Invalid email format" } }));
            flag = false;
        }

        if (!message.value.trim()) {
            setFormData((prev) => ({ ...prev, message: { value: "", error: "Message can't be empty" } }));
            flag = false;
        }
        return flag;
    };

    const handleSend = async () => {
        if (validateForm() && formRef.current) {
            setLoading(true)
            const resultMessage = await sendEmail(formRef.current)
            if (resultMessage) {
                setLoading(false)
                setResponseMessage(resultMessage)
            }

        }

    }

    return (
        <form action={handleSend} className={styles.feedbackForm} ref={formRef}>
            <h2 className={styles.formTitle}>Leave your feedback or <span className={styles.formHighlighted}>take a look at my other projects</span></h2>
            <InputField
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name.value}
                onChange={handleChangeFormData}
                required
                error={formData.name.error}
            />
            <InputField
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email.value}
                onChange={handleChangeFormData}
                required
                error={formData.email.error}
            />
            <div className={styles.errorContainer}>
                {formData.message.error && <span className={styles.textareaError}>{formData.message.error}</span>}
            </div>
            <textarea
                name="message"
                placeholder="Your best regards"
                value={formData.message.value}
                onChange={handleChangeFormData}
                required
                className={styles.textareaElement}
                rows={5}
            />
            <Button onClick={handleSend}>
                {loading ? <Loader /> : (responseMessage ?? "Send")}
            </Button>
        </form>
    );
};

export default FeedbackForm
