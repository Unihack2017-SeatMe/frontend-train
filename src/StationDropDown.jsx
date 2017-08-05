import './StationDropDown.css';

import { MDCSelect } from '@material/select';
import React from 'react';
import { observer } from 'mobx-react';

const trainStationNames = [
  "Abbotsford", "Alphington", "Altona", "Armadale", "Ascot Vale", "Ashburton", "Aspendale", "Balaclava", "Baxter", "Bayswater", "Beaconsfield", "Belgrave", "Bentleigh", "Berwick", "Bittern", "Blackburn", "Bonbeach", "Boronia", "Box Hill", "Brighton", "Broadmeadows", "Brunswick", "Burnley", "Camberwell", "Canterbury", "Carnegie", "Carrum", "Caulfield East", "Chelsea", "Cheltenham", "Clayton", "Clayton South", "Clifton Hill", "Coburg", "Coburg North", "Coolaroo", "Craigieburn", "Cranbourne", "Cranbourne North", "Crib Point", "Croydon", "Dandenong", "Diamond Creek", "Diggers Rest", "Eaglemont", "East Melbourne", "Edithvale", "Elsternwick", "Eltham", "Epping", "Essendon", "Fairfield", "Fawkner", "Ferntree Gully", "Fitzroy North", "Flemington", "Footscray", "Frankston", "Glen Huntly", "Glen Iris", "Glen Waverley", "Glenroy", "Greensborough", "Hallam", "Hampton", "Hastings", "Hawthorn", "Hawthorn East", "Heathmont", "Heidelberg", "Highett", "Hoppers Crossing", "Hughesdale", "Hurstbridge", "Ivanhoe", "Kensington", "Kooyong", "Lalor", "Laverton", "Lilydale", "Lynbrook", "Macleod", "Malvern", "Malvern East", "Mckinnon", "Melbourne City", "Mentone", "Mitcham", "Mont Albert", "Montmorency", "Moonee Ponds", "Moorabbin", "Mooroolbark", "Mordialloc", "Mount Waverley", "Murrumbeena", "Narre Warren", "Newport", "Noble Park", "North Melbourne", "Northcote", "Nunawading", "Oak Park", "Oakleigh", "Officer", "Ormond", "Pakenham", "Parkdale", "Parkville", "Pascoe Vale", "Prahran", "Preston", "Reservoir", "Richmond", "Ringwood", "Ringwood East", "Ripponlea", "Rosanna", "Roxburgh Park", "Sandringham", "Seaford", "Seaholme", "Seddon", "Somerville", "South Morang", "South Yarra", "Spotswood", "Springvale", "St Albans", "Strathmore", "Sunbury", "Sunshine", "Sunshine North", "Surrey Hills", "Sydenham", "Tecoma", "Thomastown", "Thornbury", "Toorak", "Tyabb", "Upper Ferntree Gully", "Upwey", "Watsonia", "Wattle Glen", "Werribee", "West Footscray", "West Melbourne", "Williams Landing", "Williamstown", "Windsor", "Yarraville"
];

var keyId = -1;
const listTrainStations = trainStationNames.map((station) => {
  keyId ++;
  return (
    <li key={keyId} className="mdc-list-item" role="option" id={station} tabIndex="0">
      {station} station
    </li>
  )
});

@observer
class StationDropDown extends React.Component {
  componentDidMount() {
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    select.listen('MDCSelect:change', () => {
      // alert(`Selected "${select.value}" at index ${select.selectedIndex} ` +
      //       `with value "${select.value}"`);
      console.log(`Selected "${select.value}"`)
    });

  };
  
  render() {
    return (
      <div className="select-drop-down-container">
        <div className="mdc-select" role="listbox" tabIndex="0">
          <span className="mdc-select__selected-text">Train station</span>
          <div className="mdc-simple-menu mdc-select__menu">
            <ul className="mdc-list mdc-simple-menu__items">
              <li class="mdc-list-item" role="option" id="grains" aria-disabled="true">
                Pick a train station
              </li>
              {listTrainStations}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};


export default StationDropDown;
export { StationDropDown };

// <div className="drop-down-container" >
//         <div className="mdc-select" role="listbox" tabIndex="0">
//           <span className="mdc-select__selected-text">Pick a food group</span>
//             <div className="mdc-simple-menu mdc-select__menu">
//               <ul className="mdc-list mdc-simple-menu__items">
//                 <li className="mdc-list-item" role="option" id="grains" aria-disabled="true">
//                   Pick a food group
//                 </li>
//                 <li className="mdc-list-item" role="option" id="grains" tabIndex="0">
//                 Bread, Cereal, Rice, and Pasta
//                 </li>
//               </ul>
//           </div>
//         </div>
//       </div>