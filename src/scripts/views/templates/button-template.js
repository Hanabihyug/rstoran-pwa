const WarunkcreateLikeButtonTemplate = () => `
    <button aria-label="like this warunk" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const WarunkcreateLikedButtonTemplate = () => `
    <button aria-label="unlike this warunk" id="likedButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export { WarunkcreateLikeButtonTemplate, WarunkcreateLikedButtonTemplate };
