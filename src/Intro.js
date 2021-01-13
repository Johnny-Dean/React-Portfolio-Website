import Typewriter from 'typewriter-effect';
import ContactInfo from "./contactInfo";
const Introduction = () => {
return (
<div className="intro-wrap">
    <div className="intro">
        <div className="intro-text">
            <h1 className="greeting">Hey there!</h1>
            <p style={{paddingLeft: 6, paddingRight: 5}}> I'm </p>
            <Typewriter
                options={{
                    strings: ['Johnny Dean.', 'a Student.' ,'a Computer Scientist.', 'a Software Engineer.', 'an Artist.' ,'a Jiujiteiro.', 'a Weight Lifter.'],
                    autoStart: true,
                    loop: true,
                    pauseFor: 1500,
                    deleteSpeed: 150
                }}
            />
        </div>
        <div className="contact-info-text">
            <ContactInfo/>
        </div>
    </div>
</div>
);
}
export default Introduction;