
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import lk from './image/lk.jpg'
import { RiArrowDropDownLine } from 'react-icons/ri';

import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import nasa from './image/nasa GAME.png'
import table1 from './image/table1.svg'
import table2 from './image/table2.svg'
import table3 from './image/table3.svg'
import table5 from './image/table5.svg'
import table6 from './image/table6.svg'
import table8 from './image/table8.svg'
import img from './image/img.png'


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  Btn: {
    marginLeft: 65
  },
  icon: {
    backgroundColor: "#1E1E3D"
  },
  Toolbar: {
    display: "flex",
    alignItems: 'center'
  },

}));

function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <div className='body'>
        <div className='App'>
          <AppBar>
            <Toolbar className='head' >
              <img className="profile-image" src={lk} />
              <IconButton color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <div className='Roadmap'>
                <Button color="inherit" width="34%" marginRight="50%" > Roadmap</Button>
              </div>
              <div className='faq'>
                <Button color="inherit" className='faq'   > FAQ</Button>
              </div>

              <Button color="inherit" className={classes.Btn}     > For members</Button>

              < RiArrowDropDownLine />

              <div className='icon1'>
                <FaDiscord />
              </div>
              <div className='icon2'>
                <FaTwitter />
              </div>
            </Toolbar>
          </AppBar>

          <img className='img-nasa' src={nasa} />
          <img className='img-table1' src={table1} />
          <img className='img-table2' src={table2} />
          <div className='ractangle'>
            <div className='ractangle-name'> Staked agents (0)</div>
            <div className='ractangle-name-1'>No aliens staked</div>
            <div className='ractangle-button'>
              <div  className='ractangle-text'>Unstake</div>
            </div>
          </div>
          <img className='img-table3' src={table3} />
          <img className='img-table5' src={table5} />
          <img className='img-table6' src={table6} />
          <img className='img' src={img} />
          <img className='img-table8' src={table8} />
          <div>

          </div>
          
        </div>
      </div>
    </div>

  );
}

export default App;
