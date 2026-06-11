export const getYoutubeThumbnail = (videoId, quality = "maxresdefault") =>
    `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;

export const handleYoutubeThumbnailError = (event, videoId) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") {
        return;
    }

    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = getYoutubeThumbnail(videoId, "hqdefault");
};
