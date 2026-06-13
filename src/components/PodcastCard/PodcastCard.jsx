import "../WebinarsCard/card.css";
import {
    getYoutubeThumbnail,
    handleYoutubeThumbnailError,
} from "../WebinarsCard/youtubeThumbnail.js";
import "./podcast-card.css";

export const PodcastCard = ({ podcast, className = "" }) => {
    if (!podcast) {
        return null;
    }

    const cardClassName = ["webinar-card", "podcast-card", className]
        .filter(Boolean)
        .join(" ");

    return (
        <a
            className={cardClassName}
            href={podcast.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="webinar-card-media">
                <img
                    src={getYoutubeThumbnail(podcast.capa)}
                    alt=""
                    loading="lazy"
                    onError={(event) =>
                        handleYoutubeThumbnailError(event, podcast.capa)
                    }
                />
            </div>

            <div className="webinar-card-body">
                <h3>{podcast.titulo}</h3>
                <span className="podcast-card-date">{podcast.data}</span>
                <span className="webinar-card-link">Assistir no YouTube</span>
            </div>
        </a>
    );
};
