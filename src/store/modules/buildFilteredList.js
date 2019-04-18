/* eslint-disable no-console */
export const buildFilteredList = (state) => {
  let count = 0

  const results = state.hunts.filter(hunt => {
    const art = parseFloat(hunt.art_focus);
    const culture = parseFloat(hunt.culture_focus);
    const difficulty = parseFloat(hunt.difficulty_focus);
    const history = parseFloat(hunt.history_focus);
    const distance = parseFloat(hunt.distance_miles);
    const rating = parseFloat(hunt.star_rating);
    const reviews = parseFloat(hunt.total_reviews);
    const type = hunt.hunt_type;

    const minArt = parseFloat(state.minArtValue);
    const minCulture = parseFloat(state.minCultureValue);
    const minDifficulty = parseFloat(state.minDifficultyValue);
    const minHistory = parseFloat(state.minHistoryValue);
    const maxDistance = parseFloat(state.maxDistanceValue);
    const minRating = parseFloat(state.minRatingValue);
    const minReviews = parseFloat(state.minReviewsValue);
    const types = state.typeValue;

    const artCheck = (minArt === 0) ? true : minArt <= art;
    const cultureCheck = (minCulture === 0) ? true : minCulture <= culture;
    const difficultyCheck = (minDifficulty === 0) ? true : minDifficulty <= difficulty;
    const historyCheck = (minHistory === 0) ? true : minHistory <= history;
    const distanceCheck = (maxDistance === 0) ? true : maxDistance >= distance;
    const ratingCheck = (minRating === 0) ? true : minRating <= rating;
    const reviewsCheck = (minReviews === 0) ? true : minReviews <= reviews;
    const typeCheck = (types.scavaHunt === false && types.ghostHunt === false) ? true : types[`${type}`]

    const condition = (
      artCheck &&
      cultureCheck &&
      difficultyCheck &&
      historyCheck &&
      distanceCheck &&
      ratingCheck &&
      reviewsCheck &&
      typeCheck
    )

    if (condition) {
      count++
      return true;
    }

    return false;
  })
  console.log(count, 'count');
  return results.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0));

}