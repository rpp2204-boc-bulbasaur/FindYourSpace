import * as React from 'react';
import NavBar from "../components/navBar";
import OwnerHistory from "./ownerHistoryDash";
import RenterHistory from "./renterHistory";
import HistoryToggle from "../components/history/historyToggle";
// MUI default Robot font
import styles from '../styles/history.module.css';
import { ThemeProvider, createTheme } from "@mui/material";

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rentAndOwn: false,
      toggle: 'renter'
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount(): void {
    //code to query if current user is renter AND owner
  }

  handleToggle(event: React.MouseEvent<HTMLElement>,
    selection: string,): void {
    console.log('toggle clicked');
    console.log(selection);
    this.setState({toggle: selection});
  }

  render() {
    const theme = createTheme({
      palette: {
        primary: {
          main: '#00000',
        },
        secondary: {
          main: '#3949ab',
        }
      },
      typography: {
        fontFamily: ['sono','sans-serif'].join(',')
      },
    });
    let history;
    if (this.state.toggle === 'renter') {
      history = <RenterHistory />
    } else if (this.state.toggle === 'owner') {
      history = <OwnerHistory />
    }
    return (
      <ThemeProvider theme={theme}>
        <div className="history">
          <NavBar />
          <div className="history-container">
            <HistoryToggle handleToggle={this.handleToggle}/>
            {history}
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default History;