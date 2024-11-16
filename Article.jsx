const ArticleStatus = ({ isNew }) => {
  return isNew && <span>Baru</span>;
};

const NewArticle = () => {
  return <span>baru</span>;
};

function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <small>
        Date : {props.date}, tags: {props.tags.join(",")}
        {""}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}

export default Article;
