import './StationDropDown.css';

import Autosuggest from 'react-autosuggest';
import React from 'react';

// Search bar with auto completion componenet.

// Imagine you have a list of languages that you'd like to autosuggest.
const stations = [
	{"name": "Aircraft"},
	{"name": "Alamein"},
	{"name": "Albion"},
	{"name": "Alphington"},
	{"name": "Altona"},
	{"name": "Anstey"},
	{"name": "Armadale"},
	{"name": "Ascot Vale"},
	{"name": "Ashburton"},
	{"name": "Aspendale"},
	{"name": "Auburn"},
	{"name": "Balaclava"},
	{"name": "Batman"},
	{"name": "Baxter"},
	{"name": "Bayswater"},
	{"name": "Beaconsfield"},
	{"name": "Belgrave"},
	{"name": "Bell"},
	{"name": "Bentleigh"},
	{"name": "Berwick"},
	{"name": "Bittern"},
	{"name": "Blackburn"},
	{"name": "Bonbeach"},
	{"name": "Boronia"},
	{"name": "Box Hill"},
	{"name": "Brighton Beach"},
	{"name": "Broadmeadows"},
	{"name": "Brunswick"},
	{"name": "Burnley"},
	{"name": "Burwood"},
	{"name": "Camberwell"},
	{"name": "Canterbury"},
	{"name": "Cardinia Road"},
	{"name": "Carnegie"},
	{"name": "Carrum"},
	{"name": "Caulfield"},
	{"name": "Chatham"},
	{"name": "Chelsea"},
	{"name": "Cheltenham"},
	{"name": "Clayton"},
	{"name": "Clifton Hill"},
	{"name": "Coburg"},
	{"name": "Collingwood"},
	{"name": "Coolaroo"},
	{"name": "Craigieburn"},
	{"name": "Cranbourne"},
	{"name": "Crib Point"},
	{"name": "Croxton"},
	{"name": "Croydon"},
	{"name": "Dandenong"},
	{"name": "Darebin"},
	{"name": "Darling"},
	{"name": "Dennis"},
	{"name": "Diamond Creek"},
	{"name": "Diggers Rest"},
	{"name": "Eaglemont"},
	{"name": "East Camberwell"},
	{"name": "East Malvern"},
	{"name": "East Richmond"},
	{"name": "Edithvale"},
	{"name": "Elsternwick"},
	{"name": "Eltham"},
	{"name": "Epping"},
	{"name": "Essendon"},
	{"name": "Fairfield"},
	{"name": "Fawkner"},
	{"name": "Ferntree Gully"},
	{"name": "Flagstaff"},
	{"name": "Flemington Bridge"},
	{"name": "Flemington Racecourse"},
	{"name": "Flinders Street"},
	{"name": "Footscray"},
	{"name": "Frankston"},
	{"name": "Gardenvale"},
	{"name": "Gardiner"},
	{"name": "Ginifer"},
	{"name": "Glen Iris"},
	{"name": "Glen Waverley"},
	{"name": "Glenbervie"},
	{"name": "Glenferrie"},
	{"name": "Glenhuntly"},
	{"name": "Glenroy"},
	{"name": "Gowrie"},
	{"name": "Greensborough"},
	{"name": "Hallam"},
	{"name": "Hampton"},
	{"name": "Hartwell"},
	{"name": "Hastings"},
	{"name": "Hawksburn"},
	{"name": "Hawthorn"},
	{"name": "Heatherdale"},
	{"name": "Heathmont"},
	{"name": "Heidelberg"},
	{"name": "Heyington"},
	{"name": "Highett"},
	{"name": "Holmesglen"},
	{"name": "Hoppers Crossing"},
	{"name": "Hughesdale"},
	{"name": "Huntingdale"},
	{"name": "Hurstbridge"},
	{"name": "Ivanhoe"},
	{"name": "Jacana"},
	{"name": "Jewell"},
	{"name": "Jolimont"},
	{"name": "Jordanville"},
	{"name": "Kananook"},
	{"name": "Keilor Plains"},
	{"name": "Kensington"},
	{"name": "Keon Park"},
	{"name": "Kooyong"},
	{"name": "Laburnum"},
	{"name": "Lalor"},
	{"name": "Laverton"},
	{"name": "Leawarra"},
	{"name": "Lilydale"},
	{"name": "Lynbrook"},
	{"name": "Macaulay"},
	{"name": "Macleod"},
	{"name": "Malvern"},
	{"name": "McKinnon"},
	{"name": "Melbourne Central"},
	{"name": "Mentone"},
	{"name": "Merinda Park"},
	{"name": "Merlynston"},
	{"name": "Merri"},
	{"name": "Middle Brighton"},
	{"name": "Middle Footscray"},
	{"name": "Mitcham"},
	{"name": "Mont Albert"},
	{"name": "Montmorency"},
	{"name": "Moonee Ponds"},
	{"name": "Moorabbin"},
	{"name": "Mooroolbark"},
	{"name": "Mordialloc"},
	{"name": "Moreland"},
	{"name": "Morradoo"},
	{"name": "Mount Waverley"},
	{"name": "Murrumbeena"},
	{"name": "Narre Warren"},
	{"name": "Newmarket"},
	{"name": "Newport"},
	{"name": "Noble Park"},
	{"name": "North Brighton"},
	{"name": "North Melbourne"},
	{"name": "North Richmond"},
	{"name": "North Williamstown"},
	{"name": "Northcote"},
	{"name": "Nunawading"},
	{"name": "Oak Park"},
	{"name": "Oakleigh"},
	{"name": "Officer"},
	{"name": "Ormond"},
	{"name": "Pakenham"},
	{"name": "Parkdale"},
	{"name": "Parliament"},
	{"name": "Pascoe Vale"},
	{"name": "Patterson"},
	{"name": "Prahran"},
	{"name": "Preston"},
	{"name": "Regent"},
	{"name": "Reservoir"},
	{"name": "Richmond"},
	{"name": "Ringwood"},
	{"name": "Ringwood East"},
	{"name": "Ripponlea"},
	{"name": "Riversdale"},
	{"name": "Rosanna"},
	{"name": "Roxburgh Park"},
	{"name": "Royal Park"},
	{"name": "Rushall"},
	{"name": "Ruthven"},
	{"name": "Sandown Park"},
	{"name": "Sandringham"},
	{"name": "Seaford"},
	{"name": "Seaholme"},
	{"name": "Seddon"},
	{"name": "Showgrounds"},
	{"name": "Somerville"},
	{"name": "South Kensington"},
	{"name": "South Morang"},
	{"name": "South Yarra"},
	{"name": "Southern Cross"},
	{"name": "Spotswood"},
	{"name": "Springvale"},
	{"name": "St Albans"},
	{"name": "Stony Point"},
	{"name": "Strathmore"},
	{"name": "Sunbury"},
	{"name": "Sunshine"},
	{"name": "Surrey Hills"},
	{"name": "Syndal"},
	{"name": "Tecoma"},
	{"name": "Thomastown"},
	{"name": "Thornbury"},
	{"name": "Toorak"},
	{"name": "Tooronga"},
	{"name": "Tottenham"},
	{"name": "Tyabb"},
	{"name": "Upfield"},
	{"name": "Upper Ferntree Gully"},
	{"name": "Upwey"},
	{"name": "Victoria Park"},
	{"name": "Watergardens"},
	{"name": "Watsonia"},
	{"name": "Wattle Glen"},
	{"name": "Werribee"},
	{"name": "West Footscray"},
	{"name": "West Richmond"},
	{"name": "Westall"},
	{"name": "Westgarth"},
	{"name": "Westona"},
	{"name": "Williams Landing"},
	{"name": "Williamstown"},
	{"name": "Williamstown Beach"},
	{"name": "Willison"},
	{"name": "Windsor"},
	{"name": "Yarraman"},
	{"name": "Yarraville"}
]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : stations.filter(station =>
    station.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class StationDropDown extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    console.log('selected: ' + newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a train station',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
				style={{width: '100%'}}
      />
    );
  }
}

export default StationDropDown;
export { StationDropDown };
