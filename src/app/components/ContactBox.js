import React, { useState } from 'react';
import Icon, { Loader } from './Icons'
import img from "../assets/old-games.jpg"
import { Input, TextArea, Check, Select, HoneyPot } from './FormCtrls';

export default function ContactBox(props) {
    const initState = {
        subscribe: false,
        subject: '',
        confirmEmail: "i@robot.me",
        confirmEmailCheck: false,
    }

    const subject = [
        "Bug-Fix Request",
        "Consulting Request",
        "Contract Offer",
        "Full-time Offer",
        "Teaching Offer",
        "Pay Me Back!",
        "Other"
    ];

    const [success, setSuccess] = useState(false);
    const [loading, setloading] = useState(false);
    const [formValues, setFormValues] = useState(initState);

    const onSubmit = (e) => {
        e.preventDefault();
        setloading(true);

        setTimeout(() => {
            setSuccess(true);
            setloading(false);
            setFormValues(initState);
        }, 2000);
    }

    const handlePrstine = () => {
        success && setSuccess(false);
    }

    const handleOnChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.id === "check-ctrl" ? e.target.checked : e.target.value
        });
    };

    return (
        <div id="contactBox" className={"menu contactBox " + props.className} onClick={handlePrstine}>
            <div className="form-background" onClick={props.toggleContact}></div>
            <div className="form-container">
                <div className="form-header">
                    <Icon className="contactBox-close" icon={'logOut'} action={props.toggleContact} />
                    <figure>
                        <img src={img} alt="contact-header" />
                    </figure>
                    <h2>Send me a Text!</h2>
                    <h3 className={`${success ? "active": ''}`} >
                        Thanks for reaching out! </h3>
                </div>
                <div className={`form-body${loading ? " active": ''}`}>
                    {props.isOpen &&
                        <form className='form-controller' onSubmit={onSubmit}>
                            <div className="">
                                <Input className="customField" name="name" type="text" label="Name:" required
                                    onChange={handleOnChange} state={formValues} placeholder="Name"
                                />
                                <Input className="customField" name="email" type="email" label="Email:" required
                                    onChange={handleOnChange} state={formValues} placeholder="Email"
                                />
                                <HoneyPot name="confirmEmail" state={formValues}
                                    onChange={handleOnChange}
                                />
                                <Select className="customSelect" name="subject" onChange={handleOnChange} state={formValues} required
                                    label="Message:" placeholder="Subject" options={subject}
                                />
                            </div>
                            <TextArea className="customTextarea" name="message" type="textarea" label="Message:" required
                                onChange={handleOnChange} state={formValues} placeholder="Write your message"
                            />

                            <div className="footer">
                                <Check className="customCheck" name="subscribe" value="subscribe" state={formValues} required
                                    label="You're Human Right?" onChange={handleOnChange} checkmark
                                />
                                <Icon className="contactBox-submit" label="Send" type="submit" icon="planeSolid" gradient />
                            </div>
                        </form>
                    }
                    { loading &&
                        <Loader className="sendMessage" gradient/>
                    }
                </div>
            </div>
        </div>
    )
}
