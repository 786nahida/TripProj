import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


class Navbar extends Component {
  state={clicked:false};
  handleclick=()=>{
    this.setState({clicked:!this.state.clicked});
  };
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 classNaame="navbar-logo">trip</h1>
        <div className="menu-icons" onclick={this.handleclick}>
          <i className={this.state.clicked? "fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ?"nav-menu.active":"nav-menu"}>
          {MenuItems.map((item,index)=>{
            return(

            
          <li key={index}>
            <Link className={item.cName} to ={item.url}>
             <i className={item.icon}></i>{item.title}
             </Link>
          </li>
          );
        })}
        <li>
          
        </li>
        
        </ul>
      </nav>
    );
  }
}

export default Navbar;