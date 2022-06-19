export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/products');
    const data = await res.json();
    return {
      props: {
        product: data,
      },
  };
}
