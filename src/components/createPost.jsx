import { useContext, useRef } from "react";
import { DataContext } from "../store/dataContext";
import { useNavigate } from "react-router-dom";
export default function createPost() {
  const addNewItem = useContext(DataContext).postsAlterFunctions.addNewItem;
  const titleRef = useRef();
  const commentRef = useRef();
  const reactionCountRef = useRef();
  const tagsRef = useRef();
  const navigate = useNavigate();
  function submitPost(event) {
    event.preventDefault();
    if (
      titleRef.current.value &&
      commentRef.current.value &&
      reactionCountRef.current.value &&
      tagsRef.current.value
    ) {
      addNewItem({
        title: titleRef.current.value,
        comments: commentRef.current.value,
        reactionCount: reactionCountRef.current.value,
        hashtags: tagsRef.current.value.split(" ").filter((word) => word),
      });
      titleRef.current.value = "";
      commentRef.current.value = "";
      reactionCountRef.current.value = "";
      tagsRef.current.value = "";
      navigate("/knock/home");
    } else {
      if (!titleRef.current.value) {
        const originalBorderColor = titleRef.current.style.borderColor;
        titleRef.current.style.borderColor = "red";
        setTimeout(() => {
          titleRef.current.style.borderColor = originalBorderColor;
        }, 2000);
      }
      if (!commentRef.current.value) {
        const originalBorderColor = commentRef.current.style.borderColor;
        commentRef.current.style.borderColor = "red";
        setTimeout(() => {
          commentRef.current.style.borderColor = originalBorderColor;
        }, 2000);
      }
      if (!reactionCountRef.current.value) {
        const originalBorderColor = reactionCountRef.current.style.borderColor;
        reactionCountRef.current.style.borderColor = "red";
        setTimeout(() => {
          reactionCountRef.current.style.borderColor = originalBorderColor;
        }, 2000);
      }
      if (!tagsRef.current.value) {
        const originalBorderColor = tagsRef.current.style.borderColor;
        tagsRef.current.style.borderColor = "red";
        setTimeout(() => {
          tagsRef.current.style.borderColor = originalBorderColor;
        }, 2000);
      }
    }
    useNavigate("/knock/home");
  }
  return (
    <div className="createPost">
      <form style={{ width: "30rem", padding: "1rem" }} onSubmit={submitPost}>
        <div className="mb-3">
          <label for="titleInput" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            ref={titleRef}
            placeholder="How you are feeling today..."
          />
        </div>

        <div className="mb-3">
          <label for="contentInput" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="contentInput"
            rows={4}
            ref={commentRef}
            placeholder="Tell us more about it..."
          />
        </div>

        <div className="mb-3">
          <label for="reactionCountInput" className="form-label">
            Number of Reactions
          </label>
          <input
            type="number"
            className="form-control"
            id="reactionCountInput"
            ref={reactionCountRef}
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label for="tagsInput" className="form-label">
            Post Hashtags
          </label>
          <input
            type="text"
            className="form-control"
            id="tagsInput"
            ref={tagsRef}
            placeholder="Please enter tags using space."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}
