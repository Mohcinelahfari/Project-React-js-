import React from 'react';

function ProductTable({ product }) {
  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{product.description.slice(0, 100)}...</td> {/* Added ellipsis for truncation */}
      <td>{product.category}</td>
      <td>
        <span className="badge bg-primary">{product.rating.rate}</span> ({product.rating.count} reviews)
      </td>
      <td>
        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      </td>
    </tr>
  );
}

export default ProductTable;
