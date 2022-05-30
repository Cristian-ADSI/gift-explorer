export const GiftGridItem = ({ title, url }) => {
  return (
    <div className="gif__card animate__animated animate__fadeInUp">
      <div className="img__container">
        <img src={url} alt={title} />
      </div>

      <p>{title}</p>
    </div>
  );
};
