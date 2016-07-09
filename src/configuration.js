//frequency in milliseconds for loop function
export const LOOP_FREQUENCY = 1000;
export const ARTICLE_FACTOR = 10;
export const ADVERT_FACTOR = 15;

export const article_price = count => count + 10;
export const advert_price = count => count * 10;
export const copywriter_price = count => (count + 10) * 10;

export const adverts_income = (articlesCount, advertCount) => articlesCount * advertCount * ADVERT_FACTOR;
