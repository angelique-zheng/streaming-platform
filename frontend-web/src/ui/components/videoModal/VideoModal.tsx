import { strings } from '../../../res/strings';
import './style.css';

type VideoModalProps = {
    closeModal: () => void;
    url: string;
    type: string;
};

export const VideoModal: React.FC<VideoModalProps> = ({ closeModal, url, type }) => {
    return (
        <div className="video-modal">
            <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                    {strings.fr.components.videoModal.close}
                </button>
                <div className="video-container">
                    <video controls autoPlay>
                        <source src={url} type={type} />
                        {strings.fr.components.videoModal.videoPlaybackNotSupported}
                    </video>
                </div>
            </div>
        </div>
    );
};
