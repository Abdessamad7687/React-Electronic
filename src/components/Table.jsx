import React from 'react'

const Table = () => {
  return (
    <table class="table table-hover w-75 mx-auto mt-5">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Storage</th>
            <th scope="col">Color</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1 </td>
            <td class="text-success">$</td>
            <td>1</td>
            <td>1</td>
            <td>
                <a class="btn btn-primary">
                    Signle View
                </a>
            </td>
        </tr>

    </tbody>
    </table>
  )
}

export default Table