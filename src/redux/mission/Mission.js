import axios from 'axios';

// Actions
const DISPLAY_MISSION = 'bookstore/mission/DISPLAY_MISSION';
const LOADING_MISSION = 'bookstore/missions/LOADING_MISSION';
const NOT_LOADING_MISSION = 'bookstore/mission/NOT_LOADINGMISSION';
const MISSION_STATUS = 'bookstore/mission/MISSION_STATUS';

const url = 'https://api.spacexdata.com/v3/missions';

// defining initial state
