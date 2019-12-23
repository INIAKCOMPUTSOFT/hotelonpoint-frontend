import React from "react";
import { Hits } from "react-instantsearch-dom";
import { connectStateResults } from "react-instantsearch/connectors";
import HotelList from "./listings";
export default connectStateResults(
  ({ searchState, searchResults }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      <Hits hitComponent={ HotelList} />
    ) : (
      <div>
        No results found for <strong>{searchState.query}</strong>.
      </div>
    )
);
