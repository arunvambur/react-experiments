import React from "react";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Arun Venkatesan",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Arun Venkatesan",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState("React");

  const handleSearch = (event) => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    //console.log(searchTerm);
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} OnSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
}

const Search = ({ search, OnSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" value={search} onChange={OnSearch} />
    </div>
  );
};

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />);

const Item = ({ item: {
  title,
  url,
  author,
  num_comments,
  points
} }) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);

export default App;
