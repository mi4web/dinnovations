/* created by imamudin on 31/12/18 */
import * as M from "../constants/mutationTypes";
import * as R from 'ramda';

export function setAutoSuggestResults(payload) {
    return {
        type: M.SET_AUTOSUGGEST_RESULT,
        payload
    };
}
