import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
    return ( 
        <ListGroup>
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="/" action>Home                   </ListGroupItem>
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="/add-course" action>AddCourse    </ListGroupItem>
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="/view-course" action>View Courses</ListGroupItem>
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="#!" action>About                 </ListGroupItem>
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" href="#!" action>Contact               </ListGroupItem>
        </ListGroup>
     );
}
 
export default Menus;