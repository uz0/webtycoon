export const LOOP_FREQUENCY = 1000;
export const ARTICLE_FACTOR = 10;
export const ADVERT_FACTOR = 15;
export const ARTICLES_PER_CYCLE_BY_COPYWRITER = 0.5;
export const STARTUP_CAPITAL = 100;

export const article_price = count => count + 10;
export const advert_price = count => count * 10;
export const copywriter_price = count => (count + 10) * 10;

export const adverts_income = (articlesCount, advertCount) => articlesCount * advertCount * ADVERT_FACTOR;
