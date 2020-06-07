import React ,{ Component } from 'react';
import { Card , Container , Row , Col } from 'react-bootstrap'

class Book extends Component{
	render(){
		return(
			<React.Fragment>
				<Container >
					<Row>
						{
							this.props.items.map((items,index) =>{
								let {title, imageLinks, infoLink} = items.volumeInfo;
								return (
									<Col  md={6} lg={4} xl={3}>
										<a 
										key={index}
										href={infoLink}
										target="_blank"
										>
											<Card id="book-card">
												<Card.Img 
												id="book-img"
												variant="top" 
												src={imageLinks !== undefined ? imageLinks.thumbnail : ''} 
												/>
												<Card.Title  id="book-title">{title}</Card.Title>
											</Card>							
										</a>
								</Col>
								)
							})
						}
					</Row>
				</Container>
			</React.Fragment>	
			)
		}
}

export default Book;