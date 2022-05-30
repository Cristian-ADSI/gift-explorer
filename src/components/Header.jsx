const giphyLogo =
  "https://i.pinimg.com/originals/58/e3/83/58e3834fdfe26e6d1853eb14d89cbff1.gif";
export const Header = () => {
  return (
    <header>
      <h1>
        Gift <span>ExplorerApp</span>
      </h1>
      <div className="giphy">
        <p>powered by</p>
        <a href="https://giphy.com/" target="_blank" rel="noreferrer">
          <img src={giphyLogo} alt="Giphy Logo" />
        </a>
      </div>
    </header>
  );
};
