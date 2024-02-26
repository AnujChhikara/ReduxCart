
import ProductItem from './ProductItem';
import classes from './Products.module.css';



const DUMMY_PRODUCT =[
  {
    id: 'p1',
    price:6,
    title: 'My First Book',
    description: 'the first book i wrote!!'
  },
  {
    id: 'p2',
    price:5,
    title: 'My Second Book',
    description: 'the second book i wrote!!'
  }
]

const Products = (props) => {

    
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (

          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          />
        ))}
      
      </ul>
    </section>
  );
};

export default Products;
