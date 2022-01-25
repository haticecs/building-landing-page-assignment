import ArticleItem from "./ArticleItem";
export { Container } from "./styled";

/*IsOdd prop is used to reverse row according to the design via indexes */
const Articles = ({ articles }) => {
  return (
    <Container>
      {articles.map((article, index) => (
        <ArticleItem
          title={article.title}
          image={article.image}
          description={article.description}
          isOdd={index % 2 !== 0}
        />
      ))}
    </Container>
  );
};

export default Articles;
