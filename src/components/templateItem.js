const TemplateItem = ({
    data
}) => {
    return (
        <div className="product">
            <img src={data.img} alt="img" className="product-img" />
            <p className="product-name">{data.name}</p>
            <p className="product-description">{data.description}</p>
            <p className="product-price">{data.price} $</p>
            <p className="product-rating">{'*'.repeat(data.rating)}</p>
            <button className="add">Add To Cart</button>
        </div>
    )
}

export default TemplateItem;