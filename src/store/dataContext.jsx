import { useReducer, createContext, useState, useEffect } from "react";
export const DataContext = createContext({
  posts: [],
  postsAlterFunctions: {
    addNewItem: () => {},
    deleteItem: () => {},
  },
  currentTab: "",
  tabAlterFunction: () => {},
});

function postReducer(state, action) {
  let dispatchState = [];
  if (action.type === "ADD_NEW_ITEM") {
    const newItem = { ...action.payload.item, id: state.length };
    dispatchState = [newItem, ...state];
    dispatchState = dispatchState.map((item, index) => ({
      ...item,
      id: index,
    }));
  } else if (action.type === "DELETE_ITEM") {
    dispatchState = state.filter((item) => item.id !== action.payload.id);
    dispatchState = dispatchState.map((item, index) => ({
      ...item,
      id: index,
    }));
  } else if (action.type === "CREATE_DATA") {
    dispatchState = action.payload.prop;
  } else {
    dispatchState = [...state];
  }
  return dispatchState;
}

export default function dataContextProvider({ children }) {
  const [currentTab, setCurrentTab] = useState(
    window.location.pathname === "/home" || "/" ? "home" : ""
  );
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    let data = [];
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        data = obj.posts.map((item) => item);
        data = data.map((item) => {
          return {
            id: item.id,
            title: item.title,
            comments: item.body,
            hashtags: item.tags,
            reactionCount: item.reactions.likes + item.reactions.dislikes,
          };
        });
        createData(data);
        setLoadingState(false);
      });
    return () => {
      controller.abort;
    };
  }, []);
  const [posts, dispatchPosts] = useReducer(postReducer, []);
  function addNewItem(item) {
    const addNewItem = {
      type: "ADD_NEW_ITEM",
      payload: { item },
    };
    dispatchPosts(addNewItem);
  }

  function deleteItem(id) {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: { id },
    };
    dispatchPosts(deleteItem);
  }

  function createData(prop) {
    dispatchPosts({
      type: "CREATE_DATA",
      payload: { prop },
    });
  }

  function toggleTab() {
    setCurrentTab((prevTab) => (prevTab === "home" ? "" : "home"));
  }

  return (
    <DataContext.Provider
      value={{
        posts: posts,
        postsAlterFunctions: {
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        },
        currentTab: currentTab,
        tabAlterFunction: toggleTab,
        loadingState: loadingState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

let DUMMY_POST_DATA = [
  {
    id: 0,
    title: "Mumbai Tour",
    reactionCount: 0,
    comments: "The tour was refreshing and very awesome",
    hashtags: ["mumbai", "everylasting", "memories"],
  },
  {
    id: 3,
    title: "Delhi Tour",
    comments: "Best of memories in best of places",
    reactionCount: 500,
    hashtags: ["Delhi", "everylasting", "memories"],
  },
];
