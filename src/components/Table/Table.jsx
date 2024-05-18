import Table from 'react-bootstrap/Table';

function TopProductTable() {
    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Sales</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Apple</td>
                    <td>68%</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Groceries</td>
                    <td>51%</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Dabang Foods</td>
                    <td>40%</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TopProductTable;