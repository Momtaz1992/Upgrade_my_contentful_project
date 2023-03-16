import Link from "./Link";

export default function Recipe({ item }) {
  // Destructure recipe data from item prop
  const {
    title,
    slug,
    cookingTime,
    thumbnail,
    featuredImages,
    ingredients,
    methods,
  } = item.fields;

  return (
    <div className="card">
      <div className="featured">
        <img src={thumbnail.fields.file.url} width="650" height="500" />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          {/* Render Link component with recipe slug prop */}
          <Link slug={slug} />
        </div>
        {/* Render recipe ingredients */}
        <div>{item.fields.ingredients}</div>
        <details>
          <summary>Method</summary>
          <ul>
            {methods}
          </ul>
        </details>
        
        
      </div>
    </div>
  );
}



