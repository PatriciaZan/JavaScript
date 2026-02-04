// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */

const position = 2;
const replacementCard = 6;
const stackSize = 5

export function getItem(cards, position) {
  return cards[position]
}
getItem([1, 2, 4, 1], position);

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
 cards[position] = replacementCard
  return cards
}
setItem([1, 2, 4, 1], position, replacementCard);
/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard)
  return cards
}
const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  cards.pop()
  return cards
}
removeItemFromTop([3, 2, 6, 4, 8]);
/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard2) {
  cards.unshift(newCard2)
  return cards
}
const newCard2 = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift()
  return cards
}
removeItemAtBottom([8, 5, 9, 7, 1]);
/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  const cardsLength = cards.length
  if(stackSize === cardsLength) return true
  return false
}
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);