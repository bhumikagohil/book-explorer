import React , { Component } from 'react';
import {  Navbar , Nav , Form , FormControl ,Button , Container , Col , Row , FormGroup , InputGroup } from 'react-bootstrap';

import Book from './book-cards'

import './style.css';

class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
         items : [],
         displayBook: false
		}
	}
	search(){
        	this.setState({displayBook: true});
			const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
			fetch(`${BASE_URL}${this.state.query}`,{ method :`GET` })
			.then(response => response.json())
			.then(json => {
				let { items } = json;
				this.setState({items})
			});
	}
   render(){
   	return(
		<React.Fragment>
			<div className="Global">
					<Navbar  bg="white" variant="light">
						<Navbar.Brand className="font-weight-bolder mr-auto" href="#home">BOOK EXPLORER</Navbar.Brand>
                  <Nav>

                  </Nav>
						<Form inline>
							<InputGroup>
							<FormControl 
							  type="text" 
							  placeholder="Search" 
							  className=" mr-sm-2"  
							  onChange={event => this.setState({query : event.target.value })}
							  onKeyPress={ event =>{
								 if(event.key === 'Enter'){
									   this.search();
								 }
							  }}
							  />
							  <InputGroup.Append>
								<Button variant="outline-secondary" onClick={() => {this.search()}}><i class="fa fa-search"></i></Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
					</Navbar>
			</div>
			<div>
             {this.state.displayBook ?
               <Book items={this.state.items}/> :
            
                  <Container className="text-lg-left" >
                              <Row>
                                 <Col>
                                 <div id="welcome">
                                    <h2>
                                    WELCOME TO <h1>BOOK EXPLORER</h1>
                                    </h2>
                                    <FormGroup>
                                          <InputGroup 
                                          className="mr-sm-2 rounded"
                                          >
                                             <FormControl
                                             type="text" 
                                             placeholder="Search book here!"
                                             onChange={event => this.setState({query : event.target.value })}
                                             onKeyPress={ event =>{
                                                if(event.key === 'Enter'){
                                                      this.search();
                                                }
                                             }}
                                             />
                                          </InputGroup>
                                    </FormGroup> 
                                       <Button size={"md"} onClick={() => {this.search()}} >Search a BOOK</Button>
                                          </div>   
                                 </Col>
                                 <Col>
                                    <div className="panel__image panel__image--book right">
                                          <a href="#" class="books__book__image">
                                             <div class="books__book__img">
                                                <img src="https://d33wubrfki0l68.cloudfront.net/91ed41706514200a7ef212ebfeead7471354e622/01dcc/images/books/design-systems--large-opt.png"/>
                                             </div>
                                          </a>
                                    </div>
                                 </Col>
                              </Row>     
                        </Container>
                     }
                    
	  		</div>
	   </React.Fragment>
     )
   } 	
}
export default Main;