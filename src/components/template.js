import TemplateItem from "./templateItem";

const Template = ({
    data, path
}) => {
    let products = [];
    
    data.forEach(product => {
        if (product.type === path) {
            products.push(product);
        }
    });

    return (
        <main id="main-content">
            <aside id="filter">
                <form>
                    <fieldset>
                        <label htmlFor="brand">Brand</label>
                        <select name="brand" id="brand">
                            <option value="empty">-</option>
                            <option value="adidas">Adidas</option>
                            <option value="nike">Nike</option>
                            <option value="new-balance">New Balance</option>
                            <option value="reebok">Reebok</option>
                            <option value="vans">Vans</option>
                            <option value="asics">Asics</option>
                            <option value="puma">Puma</option>
                        </select>
                        <label htmlFor="color">Color</label>
                        <select name="color" id="color">
                            <option value="empty">-</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                        </select>
                        <button id="filter-btn">Filter</button>
                    </fieldset>
                </form>
            </aside>
            <div id="holder">
                <div id="category">
                    <p></p>
                </div>
                <div id="sort">
                    <form>
                        <fieldset>
                            <select name="" id="sort-select">
                                <option value="empty">-</option>
                                <option value="a-z">Alphabetical a-z</option>
                                <option value="z-a">Alphabetical z-a</option>
                                <option value="ascending">Price ascending</option>
                                <option value="descending">Price descending</option>
                            </select>
                            <button id="sort-btn">Sort</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div id="product-grid">
                {products.map(x => <TemplateItem key={x.name} data={x} />)}
            </div>
            <div id="load-more">
                <button id="load-more-btn">Load More</button>
            </div>
        </main>
    );
}

export default Template;