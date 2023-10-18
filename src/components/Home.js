import React, { useEffect } from "react";
 
import { Jumbotron,Container,Button } from 'reactstrap';


const Home = () => {
    
     useEffect (()=>{
        document.title = "Home"
     },[])

    return (
        <div>
             <Jumbotron className="text-center">
                <h1>Manjunath</h1>
                <p>
                    This is Developed by Manjunath
                </p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
             </Jumbotron>
        </div>
      );
}
 
export default Home;