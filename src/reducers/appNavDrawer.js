import{SET_DRAWER_OPEN,
	TOGGLE_DRAWER_OPEN,
	TOGGLE_DRAWER_DOCK,
	SET_RESPONSIVE} from '../actions/appNavDrawer';


const initialState = {
  disableSwipeToOpen: false,
  docked: true,
  responsive: true,
  open: false,
  openSecondary: false,
  zDepth: 2,
  swipeAreaWidth: 30,
}

const appNavDrawer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER_OPEN:
		return {
			...state,
			open: !state.open
		  };
	case TOGGLE_DRAWER_DOCK:
		return {
			...state,
			docked: !state.docked
		  };
		  
	case SET_DRAWER_OPEN:
		return {
			...state,
			open: action.open
		  };
		  
		  
	case SET_RESPONSIVE:
		return {
			...state,
			responsive: action.responsive
		  };
		  
    default:
      return state;
  }
}

export default appNavDrawer;