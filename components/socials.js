import AiFillGithub from '@meronex/icons/ai/AiFillGithub';
import AiFillTwitterCircle from '@meronex/icons/ai/AiFillTwitterCircle';
import EnLinkedinWithCircle from '@meronex/icons/en/EnLinkedinWithCircle';

export default function Socials() {
    return (
        <div>
            <div className="socials">
                    <span>
                        <AiFillGithub />
                    </span>
                    <span>
                        <EnLinkedinWithCircle />
                    </span>
                    <span>
                        <AiFillTwitterCircle />
                    </span>
            </div>
            <style jsx>{`
                .socials {
                    font-size: 1.5em;
                    color: var(--green);
                    display: flex;
                    align-items: center;
                }

                .socials span {
                    display: flex;
                    align-items: center;
                    margin: 0 5px;
                }

                @media (min-width: 769px) {
                    .socials {
                        font-size: 1.85em;
                    }
    
                    .socials span {
                        margin: 0 5px;
                    }
                }
            `}</style>
    </div>
    )
}