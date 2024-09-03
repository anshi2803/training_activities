import products from '../assets/products.json';
import Table from 'react-bootstrap/Table';

function Productlist() {
    return (  
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>(
                            <tr key= {product.id}>
                                <td >{product.id}</td>
                                <td >{product.name}</td>
                                <td>{product.price}</td>
                                <td >{product.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Productlist;