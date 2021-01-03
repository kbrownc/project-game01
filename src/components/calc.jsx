// this must be run before you locate the spot on the board

calcSpotOnBoard() {
		spotOnBoard = spotOnBoard + rollNum;

		if (switch1 = 0 && spotOnBoard > 8) {
			spotOnBoard = spotOnBoard + 6;
			switch1 = 1;
		}
		else if (switch1 = 0 && spotOnBoard = 8) {
			switch1 = 2;
		}
		if (switch2 = 0 && spotOnBoard > 24) {
			spotOnBoard = spotOnBoard + 6;
			switch2 = 1;
		}
		else if (switch2 = 0 && spotOnBoard = 24) {
			switch2 = 2;
		}
		if (switch3 = 0 && spotOnBoard > 44) {
			spotOnBoard = spotOnBoard + 6;
			switch3 = 1;
		}
		else if (switch3 = 0 && spotOnBoard = 44) {
			switch3 = 2;
		}
	}	