import AiFillGithub from '@meronex/icons/ai/AiFillGithub';
import AiFillTwitterCircle from '@meronex/icons/ai/AiFillTwitterCircle';
import EnLinkedinWithCircle from '@meronex/icons/en/EnLinkedinWithCircle';

export default function Socials() {
    return (
        <div>
            <div className="socials">
                <a href="https://github.com/marionrose13" alt="Github Profile">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/marionerose/" alt="LinkedIn Profile">
                    <EnLinkedinWithCircle />
                </a>
                <a href="https://twitter.com/DirtyCarrots13" alt="Twitter Profile">
                    <AiFillTwitterCircle />
                </a>
            </div>
            <style jsx>{`
                .socials {
                    font-size: 1.5em;
                    color: var(--green);
                    display: flex;
                    align-items: center;
                }

                .socials a {
                    display: flex;
                    align-items: center;
                    margin-right: 8px;
                }

                a {
                    transition: color .3s ease;
                }
        
                a:hover {
                    color: var(--orange);
                }


                @media (min-width: 769px) {
                    .socials {
                        font-size: 2em;
                    }
    
                    .socials a {
                        margin-right: 10px;
                    }
                }
            `}</style>
    </div>
    )
}