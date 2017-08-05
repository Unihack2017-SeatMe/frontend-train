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


const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	console.log('input len: ' + inputLength);

  return inputLength === 0 ? [] : stations.filter(station =>
    station.name.toLowerCase().slice(0, inputLength) === inputValue
	);
};

class MaterialStationSearchDropDown extends React.Component {
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
	
	renderListItems() {
		var filtered_suggestions = this.state.suggestions;
		var listElements = filtered_suggestions.map((suggestion, i) => {
			return <li key={i} className="mdl-menu__item">{suggestion.name}</li>
			}
		);
		console.log('filerted suggestions')
		console.log(filtered_suggestions)
		return listElements;
	}

	setSuggestions(value) {
		console.log('setting suggestions');
		return getSuggestions(value);
		// this.setState({suggestions: filteredSuggestions});
	}

	changeState(newState) {
			this.setState({value: newState}); 
	}

	componentDidMount() {
		var that = this;
		document.querySelector('.mdl-menu').addEventListener('click', function(event) {
			var data = event.target.firstChild.data;
			console.log(data);
			that.setState({value: data});

		});
	}

  render() {
		// console.log(this.state.suggestions);

    // Autosuggest will pass through all these props to the input.
    // const inputProps = {
    //   placeholder: 'Type a train station',
    //   value,
    //   onChange: this.onChange
    // };
		var that = this;
    return (
			<div >		
				<form action="#">
					<div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label test ${(this.state.value === "") ? "" : "is-dirty"}`} style={{height: 'auto'}}>
						<input className="mdl-textfield__input" type="text" id="trainStationDropDown" value={this.state.value}
							onChange={ (event) => { 
								var x =  getSuggestions(event.target.value);
								console.log(x);
								this.setState({
									value: event.target.value, 
									suggestions: x
								}); 
								this.forceUpdate();
								// var suggestions = getSuggestions(event.target.value);
								// document.querySelector('.mdl-menu__outline').clientHeight = 100px;

							}
						 }
						 autoComplete="off"
							style={{height: 'auto'}}
						/>
						<label className="mdl-textfield__label" htmlFor="trainStationDropDown" id="test2">Type a train station</label>
							 <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect"
									style={{display: 'flex', flexDirection: 'column'}}
								data-mdl-for="trainStationDropDown">
								{this.renderListItems()}
							</ul>	
					</div>
				
						
				</form>
					
		</div>

  
    );
  }
}

export default MaterialStationSearchDropDown;
export { MaterialStationSearchDropDown };


		// {this.state.suggestions ? this.state.suggestions.filter((suggestion) => suggestion.name.match(this.state.value)).map((suggestion, i) => {
		// 							return <li key={i} className="mdl-menu__item">{suggestion.name}</li>
		// 						}) : ''}