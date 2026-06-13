import "./card.css";
import {
    getYoutubeThumbnail,
    handleYoutubeThumbnailError,
} from "./youtubeThumbnail";

export const WebinarCard = ({ webinar, className = "" }) => {
    if (!webinar) {
        return null;
    }

    const cardClassName = ["webinar-card", className].filter(Boolean).join(" ");

    return (
        <a
            className={cardClassName}
            href={webinar.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="webinar-card-media">
                <img
                    src={getYoutubeThumbnail(webinar.capa)}
                    alt=""
                    loading="lazy"
                    onError={(event) =>
                        handleYoutubeThumbnailError(event, webinar.capa)
                    }
                />
                <span className="webinar-tag">{webinar.tag}</span>
            </div>

            <div className="webinar-card-body">
                <span className="webinar-card-meta">Webinar {webinar.id}</span>
                <h3>{webinar.titulo}</h3>
                <span className="webinar-card-link">
                    Assistir no YouTube
                </span>
            </div>
        </a>
    );
};
