export const ItemDetail = ({ product }) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
        </div>
        <div>{product.stock}</div>
    </div>
);